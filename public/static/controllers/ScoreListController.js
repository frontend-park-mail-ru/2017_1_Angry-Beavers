/**
 * Created by pacman29 on 08.03.17.
 */
'use strict';

import View from '../modules/view';

class ScoreListController extends View {
    constructor(opt = {}) {
        if (ScoreListController.__instance) {
            return ScoreListController.__instance;
        }
        super(opt);
        ScoreListController.__instance = this;
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
        } else {
            this.page_parts.get("UserHeader").hidden = false;
            document.getElementById('userheader_login').innerHTML = this.session.user.login;
            document.getElementById('userheader_score').innerHTML = this.session.user.score;
            this.page_parts.get("ScoreList").hidden = false;
        }

        /*
         TODO :: Здесь нужно заполнить лидерборд, тут надо просто подумать
         */

        this.page_parts.get("Footer").hidden = false;
    }

    hide() {
        this.page_parts.get("UserHeader").hidden = true;
        this.page_parts.get("ScoreList").hidden = true;
        this.page_parts.get("Footer").hidden = true;
    }
}

export default ScoreListController;
