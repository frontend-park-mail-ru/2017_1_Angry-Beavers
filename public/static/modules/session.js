/**
 * Created by ed on 05.04.17.
 */

'use strict';

let isBrowser = typeof require === 'undefined';

if (!isBrowser) {
    var fetch = require('node-fetch');
}


(function () {
    const DEFAULT_HOST = 'jokinghazardserver.herokuapp.com';

    class Session {
        constructor(options) {
            options = options || {};

            this._host = options.host || DEFAULT_HOST;

            this._cookies = '';
        }

        get user() {
            // todo: get user data from backend
            return this._user;
        }

        get isAuth() {
            return this._user;
        }

        _call(httpMethod, method, data) {
            const url = `https://${DEFAULT_HOST}/api/${method}`;
            const initPomise = {
                method: httpMethod,
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Content-type': 'application/json',
                    'cookie': this._cookie
                }
            };
            if (httpMethod === 'POST') {
                if (data !== undefined) {
                    initPomise.body = JSON.stringify(data);
                }
            }

            let _this = this;
            return fetch(url, initPomise)
                .then(response => {
                    if (response['set-cookie'] !== undefined) {
                        _this._cookie = response['set-cookie'];
                    }

                    return response.json();
                }).then(response => {
                    if (!response.result) {
                        throw new Error(response.errorMsg);
                    } else {
                        return response.data;
                    }
                });
        }

        login(login, password) {
            let _this = this;
            return this._call('user/login', 'POST', {
                pass: password,
                userLogin: login
            }).then(() => {
                _this.user = new User();
                _this.user.login = login;
            });
        };

        signUp(login, email, password) {
            let _this = this;
            return this._call('user/signup', 'POST', {
                userLogin: login,
                pass: password,
                userMail: email
            }).then(() => {
                _this.user = new User();
                _this.user.login = login;
                _this.user.email = email;
            });
        };

        logout() {
            return this._call('user/logout', 'POST');
        };

        deleteUser() {
            return this._call('user/delete', 'DELETE');
        };
    }

    if (isBrowser) {
        window.Session = Session;
    } else {
        module.exports = Session;
    }
}());
