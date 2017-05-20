/**
 * Created by ed on 20.05.17.
 */

'use strict';

import Konva from 'konva/src/Core';
import 'konva/src/shapes/Rect';
import 'konva/src/shapes/Text';
import 'konva/src/Animation';

import View from '../modules/view';

const STAGE_WIDTH = 1280;
const STAGE_HEIGHT = 720;

const CARD_WIDTH = 110;
const CARD_HEIGHT = CARD_WIDTH * 1.4786324786324787;
const CARD_OFFSET = 20;
const CARD_BORDER_THICKNESS = 4;
const CARD_BORDER_RADIUS = 4;

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
            if (this.router.activeRoute.pathname === /\/gameFake((\?[a-z0-9\-?\[\]=&;#]+)|$)/) {
                this._game = this.session.createFakeGame();
            } else {
                this._game = this.session.createGame();
            }
            this._game.onHandInfo = this._updateHand.bind(this);
            this._game.onError = x => alert(`Error ${JSON.stringify(x)}`);
            this._game.onClosed = x => alert(`Closed ${JSON.stringify(x)}`);
            this._game.onRoundInfo = x => alert(JSON.stringify(x));
            this._createCanvas();
            this._game.start();
        }
    }

    hide() {
        this.page_parts.get("Game").hidden = true;
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
            let group = new Konva.Group({
                x: (CARD_WIDTH + CARD_OFFSET) * (i + 1),
                y: 0,
            });
            let rect = new Konva.Rect({
                stroke: card.red ? 'red' : 'black',
                strokeWidth: CARD_BORDER_THICKNESS,
                cornerRadius: CARD_BORDER_RADIUS,
                width: CARD_WIDTH,
                height: CARD_HEIGHT
            });
            let simpleText = new Konva.Text({
                x: 0,
                y: 0,
                text: JSON.stringify(card, null, ' '),
                fontSize: 10,
                fontFamily: 'DigitalStrip',
            });
            group.add(simpleText);
            group.add(rect);
            this._layerHand.add(group);
        }.bind(this));
        this._layerHand.drawScene();
    }
}

export default GameController;
