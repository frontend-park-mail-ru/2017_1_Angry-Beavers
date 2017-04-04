/**
 * Created by ed on 08.03.17.
 */

'use strict';

let isBrowser = typeof require === 'undefined';

if (!isBrowser) {
    var fetch = require('node-fetch');
}

(function () {
    const _HOST = 'jokinghazardserver.herokuapp.com';

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
            if (!response.result) {
                throw new Error(response.errorMsg);
            } else {
                return response.result;
            }
        });
    };

    const login = function (login, password) {
        return _post('user/login', {
            pass: password,
            userLogin: login
        });
    };

    const signUp = function (login, email, password) {
        return _post('user/signup', {
            userLogin: login,
            pass: password,
            userMail: email
        });
    };

    if (isBrowser) {
        window.Api = {
            login: login,
            signUp: signUp
        };
    } else {
        exports.login = login;
        exports.signUp = signUp;
    }
})();
