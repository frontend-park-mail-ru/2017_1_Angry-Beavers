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
}

export default Game;
