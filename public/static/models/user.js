'use strict';

(function () {
    class User {
        constructor(opt) {
            this.email = opt.email || '';
            this.login = opt.login || '';
            this.score = opt.score || 0;
        }
    }

    // export
    window.User = User;
}());
