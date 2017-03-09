/**
 * Created by ed on 08.03.17.
 */
'use strict';

(function () {
    const _HOST = 'testherokujavabeavers.herokuapp.com';

    const _post = function (method, obj) {
        const url = 'https://' + _HOST + "/api/" + method;
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
        }).then(response => {
            if (response.result == undefined || (response.errorMsg && response.errorMsg != 'ok')) {
                throw new Error(response.errorMsg);
            } else {
                return response.result;
            }
        });
    };

    const login = function (login, passHash) {
        return _post('user/login', {
            passHash: passHash,
            userLogin: login
        });
    };

    const signUp = function (login, email, password) {
        return _post('user/signup', {
            userLogin: login,
            passHash: password,
            userMail: email
        });
    };

    window.Api = {
        login: login,
        signUp: signUp
    };
}());
