/**
 * Created by ed on 08.03.17.
 */

'use strict';

let isBrowser = typeof require === 'undefined';

if (!isBrowser) {
    var fetch = require('isomorphic-fetch');
}

(function () {
    const _HOST = '';

    // const _HOST = 'localhost:5000';


    const login = function (login, password) {
        return _call('user/login', 'POST', {
            pass: password,
            userLogin: login
        });
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
