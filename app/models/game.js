/**
 * Created by ed on 07.05.17.
 */

'use strict';

class Game {
    constructor(session) {
        this._session = session;
    }

    get session() {
        return this._session;
    }

    start() {
        this._hand = [];
        this._users = [];
        this._table = [];

        this._ws = new WebSocket('wss://jokinghazardserver.herokuapp.com/game');
        this._ws.onclose = (function (e) {
            console.log('GameClose: ', e);
            this._onClosed && this._onClosed();
        }).bind(this);
        this._ws.onmessage = (function (evt) {
            let data = JSON.parse(evt.data);
            console.log('GameError: ', data);
            switch (data.type) {
                case 'RoundInfo':
                    this._users = data.users;
                    this._roundNum = data.roundNum;
                    this._onRoundInfo && this._onRoundInfo(data);
                    break;
                case 'HandInfo':
                    this._hand = data.hand;
                    this._onHandInfo && this._onHandInfo(data);
                    break;
                case 'TableInfo':
                    this._table = data.hand;
                    this._onTableInfo && this._onTableInfo(data);
                    break;
            }
        }).bind(this);
        this._ws.onerror = (function (e) {
            console.log('GameError: ', e);
            this._onError && this._onError(e);
        }).bind(this);
    }

    stop() {
        if (this._ws) {
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

    get table() {
        return this._table;
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

    get onTableInfo() {
        return this._onTableInfo;
    }

    set onTableInfo(value) {
        this._onTableInfo = value;
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

export default Game;
