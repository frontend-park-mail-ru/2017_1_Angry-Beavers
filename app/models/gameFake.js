/**
 * Created by ed on 08.05.17.
 */

'use strict';

class GameFake {
    constructor(session){
        this._session = session;
    }

    get session() {
        return this._session;
    }
}

export default GameFake;
