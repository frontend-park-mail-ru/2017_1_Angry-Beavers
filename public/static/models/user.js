(function () {
    class User {

        constructor(opt) {
            this.responseMap = {
                200: '1',
                400: '0',
                401: '0',
                403: '0',
            };
            this.email = opt.email || '';
            this.login = opt.login || '';
            this.score = opt.score || 0;
            this.isAuth = opt.isAuth || 0;
            this.responseObj = opt.responseObj || {};
        }

        setUser(opt = {}) {
            this.email = opt.email || '';
            this.login = opt.login || '';
            this.score = opt.score || 0;
            this.session = opt.session || '';
        }
    }

    // export
    window.User = User;
}());
