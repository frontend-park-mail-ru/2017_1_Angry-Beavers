/**
 * Created by ed on 20.05.17.
 */

'use strict';

import Konva from 'konva/src/Core';
import 'konva/src/shapes/Rect';
import 'konva/src/shapes/Text';
import 'konva/src/shapes/Line';
import 'konva/src/shapes/Image';
import 'konva/src/Animation';
import 'konva/src/Tween';

import View from '../modules/view';

const STAGE_WIDTH = 1280;
const STAGE_HEIGHT = 720;

const TABLE_TOP = 100;
const TABLE_LEFT = 10;
const TABLE_CARD_WIDTH = 150;
const TABLE_CARD_HEIGHT = TABLE_CARD_WIDTH * 1.4786324786324787;
const TABLE_CARD_OFFSET = 30;
const TABLE_CARD_BORDER_THICKNESS = 4;
const TABLE_CARD_BORDER_RADIUS = 4;

const CARD_WIDTH = 110;
const CARD_HEIGHT = CARD_WIDTH * 1.4786324786324787;
const CARD_OFFSET = 20;
const CARD_BORDER_THICKNESS = 4;
const CARD_BORDER_RADIUS = 4;

const USERS_TOP = 50;
const USERS_RIGHT = 20;
const USERS_WIDTH = 300;
const USERS_BORDER_RADIUS = 5;

const USER_HEIGHT = 50;
const USER_AVATAR_WIDTH = 50;

const USER_AVATARS = [
    '/images/avatars/1.jpg',
    '/images/avatars/2.jpg',
    '/images/avatars/3.jpg',
    '/images/avatars/4.jpg',
    '/images/avatars/5.jpg',
    '/images/avatars/6.jpg',
    '/images/avatars/7.jpg',
    '/images/avatars/8.jpg',
    '/images/avatars/9.jpg',
    '/images/avatars/10.jpg',
];

const generateHandCard = function (card) {
    let group = new Konva.Group();
    let cardImg = new Image();
    cardImg.src = `/images/avatars/${card.id % 10 + 1}.jpg`;
    cardImg.onload = function () {
        let img = new Konva.Image({
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
            image: cardImg,
        });
        group.add(img);
        group.draw();
    };

    return group;
};

const generateTableCard = function (card) {
    let group = new Konva.Group();
    let cardImg = new Image();
    cardImg.src = `/images/avatars/${card.id % 10 + 1}.jpg`;
    cardImg.onload = function () {
        let img = new Konva.Image({
            width: TABLE_CARD_WIDTH,
            height: TABLE_CARD_HEIGHT,
            image: cardImg,
        });
        group.add(img);
        group.draw();
    };

    return group;
};

const generateUser = function (user) {
    let userGroup = new Konva.Group();

    // user avatar
    let userAvatarImage = new Image();
    userAvatarImage.src = user.avatar;
    userAvatarImage.onload = function () {
        let userAvatar = new Konva.Image({
            x: 1,
            y: 1,
            cornerRadius: USER_AVATAR_WIDTH / 2,
            width: USER_AVATAR_WIDTH - 2,
            height: USER_AVATAR_WIDTH - 2,
            image: userAvatarImage,
        });
        userGroup.add(userAvatar);
        userAvatar.draw();
    }.bind(this);

    // user's nick
    let userNick = new Konva.Text({
        x: USER_AVATAR_WIDTH + 5,
        y: 12,
        width: USERS_WIDTH,
        text: user['userLogin'],
        align: 'left',
        fontSize: 16,
        fontFamily: 'DigitalStrip',
    });
    userGroup.add(userNick);

    // master indicator
    let userDescription = new Konva.Text({
        x: USER_AVATAR_WIDTH + 5,
        y: 30,
        width: USERS_WIDTH,
        text: `${user['isMaster'] ? 'Ведущий, ' : ''}Очки: ${user['score']}`,
        align: 'left',
        fill: 'gray',
        fontSize: 12,
        fontFamily: 'DigitalStrip',
    });
    userGroup.add(userDescription);

    return userGroup;

};

class GameController extends View {
    constructor(opt = {}) {
        if (GameController.__instance) {
            return GameController.__instance;
        }
        super(opt);
        GameController.__instance = this;
        this.addListener();
    }

    addListener() {

    }

    resume() {
        this.show();
    }

    show() {
        if (!this.session.isAuth) {
            this.router.go('/signin');
        }
        else {
            this.page_parts.get("Game").hidden = false;
            if (window.location.pathname === '/gameFake/' || window.location.pathname === '/gameFake') { // ну это "или" это полный пиздос, но чё поделать времени мало...
                this._game = this.session.createFakeGame();
            } else {
                this._game = this.session.createGame();
            }
            this._game.onHandInfo = this._updateHand.bind(this);
            this._game.onError = x => alert(`Error ${JSON.stringify(x)}`);
            this._game.onClosed = x => alert(`Closed ${JSON.stringify(x)}`);
            this._game.onRoundInfo = this._updateRound.bind(this);
            this._game.onTableInfo = this._updateTable.bind(this);
            this._createCanvas();
            this._game.start();
        }
    }

    hide() {
        this.page_parts.get("Game").hidden = true;
        this._game.stop();
    }

    _createCanvas() {
        this._stage = new Konva.Stage({
            container: 'container',
            width: STAGE_WIDTH,
            height: STAGE_HEIGHT
        });

        let fitStageIntoParentContainer = function () {
            let scale = Math.min(window.innerWidth / STAGE_WIDTH, window.innerHeight / STAGE_HEIGHT);
            this._stage.width(STAGE_WIDTH * scale);
            this._stage.height(STAGE_HEIGHT * scale);
            this._stage.scale({x: scale, y: scale});
            this._stage.draw();
        }.bind(this);
        fitStageIntoParentContainer();

        window.addEventListener('resize', fitStageIntoParentContainer);
        window.addEventListener('orientationchange', fitStageIntoParentContainer);
    }

    _updateHand() {
        this._layerHand && this._layerHand.remove();
        this._layerHand = new Konva.Layer({
            x: 0,
            y: STAGE_HEIGHT - CARD_HEIGHT - CARD_BORDER_THICKNESS,
        });
        this._stage.add(this._layerHand);
        this._game.hand.forEach(function (card, i) {
            let group = generateHandCard.bind(this)(card);
            group.setX((CARD_WIDTH + CARD_OFFSET) * (i + 1));
            group.setY(0);

            group.on('mousedown touchstart', function () {
                this._game.selectCard(card.id);
            }.bind(this));
            this._layerHand.add(group);
        }.bind(this));

        this._layerHand.drawScene();
    }

    _updateRound() {
        this._layerUsers && this._layerUsers.remove();
        this._layerUsers = new Konva.Layer({
            x: STAGE_WIDTH - USERS_RIGHT - USERS_WIDTH,
            y: USERS_TOP,
        });
        this._stage.add(this._layerUsers);

        const shuffled = USER_AVATARS.sort(() => .5 - Math.random());// shuffle
        const avatars = shuffled.slice(0, this._game.users.length); //get sub-array of first n elements AFTER shuffle

        // the outer box
        let border = new Konva.Rect({
            x: 0,
            y: 0,
            width: USERS_WIDTH,
            height: USER_HEIGHT * (1 + this._game.users.length),
            stroke: 'black',
            strokeWidth: 1,
            cornerRadius: USERS_BORDER_RADIUS,
        });
        this._layerUsers.add(border);

        // title text
        let title = new Konva.Text({
            x: 0,
            y: 16,
            width: USERS_WIDTH,
            text: "Игроки",
            align: 'center',
            fontSize: 20,
            fontFamily: 'DigitalStrip',
        });
        this._layerUsers.add(title);

        // head separator
        let titleSeparator = new Konva.Line({
            points: [0, USER_HEIGHT, USERS_WIDTH, USER_HEIGHT],
            stroke: 'black',
            strokeWidth: 1,
        });
        this._layerUsers.add(titleSeparator);

        // list of users
        let usersGroup = new Konva.Group({
            x: 0,
            y: 50,
        });
        this._game.users.forEach(function (user, i) {
            // current user line
            user.avatar = avatars[i];
            let userGroup = generateUser(user);
            userGroup.setX(0);
            userGroup.setY(i * USER_HEIGHT);

            if (i !== this._game.users.length - 1) {
                // users separator
                let userSeparator = new Konva.Line({
                    points: [0, USER_HEIGHT, USERS_WIDTH, USER_HEIGHT],
                    stroke: 'black',
                    strokeWidth: 1,
                });
                userGroup.add(userSeparator);
            }
            usersGroup.add(userGroup);
        }.bind(this));
        this._layerUsers.add(usersGroup);

        this._layerUsers.drawScene();
    }

    _updateTable() {
        this._layerTable && this._layerTable.remove();
        this._layerTable = new Konva.Layer({
            x: TABLE_LEFT,
            y: TABLE_TOP,
        });
        this._stage.add(this._layerTable);

        this._game.table.forEach(function (card, i) {
            if (!card || typeof card === "string") return;
            let group = generateTableCard(card);
            group.setX((TABLE_CARD_WIDTH + TABLE_CARD_OFFSET) * (i + 1));
            group.setY(0);
            this._layerTable.add(group);
        }.bind(this));
        this._layerTable.drawScene();
    }
}

export default GameController;
