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
        }
    }

    hide() {
        this.page_parts.get("Game").hidden = true;
    }
}

export default GameController;
