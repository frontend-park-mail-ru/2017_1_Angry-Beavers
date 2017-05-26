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
        [...document.querySelectorAll(".userheader__appname")]
            .concat([...document.querySelectorAll('.appname')])
            .forEach(a => a.addEventListener('click', event => {
                event.preventDefault();
                this.router.go("/");
            }));
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
            document.querySelectorAll('.userheader__login').forEach(a => a.innerHTML = this.session.user.login);
            document.querySelectorAll('.userheader__score').forEach(a => a.innerHTML = this.session.user.score);

            this._startLobby();
        }
    }

    hide() {
        this._stopLobby();
        this.page_parts.get("UserHeader").hidden = true;
        this.page_parts.get("Lobby").hidden = true;
    }

    _startLobby() {
        if (this._lobby) {
            this._lobby.stop();
        }

        let handler = this._updateInfo.bind(this);
        this._lobby = this.session.createLobby();

        handler();
        this._lobby.onInfo = handler;
        this._lobby.onError = (function () {
            this._lobby = this.session.createFakeLobby();
            this._lobby.onInfo = handler;
            this._lobby.onUserAdd = handler;
            this._lobby.onUserRemove = handler;
            this._lobby.start();
        }).bind(this);
        this._lobby.onUserAdd = handler;
        this._lobby.onUserRemove = handler;
        this._lobby.onGameStart = function () {
            alert('Game should be started...');
            this.router.go('/');
        }.bind(this);
        this._lobby.start();
    }

    _stopLobby() {
        this._lobby && this._lobby.stop();
    }

    _updateInfo() {
        document.getElementById('lobby_users').innerHTML = '';
        document.getElementById('lobby_title').innerHTML = 'Ожидаем игроков...';
        if (this._lobby && this._lobby.users) {
            document.getElementById('lobby_title').innerHTML = `Ожидаем игроков${this._lobby.maxUsersCount ? `(${this._lobby.maxUsersCount}` : ''})`;
            this._lobby.users.forEach(u => {
                let user = document.createElement('label');
                user.innerHTML = u.userLogin;
                document.getElementById('lobby_users').appendChild(user);
                document.getElementById('lobby_users').appendChild(document.createElement('hr'));
            });
        }
    }
}

export default LobbyController;