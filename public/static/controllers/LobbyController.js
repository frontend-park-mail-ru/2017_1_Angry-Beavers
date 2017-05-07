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
            this.page_parts.get("Lobby").hidden = false;
            document.getElementById('userheader_login').innerHTML = this.session.user.login;
            document.getElementById('userheader_score').innerHTML = this.session.user.score;
            document.getElementById('lobby_users').innerHTML = '';
            let lobby = this.session.createLobby();
            lobby.onInfo = function (data) {
                document.getElementById('lobby_title').innerHTML = `Ожидаем игроков (${data.maxNumber})`;
                data.users.forEach(u => {
                    let user = document.createElement('label');
                    user.innerHTML = u.userLogin;
                    document.getElementById('lobby_users').appendChild(user);
                    document.getElementById('lobby_users').appendChild(document.createElement('hr'));
                });
            };
            lobby.onClosed = (function () {
                this.router.go('/');
            }).bind(this);
            lobby.onUserAdd = function (data) {
                let user = document.createElement('label');
                user.innerHTML = data.user.userLogin;
                document.getElementById('lobby_users').appendChild(user);
                document.getElementById('lobby_users').appendChild(document.createElement('hr'));
            };

            lobby.start();
        }
    }

    hide() {
        this.page_parts.get("UserHeader").hidden = true;
        this.page_parts.get("Lobby").hidden = true;
    }
}

export default LobbyController;
