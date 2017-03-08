/**
 * Created by ed on 09.03.17.
 */
'use strict';

(function () {
    class Error {
        constructor(msg) {
            this._message = msg;
        }

        get message() {
            return this._message;
        }
    }
}());
