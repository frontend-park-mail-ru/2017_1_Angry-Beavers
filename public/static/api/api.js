/**
 * Created by ed on 08.03.17.
 */
'use strict';
const fetch = require("node-fetch");
(function () {
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

    window.Api = {
        login: login,
        signUp: signUp
    };
}());

let test_user = {
    email: "test7@test.ru",
    password: "test7",
    login: "test7"
};

describe("API tests.", () => {

    it("SignUp", function(done) {
        window.Api.signUp(test_user.login,test_user.email,test_user.password).then(ok => {
            if(ok){
                done();
            } else {
                fail();
            }
        })
    });

    it("SignIn", function(done) {
        window.Api.login(test_user.login,test_user.password).then(ok =>{
            if(ok){
                done();
            } else {
                fail();
            }
        })
    });


    it("SignIn_fail", function(done) {
        try {
            window.Api.login(test_user.login+"bla",test_user.password+"bla")
        } catch (err ){
            expect(err).toBe('Error: Invalid authentication data! en');
        }
        done();
    });

});
