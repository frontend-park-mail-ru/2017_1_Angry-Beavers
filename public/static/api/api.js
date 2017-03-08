/**
 * Created by ed on 08.03.17.
 */
'use strict';

(function () {
    const _HOST = 'localhost:8080';

    const _post = function (method, obj) {
        const url = 'http://' + _HOST + "/api/" + method;
        const initPomise = {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(obj),
        };
        return fetch(url, initPomise).then(response => {
            return response.json();
        });
    };

    const login = function (login, passHash) {
        return _post('user/login', {
            passHash: passHash,
            userLogin: login
        }).then(response => {
            if (response.result === true) {
                return response.result;
            } else {
                throw new Error(response.errorMsg);
            }
        });
    };

    const signUp = function (login, email, password) {
        return _post('user/signup', {
            userLogin: login,
            passHash: password,
            userMail: email
        }).then();
    };

    window.Api = {
        login: login
    };
}());
