/**
 * Created by ed on 20.05.17.
 */

'use strict';

import View from '../modules/view';

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
            if (window.location.pathname === '/gameFake') {
                this._game = this.session.createFakeGame();
            } else {
                this._game = this.session.createGame();
            }
            this._game.onHandInfo = x => alert(JSON.stringify(x));
            this._game.onError = x => alert(`Error ${JSON.stringify(x)}`);
            this._game.onClosed = x => alert(`Closed ${JSON.stringify(x)}`);
            this._game.onRoundInfo = x => alert(JSON.stringify(x));
            this._game.start();
            this._reDraw();
        }
    }

    hide() {
        this.page_parts.get("Game").hidden = true;
    }

    _reDraw() {

    }
}

export default GameController;
