/**
 * Created by ed on 08.05.17.
 */

'use strict';

class LobbyFake {
    constructor(session) {
        this._session = session;
    }

    start(userCount = 4) {
        this._users = [];
        this._maxNumber = userCount;

        for (let i = 0; i < 4; ++i) {
            this._users.push({
                'userLogin': Math.random().toString(36).substring(Math.random() % 4 + 4),
                'userMail': `${Math.random().toString(36).substring(Math.random() % 4 + 4)}@jk.com`
            });
        }
        this._onInfo && this._onInfo({
            users: this._users,
            maxNumber: userCount
        });

        this._onGameStart && this._onGameStart({});
    }

    stop() {

    }

    get users() {
        return this._users;
    }

    get maxUsersCount() {
        return this._maxNumber;
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

    get onUserRemove() {
        return this._onUserRemove;
    }

    set onUserRemove(value) {
        this._onUserRemove = value;
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
