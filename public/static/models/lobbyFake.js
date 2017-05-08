/**
 * Created by ed on 08.05.17.
 */

'use strict';

import GameFake from './gameFake';

class LobbyFake {
    constructor(session) {
        this._session = session;
    }

    start(userCount = 4) {
        let users = [];
        for (let i = 0; i < 4; ++i) {
            users.push({
                'userLogin': Math.random().toString(36).substring(Math.random() % 4 + 4),
                'userMail': `${Math.random().toString(36).substring(Math.random() % 4 + 4)}@jk.com`
            });
        }
        this._onInfo && this._onInfo({
            users: users,
            maxNumber: userCount
        });

        this._onGameStart && this._onGameStart(new GameFake(this._session));
    }

    stop() {

    }

    get onInfo() {
        return this._onInfo;
    }

    set onInfo(value) {
        this._onInfo = value;
    }

    get onUserAdd() {
        return this._onUserAdd;
    }

    set onUserAdd(value) {
        this._onUserAdd = value;
    }

    get onGameStart() {
        return this._onGameStart;
    }

    set onGameStart(value) {
        this._onGameStart = value;
    }

    get onError() {
        return this._onError;
    }

    set onError(value) {
        this._onError = value;
    }

    get onClosed() {
        return this._onClosed;
    }

    set onClosed(value) {
        this._onClosed = value;
    }
}

export default LobbyFake;
