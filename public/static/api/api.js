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

    // const _HOST = 'localhost:5000';
    const _call = function (method, httpMethod, obj) {
        const url = 'https://' + _HOST + "/api/" + method;
        const initPomise = {
            method: httpMethod,
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-type': 'application/json',
            }
        };
        if (httpMethod === 'POST') {
            if (obj !== undefined) {
                initPomise.body = JSON.stringify(obj);
            }
        }

        return fetch(url, initPomise).then(response => {
            return response.json();
        }).then(response => {
            if (!response.result) {
                throw new Error(response.errorMsg);
            } else {
                return response.data;
            }
        });
    };

    const login = function (login, password) {
        return _call('user/login', 'POST', {
            pass: password,
            userLogin: login
        });
    };

    const signUp = function (login, email, password) {
        return _call('user/signup', 'POST', {
            userLogin: login,
            pass: password,
            userMail: email
        });
    };

    const logout = function () {
        return _call('user/logout', 'GET');
    };

    const deleteUser = function () {
        return _call('user/delete', 'DELETE');
    };


    if (isBrowser) {
        window.Api = {
            login: login,
            signUp: signUp,
            logout: logout,
            deleteUser: deleteUser
        };
    } else {
        exports.login = login;
        exports.signUp = signUp;
        exports.logout = logout;
        exports.deleteUser = deleteUser;
    }
})();
