/**
 * Created by ed on 06.05.17.
 */

'use strict';

import View from '../modules/view';

class LobbyController extends View {
    constructor(opt = {}) {
        if (LobbyController.__instance) {
            return LobbyController.__instance;
        }
        super(opt);
        LobbyController.__instance = this;
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
            this.page_parts.get("UserHeader").hidden = false;
            document.getElementById('userheader_login').innerHTML = this.session.user.login;
            document.getElementById('userheader_score').innerHTML = this.session.user.score;

            let lobby = this.session.createLobby();
            lobby.onInfo = function (data) {
                alert(JSON.stringify(data));
            };
            lobby.onClosed = (function () {
                this.router.go('/');
            }).bind(this);

            lobby.start();
        }
    }

    hide() {
        this.page_parts.get("UserHeader").hidden = true;
    }
}

export default LobbyController;
