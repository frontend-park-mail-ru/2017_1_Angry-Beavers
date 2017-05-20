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
                "red": "False",
                "id": 12
            },
            {
                "red": "True",
                "id": 21
            },
            {
                "red": "False",
                "id": 33
            },
            {
                "red": "False",
                "id": 3
            },
            {
                "red": "False",
                "id": 29
            },
            {
                "red": "True",
                "id": 42
            },
            {
                "red": "False",
                "id": 18
            }
        ];
        this._users = [];

        this._onHandInfo && this._onHandInfo();
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
