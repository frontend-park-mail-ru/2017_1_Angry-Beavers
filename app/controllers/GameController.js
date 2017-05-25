/**
 * Created by ed on 20.05.17.
 */

'use strict';

import Konva from 'konva/src/Core';
import 'konva/src/shapes/Rect';
import 'konva/src/shapes/Circle';
import 'konva/src/shapes/Arc';
import 'konva/src/shapes/Text';
import 'konva/src/shapes/Line';
import 'konva/src/shapes/Image';
import 'konva/src/Animation';
import 'konva/src/Tween';

import View from '../modules/view';

const STAGE_WIDTH = 1280;
const STAGE_HEIGHT = 720;

const TABLE_TOP = 100;
const TABLE_CARD_WIDTH = 150;
const TABLE_CARD_HEIGHT = TABLE_CARD_WIDTH * 1.4786324786324787;
const TABLE_CARD_OFFSET = 30;
const TABLE_CARD_BORDER_THICKNESS = 4;
const TABLE_CARD_BORDER_RADIUS = 4;

const CARD_WIDTH = 145;
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

const TOOLTIP_LEFT = 10;
const TOOLTIP_TOP = 10;
const TOOLTIP_TIMER_SIZE = 50;
const TOOLTIP_TEXT_TOP = TOOLTIP_TIMER_SIZE / 2 - 8;

const ERROR_LOGO_SIZE = 140;

let USER_AVATARS = [
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

// меня задолбала копипаста, поэтому я всё таки написал функции, но это по-прежнему индусский гавнокод
const generateCard = function (card) {
    let group = new Konva.Group({
        width: TABLE_CARD_WIDTH,
        height: TABLE_CARD_HEIGHT,
        fill: 'white',
    });
    let cardImg = new Image();
    cardImg.src = `https://raw.githubusercontent.com/ed-asriyan/joking-hazard-cards/master/pure-cropped/${Math.trunc((card.id - 1) / 9) + 1}_${card.id % 9}.jpg`;
    cardImg.onload = function () {
        let img = new Konva.Image({
            image: cardImg,
            strokeWidth: 2,
            width: TABLE_CARD_WIDTH,
            height: TABLE_CARD_HEIGHT,
            stroke: card.red ? 'red' : 'black',
            opacity: 0,
        });
        group.add(img);
        if (img.getLayer()) {
            let tween = new Konva.Tween({
                node: img,
                opacity: 1,
                duration: 0.3
            });
            tween.play();
        } else {
            img.opacity(1);
        }
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
            opacity: 0
        });
        userGroup.add(userAvatar);
        if (userAvatar.getLayer()) {
            let tween = new Konva.Tween({
                node: userAvatar,
                opacity: 1,
                duration: 0.3
            });
            tween.play();
        } else {
            userAvatar.opacity(1);
        }
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

const generateTimer = function (time = 60) {
    let timer = new Konva.Group({});

    let circleBack = new Konva.Circle({
        x: 0,
        y: 0,
        radius: TOOLTIP_TIMER_SIZE / 2,
        stroke: 'gray',
        strokeWidth: 2,
    });
    timer.add(circleBack);

    let circleFront = new Konva.Arc({
        x: 0,
        y: 0,
        innerRadius: TOOLTIP_TIMER_SIZE / 2 - 0.5,
        outerRadius: TOOLTIP_TIMER_SIZE / 2 + 0.5,
        angle: 360,
        stroke: 'black',
        fill: 'black',
        scaleY: -1,
        rotation: -90,
    });
    timer.add(circleFront);

    let text = new Konva.Text({
        x: -TOOLTIP_TIMER_SIZE / 2,
        y: -TOOLTIP_TIMER_SIZE / 2 + TOOLTIP_TEXT_TOP,
        width: TOOLTIP_TIMER_SIZE,
        align: 'center',
        fontSize: 20,
        fontFamily: 'DigitalStrip',
        text: time,
    });
    timer.add(text);

    let tween = new Konva.Tween({
        node: circleFront,
        angle: 0,
        duration: 60,
    });
    tween.play();

    let _;
    _ = () => {
        if (time) {
            text.text(--time);
            text.getLayer() && text.getLayer().drawScene();
            setTimeout(_, 1000);
        }
    };
    _();

    return timer;
};

const generateTooltipText = function (text) {
    let group = new Konva.Group({});
    let _text = new Konva.Text({
        align: 'left',
        text: text,
        fontSize: 20,
        fontFamily: 'DigitalStrip',
    });
    group.add(_text);
    return group;
};

const insertItem = function (parent, item) {
    parent.add(item);
    const tween = new Konva.Tween({
        node: item,
        duration: 0.3,
        opacity: 1,
    });
    tween.play();
    return new Promise(r => setTimeout(r, 300));
};

const removeItem = function (item) {
    const tween = new Konva.Tween({
        node: item,
        duration: 0.3,
        opacity: 0,
    });
    tween.play();
    return new Promise(r => setTimeout(r, 300))
        .then(() => item.remove());
};

const replaceItem = function (oldItem, newItem) {
    let parent = oldItem.getParent();
    return removeItem(oldItem)
        .then(() => insertItem(parent, newItem));
};

const listUpdate = function (parent, oldItems, newItems) {
    for (let i = 0; i < newItems.length; ++i) {
        if (oldItems[i] && oldItems[i].id === newItems[i].id) {
            newItems[i].item = oldItems[i].item;
            continue;
        }

        newItems[i].item = newItems[i].itemGenerator();
        // если уже на экране уже есть итем
        if (oldItems[i]) {
            let parent = oldItems[i].item.getParent();
            removeItem(oldItems[i].item)
                .then(() => {
                    insertItem(parent, newItems[i].item);
                    newItems[i].onAdd && newItems[i].onAdd(newItems[i].item);
                });
        }
        // если её нет
        else {
            insertItem(parent, newItems[i].item);
        }
    }
    // удаляем все последующие итемы с экрана
    for (let i = newItems.length; i < oldItems.length; ++i) {
        removeItem(oldItems[i].item);
    }

    return newItems;
};

const listHighlight = function (list) {
    list.forEach(c => {
        const tween = new Konva.Tween({
            node: c.item,
            opacity: 1,
            duration: 0.2,
        });
        tween.play();
    });
};

const listFade = function (list) {
    list.forEach(c => {
        const tween = new Konva.Tween({
            node: c.item,
            opacity: 0.6,
            duration: 0.2,
        });
        tween.play();
    });
};

const listSubscribe = function (options) {
    options.list.forEach(c => {
        c.item.on('mousedown touchstart', function () {
            options.onClick(c);
        });
        c.item.on('mouseover', function () {
            options.onMouseOver(c);
        });
        c.item.on('mouseout', function () {
            options.onMouseOut(c);
        });
    });
};

const listUnsubscribe = function (list) {
    list.forEach(c => {
        c.item.off('mousedown');
        c.item.off('touchstart');
        c.item.off('mouseover');
        c.item.off('mouseout');
    });
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
            USER_AVATARS = USER_AVATARS.sort(() => .5 - Math.random()); // shuffle

            this.page_parts.get("Game").hidden = false;
            if (window.location.pathname === '/gameFake/' || window.location.pathname === '/gameFake') { // ну это "или" это полный пиздос, но чё поделать времени мало...
                this._game = this.session.createFakeGame();
            } else {
                this._game = this.session.createGame();
            }

            this._game.onHandInfo = this._updateHand.bind(this);
            this._game.onError = x => function () {
                this._showError('произошла ошибка. пытаюсь соединиться с сервером...');
                this._game.stop();
                this._game.start();
            }.bind(this);
            this._game.onClosed = function () {
                this._showError('что-то с интернетом. пытаюсь соединиться с сервером...');
                this._game.start();
            }.bind(this);
            this._game.onRoundInfo = function () {
                this._showGame();
                this._updateUsers();
            }.bind(this);
            this._game.onTableInfo = function () {
                this._showGame();
                this._updateTable();
            }.bind(this);
            this._game.onGetCardFromHand = function () {
                this._showGame();
                this._updateTooltip('chooseCardFromHand');
                this._onSelectFromHand();
            }.bind(this);
            this._game.onGetCardFromTable = function () {
                this._showGame();
                this._updateTooltip('chooseCardFromTable');
                this._onSelectFromTable();
            }.bind(this);
            this._game.onGameFinishedMessage = function () {
                alert('Game over');
                this.router.go('/');
            }.bind(this);
            this._createCanvas();
            this._showGame();
            this._game.start();
        }
    }

    hide() {
        this.page_parts.get("Game").hidden = true;
        this._game && this._game.stop();
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

        this._layerGame = new Konva.Layer();
        this._stage.add(this._layerGame);

        this._layerError = new Konva.Layer();
        this._stage.add(this._layerError);

        this._updateTooltip('waitForPlayers');

        window.addEventListener('resize', fitStageIntoParentContainer);
        window.addEventListener('orientationchange', fitStageIntoParentContainer);

        const exitButton = new Konva.Text({
            x: STAGE_WIDTH - USERS_RIGHT - 85,
            y: 15,
            align: 'center',
            fontSize: 20,
            fontFamily: 'DigitalStrip',
            text: 'Выйти',
        });

        exitButton.on('mousedown touchstart', function () {
            this.router.go('/');
        }.bind(this));
        exitButton.on('mouseover', function () {
            this._stage.container().style.cursor = 'pointer';
            let tween = new Konva.Tween({
                node: exitButton,
                fontSize: 23,
                duration: 0.2
            });
            tween.play();
        }.bind(this));
        exitButton.on('mouseout', function () {
            this._stage.container().style.cursor = 'default';
            let tween = new Konva.Tween({
                node: exitButton,
                fontSize: 20,
                duration: 0.2
            });
            tween.play();
        }.bind(this));
        this._layerGame.add(exitButton);
    }

    _updateHand() {
        if (!this._groupHand) {
            this._groupHand = new Konva.Group({
                x: 0,
                y: STAGE_HEIGHT - CARD_HEIGHT - CARD_BORDER_THICKNESS,
            });
            this._layerGame.add(this._groupHand);
        }

        if (!this._hand) this._hand = [];

        listUnsubscribe(this._hand);

        let newHand = [];
        this._game.hand.forEach(function (card, i) {
            if (!card || typeof card === "string") return;
            newHand.push({
                id: card.id % 10 + 1,
                index: i,
                card: card,
                itemGenerator: () => {
                    let group = generateCard.bind(this)(card);

                    group.setX((CARD_WIDTH + CARD_OFFSET) * i + 5);
                    group.setY(0);
                    group.scale({
                        x: CARD_WIDTH / group.getWidth(),
                        y: CARD_HEIGHT / group.getHeight()
                    });

                    return group;
                },
                onAdd: group => {
                    let highLight = new Konva.Tween({
                        node: group,
                        opacity: 1,
                        duration: 0.2
                    });

                    group.on('mouseover', function () {
                        highLight.play();
                    });
                    group.on('mouseout', function () {
                        highLight.reverse();
                    });
                }
            });
        }.bind(this));
        this._hand = listUpdate(this._groupHand, this._hand, newHand);
        this._layerGame.drawScene();

        const cardsWidth = this._hand.length * (CARD_OFFSET + CARD_WIDTH) - CARD_OFFSET;
        const tween = new Konva.Tween({
            node: this._groupHand,
            x: (STAGE_WIDTH - cardsWidth) / 2,
            y: STAGE_HEIGHT - CARD_HEIGHT - CARD_BORDER_THICKNESS,
            duration: 0.45,
            easing: Konva.Easings['StrongEaseOut'],
        });
        tween.play();
    }

    _updateUsers() {
        if (!this._groupUsers) {
            let layerUserBox = new Konva.Group({
                x: STAGE_WIDTH - USERS_RIGHT - USERS_WIDTH,
                y: USERS_TOP,
            });
            this._layerGame.add(layerUserBox);

            // the outer box
            let border = new Konva.Rect({
                x: 0,
                y: 0,
                fill: 'white',
                width: USERS_WIDTH,
                height: USER_HEIGHT * (1 + this._game.users.length),
                stroke: 'black',
                strokeWidth: 1,
                cornerRadius: USERS_BORDER_RADIUS,
            });
            layerUserBox.add(border);

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
            layerUserBox.add(title);

            // head separator
            let titleSeparator = new Konva.Line({
                points: [0, USER_HEIGHT, USERS_WIDTH, USER_HEIGHT],
                stroke: 'black',
                strokeWidth: 1,
            });
            layerUserBox.add(titleSeparator);

            // список игроков
            this._groupUsers = new Konva.Group({
                x: 0,
                y: 50,
            });
            layerUserBox.add(this._groupUsers);
        }

        if (!this._users) this._users = [];

        let newUsers = [];
        this._game.users.forEach(function (user, i) {
            newUsers.push({
                id: `${user.nickname}${user.score}${user.isMaster}`,
                itemGenerator: () => {
                    // current user line
                    user.avatar = USER_AVATARS[i];
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

                    return userGroup;
                }
            });
        }.bind(this));
        this._users = listUpdate(this._groupUsers, this._users, newUsers);
        this._layerGame.drawScene();
    }

    _updateTable() {
        if (!this._groupTable) {
            this._groupTable = new Konva.Group({
                y: TABLE_TOP,
            });
            this._layerGame.add(this._groupTable);
        }

        if (!this._table) this._table = [];

        let newTable = [];
        let _i = 0;
        this._game.table.forEach(function (card, i) {
            if (!card || typeof card === "string") return;
            let __i = _i;
            ++_i;
            newTable.push({
                id: card.id,
                card: card,
                index: i,
                itemGenerator: () => {
                    let group = generateCard.bind(this)(card);
                    group.scale({
                        x: TABLE_CARD_WIDTH / group.getWidth(),
                        y: TABLE_CARD_HEIGHT / group.getHeight()
                    });
                    group.setX((TABLE_CARD_WIDTH + TABLE_CARD_OFFSET) * (__i + 1));
                    group.setY(0);
                    return group;
                }
            });
        }.bind(this));
        this._table = listUpdate(this._groupTable, this._table, newTable);
        this._layerGame.drawScene();

        const cardsWidth = this._table.length * (TABLE_CARD_OFFSET + TABLE_CARD_WIDTH) - TABLE_CARD_OFFSET;
        const tableWidth = STAGE_WIDTH - 2 * USERS_WIDTH - 2 * USERS_RIGHT;
        const tween = new Konva.Tween({
            node: this._groupTable,
            x: (tableWidth - cardsWidth) / 2,
            y: TABLE_TOP,
            duration: 0.45,
            easing: Konva.Easings['StrongEaseOut'],
        });
        tween.play();
    }


    _onSelectFromHand() {
        this._updateHand();

        const moveCard = function (item, isUp) {
            const tween = new Konva.Tween({
                node: item,
                y: isUp ? -20 : 0,
                duration: 0.2,
                easing: Konva.Easings.StrongEaseOut,
            });
            tween.play();
        };

        listHighlight(this._hand);
        listSubscribe({
            list: this._hand,
            onClick: function (c) {
                if (c.card.red && this._game.roundCount - 1 !== this._game.roundNum) return;

                moveCard(c.item, false);

                this._stage.container().style.cursor = 'default';
                this._game.selectCardFromHand(c.index);

                listUnsubscribe(this._hand);
                listFade(this._hand);

                this._updateTooltip('waitForPlayers');
            }.bind(this),
            onMouseOver: function (c) {
                if (c.card.red && this._game.roundCount - 1 !== this._game.roundNum) return;

                moveCard(c.item, true);

                this._stage.container().style.cursor = 'pointer';
            }.bind(this),
            onMouseOut: function (c) {
                if (c.card.red && this._game.roundCount - 1 !== this._game.roundNum) return;

                moveCard(c.item, false);

                this._stage.container().style.cursor = 'default';
            }.bind(this),
        });
    }

    _onSelectFromTable() {
        this._updateTable();

        const moveCard = function (item, isUp) {
            const tween = new Konva.Tween({
                node: item,
                scaleX: isUp ? 1.1 : 1,
                scaleY: isUp ? 1.1 : 1,
                duration: 0.2,
                easing: Konva.Easings.StrongEaseOut,
            });
            tween.play();
        };

        listSubscribe({
            list: this._table,
            onClick: function (c) {
                this._stage.container().style.cursor = 'default';

                this._game.selectCardFromTable(c.index);

                listUnsubscribe(this._table);
                moveCard(c.item, false);

                this._updateTooltip('waitForPlayers');
            }.bind(this),
            onMouseOver: function (c) {
                moveCard(c.item, true);

                this._stage.container().style.cursor = 'pointer';
            }.bind(this),
            onMouseOut: function (c) {
                moveCard(c.item, false);

                this._stage.container().style.cursor = 'default';
            }.bind(this),
        });
    }

    _updateTooltip(state) {
        if (!this._groupHint) {
            this._groupHint = new Konva.Group({
                x: TOOLTIP_LEFT,
                y: TOOLTIP_TOP,
            });

            this._layerGame.add(this._groupHint);
        }

        switch (state) {
            case 'chooseCardFromHand':
                this._updateTooltipText('Выбери карту');
                this._startTimer();
                break;
            case 'chooseCardFromTable':
                this._updateTooltipText('Выбери карту на столе');
                this._startTimer();
                break;
            case 'waitForPlayers':
                this._updateTooltipText('Подожди остальных игроков...');
                this._startTimer();
                break;
            default:
                this._tooltipText.text('');
                this._stopTimer();
        }

        this._groupHint.drawScene();
    }

    _updateTooltipText(text) {
        let newText = generateTooltipText(text);
        newText.setX(TOOLTIP_TIMER_SIZE + 10);
        newText.setY(TOOLTIP_TEXT_TOP);
        newText.opacity(0);
        if (this._tooltipText) {
            replaceItem(this._tooltipText, newText);
        } else {
            insertItem(this._groupHint, newText);
        }
        this._tooltipText = newText;
        this._groupHint.add(this._tooltipText);
    }

    _startTimer() {
        this._stopTimer();
        this._tooltipTimer = generateTimer();
        this._tooltipTimer.setX(TOOLTIP_TIMER_SIZE / 2);
        this._tooltipTimer.setY(TOOLTIP_TIMER_SIZE / 2);
        this._groupHint.add(this._tooltipTimer);
        insertItem(this._groupHint, this._tooltipTimer);
        this._groupHint.drawScene();
    }

    _stopTimer() {
        if (this._tooltipTimer) {
            return removeItem(this._tooltipTimer);
        }
        return new Promise(r => r());
    }

    _showGame() {
        if (this._groupError) {
            const errorTween = new Konva.Tween({
                node: this._layerError,
                opacity: 0,
                duration: 0.5,
            });

            this._groupError && this._groupError.remove();
            delete this._groupError;

            errorTween.play();
        }
    };

    _showError(text) {
        if (this._groupError) {
            this._groupErrorDescription.text(text);
            return;
        }

        const errorTween = new Konva.Tween({
            node: this._layerError,
            opacity: 1,
            duration: 0.5,
        });

        this._groupError && this._groupError.remove();
        this._groupError = new Konva.Group();
        this._layerError.add(this._groupError);

        const layerErrorLoader = new Konva.Arc({
            x: STAGE_WIDTH / 2,
            y: STAGE_HEIGHT / 2,
            innerRadius: 40,
            outerRadius: 70,
            angle: 1,
            fill: '#88C1D8',
            stroke: 'black',
            strokeWidth: 4
        });

        const layerErrorDescription = new Konva.Text({
            x: 0,
            y: (STAGE_HEIGHT + ERROR_LOGO_SIZE) / 2 + 50,
            width: STAGE_WIDTH,
            align: 'center',
            fontSize: 20,
            fontFamily: 'DigitalStrip',
            text: text,
        });
        this._groupErrorDescription = layerErrorDescription;

        const layerErrorButton = new Konva.Text({
            x: 0,
            y: STAGE_HEIGHT - 50,
            width: STAGE_WIDTH,
            align: 'center',
            fontSize: 20,
            fontFamily: 'DigitalStrip',
            text: 'Выйти',
        });

        layerErrorButton.on('mousedown touchstart', function () {
            this.router.go('/');
        }.bind(this));
        layerErrorButton.on('mouseover', function () {
            this._stage.container().style.cursor = 'pointer';
            let tween = new Konva.Tween({
                node: layerErrorButton,
                fontSize: 23,
                duration: 0.2
            });
            tween.play();
        }.bind(this));
        layerErrorButton.on('mouseout', function () {
            // layerErrorDescription.fontStyle('')
            this._stage.container().style.cursor = 'default';
            let tween = new Konva.Tween({
                node: layerErrorButton,
                fontSize: 20,
                duration: 0.2
            });
            tween.play();
        }.bind(this));

        this._groupError.add(layerErrorDescription);
        this._groupError.add(layerErrorLoader);
        this._groupError.add(layerErrorButton);

        let period = 2000;
        let tween1 = new Konva.Tween({
            node: layerErrorLoader,
            duration: period / 1000 / 2,
            easing: Konva.Easings.EaseInOut,
            fill: '#42A045',
            angle: 360,
        });
        let tween2 = new Konva.Tween({
            node: layerErrorLoader,
            duration: period / 829,
            easing: Konva.Easings.Linear,
            fill: '#42A045',
        });

        tween1.onFinish = () => tween1.reverse();
        tween1.onReset = () => tween1.play();
        tween1.play();
        tween2.onFinish = () => tween2.reverse();
        tween2.onReset = () => tween2.play();
        tween2.play();

        errorTween.play();
    };
}

export default GameController;
