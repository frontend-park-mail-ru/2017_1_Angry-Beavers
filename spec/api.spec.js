/**
 * Created by pacman29 on 10.03.17.
 */
"use strict";

const fetch = require("node-fetch");
const _HOST = 'testherokujavabeavers.herokuapp.com';
const _post = function (method, obj) {
    const url = 'http://' + _HOST + "/api/" + method;
    //const url = _HOST + "/api/" + method;
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

let test_user = {
    email: "test@test.ru",
    password: "test",
    login: "test"
}
describe("API tests.", function() {

    it("SignUp", function(done) {
        signUp(test_user.login,test_user.email,test_user.password).then(ok => {
            expect(ok).toBe(true);
            done();
        }).catch(err => {
            fail();
            done();
        })
    });

    it("SignIn", function(done) {
        login(test_user.login,test_user.password).then(ok =>{
            expect(ok).toBe(true);
            done();
        }).catch(err => {
            fail();
            done();
        })
    });

});
