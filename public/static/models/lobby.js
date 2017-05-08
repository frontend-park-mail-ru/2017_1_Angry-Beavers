/**
 * Created by ed on 07.05.17.
 */

'use strict';

import Game from './game';

class Lobby {
    constructor(session) {
        this._session = session;
    }

    start() {
        this._ws = new WebSocket('wss://jokinghazardserver.herokuapp.com/lobby');
        this._ws.onclose = (function () {
            this._onClosed && this._onClosed();
        }).bind(this);
        this._ws.onmessage = (function (evt) {
            let data = JSON.parse(evt.data);
            switch (data.type) {
                case 'Lobby Info':
                    this._onInfo && this._onInfo(data);
                    break;
                case 'UserAddedMessage':
                    this._onUserAdd && this._onUserAdd(data);
                    break;
                case 'GameReadyMessage':
                    this._onInfo = undefined;
                    this._onClosed = undefined;
                    this._onError = undefined;
                    this._onUserAdd = undefined;
                    this._onGameStart && this._onGameStart(new Game(this._session));
                    break;

            }
        }).bind(this);
        this._ws.onerror = (function () {
            this._onError && this._onError();
        }).bind(this);
    }

    stop() {
        if (this.ws) {
            this._ws.close();
        }
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

export default Lobby;
