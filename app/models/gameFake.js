/**
 * Created by ed on 08.05.17.
 */

'use strict';

class GameFake {
    constructor(session) {
        this._session = session;
    }

    get session() {
        return this._session;
    }

    start() {
        this._hand = [
            {
                "red": false,
                "id": 12
            },
            {
                "red": true,
                "id": 21
            },
            {
                "red": false,
                "id": 33
            },
            {
                "red": false,
                "id": 3
            },
            {
                "red": false,
                "id": 29
            },
            {
                "red": true,
                "id": 42
            },
            {
                "red": false,
                "id": 18
            }
        ];
        this._users = [
            {
                "userLogin": "ubrown",
                "isMaster": true,
                "score": 0,
                "type": "GameUserInfo"
            },
            {
                "userLogin": "rogerschristina",
                "isMaster": false,
                "score": 0,
                "type": "GameUserInfo"
            },
            {
                "userLogin": "lieric",
                "isMaster": false,
                "score": 0,
                "type": "GameUserInfo"
            },
            {
                "userLogin": "mevans",
                "isMaster": false,
                "score": 0,
                "type": "GameUserInfo"
            }
        ];

        this._onHandInfo && this._onHandInfo();
        this._roundNum = 1;
        this._onRoundInfo && this._onRoundInfo();
    }

    stop() {
        if (this._ws) {
            this._onRoundInfo = undefined;
            this._onHandInfo = undefined;
            this._onClosed = undefined;
            this._onError = undefined;
            this._ws.close();
        }
    }

    get roundNum() {
        return this._roundNum;
    }

    get hand() {
        return this._hand;
    }

    get users() {
        return this._users;
    }

    get onHandInfo() {
        return this._onHandInfo;
    }

    set onHandInfo(value) {
        this._onHandInfo = value;
    }

    get onRoundInfo() {
        return this._onRoundInfo;
    }

    set onRoundInfo(value) {
        this._onRoundInfo = value;
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

export default GameFake;
