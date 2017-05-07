/**
 * Created by ed on 07.05.17.
 */

'use strict';

class Lobby {
    constructor(session) {
        this._session = session;
    }

    start() {
        let ws = new WebSocket('wss://jokinghazardserver.herokuapp.com/lobby');
        ws.onopen = function () {
            alert("Connection opened...");
        };
        ws.onclose = function () {
            alert("Connection closed...");
        };
        ws.onmessage = function (evt) {
            alert(evt.data);
        };
        ws.onerror = function () {
            alert("Error anaui opened...");
        };
    }
}

export default Lobby;
