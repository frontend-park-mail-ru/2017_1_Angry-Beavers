/**
 * Created by pacman29 on 10.03.17.
 */
"use strict";

const fetch = require("node-fetch");
const _HOST = 'jokinghazardserver.herokuapp.com';
// const _HOST = 'localhost:5000';
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

let test_user = {
    email: "test4@test.ru",
    password: "test4",
    login: "test4"
};

describe("API tests.", () => {

    it("SignUp", function(done) {
        signUp(test_user.login,test_user.email,test_user.password).then(ok => {
            expect(ok).toBe(true);
            done();
        }).catch(err => {
            console.log(err);
            fail();
            done();
        })
    });

    it("SignIn", function(done) {
        login(test_user.login,test_user.password).then(ok =>{
            expect(ok).toBe(true);
            done();
        }).catch(err => {
            console.log(err);
            fail();
            done();
        })
    });


    it("SignIn_fail", function(done) {
        try {
            login(test_user.login+"bla",test_user.password+"bla")
        } catch (err ){
            expect(err).toBe('Error: Invalid authentication data! en');
        }
        done();
    });

});
