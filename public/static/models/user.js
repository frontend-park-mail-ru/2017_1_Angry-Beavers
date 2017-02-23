(function () {
    class User {

        constructor(opt) {
            this.email = opt.email || '';
            this.nickname = opt.nickname || '';
            this.password = opt.password || '';
            this.isAutorize = opt.isAutorize  || 0;
        }
    }


    window.User = User;
}());
