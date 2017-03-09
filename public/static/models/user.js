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
            this.password = opt.password || '';
            this.isAuth = opt.isAuth || 0;
            this.responseObj = opt.responseObj || {};
        }

        setUser(opt = {}) {
            this.email = opt.email || '';
            this.login = opt.login || '';
            this.score = opt.score || 0;
            this.password = opt.password || '';
            this.session = opt.session || '';
        }

        // getUser() {
        //     return { email: this.email,
        //             login: this.login,
        //             score: this.score,
        //             password: this.password,
        //             session: this.session };
        // }

        getSession() {
            return new Promise((resolve, reject) => {
                this.sendRequest('/', 'GET')
                    .then(() => {
                        this.isAuth = 0;
                        this.login = this.responseObj.msg;
                        resolve();
                    })
                    .catch(() => {
                        this.isAuth = 0;
                        resolve();
                    });
            });
        }

        registration() {
            this.sendRequest('/registration', 'POST', {
                email: this.email,
                login: this.login,
                password: this.password
            });
        }

        login() {
            this.sendRequest('/auth', 'POST', {login: this.login, password: this.password});
        }

        sendRequest(to, method, body = {}) {
            return new Promise((resolve, reject) => {
                // const baseUrl = 'https://brain404-backend.herokuapp.com/api';
                const baseUrl = 'http://localhost:3000';
                const url = baseUrl + to;
                const initPomise = {
                    method,
                    mode: 'cors',
                    credentials: 'include',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body,
                };
                const responseObj = {};

                fetch(url, initPomise)
                    .then(this.status.bind(this))
                    .then((response) => {
                        this.serverStatus(response)
                        //.then(this.toJson)
                            .then((data) => {
                                // console.log(data.login);
                                this.responseObj = {status: 1, msg: data.login};
                                resolve(this.responseObj);
                            })
                            .catch((error) => {
                                this.toJson(error)
                                    .then((error) => {
                                        // console.log(error.msg);
                                        this.responseObj = {status: 0, msg: error.msg};
                                        reject(this.responseObj);
                                    });
                            });
                    })
                    .catch((error) => {
                        this.responseObj = {status: 0, msg: 'Not a server error!'};
                        reject(this.responseObj);
                    });
            });
        }

        toJson(response) {
            return response.json();
        }

        status(response) {
            // console.log(response.status);
            if (response.status in this.responseMap) {
                // console.log('resolve');
                return Promise.resolve(response);
            } else {
                // console.log('reject');
                return Promise.reject(response);
            }
        }

        serverStatus(response) {
            if (this.responseMap[response.status] === '1') {
                return Promise.resolve(response);
            } else {
                return Promise.reject(response);
            }
        }
    }

    // export
    window.User = User;
}());
