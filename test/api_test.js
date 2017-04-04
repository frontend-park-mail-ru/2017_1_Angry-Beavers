/**
 * Created by pacman29 on 04.04.17.
 */

'use strict';

const api = require("../public/static/api/api.js");

let test_user = {
    email: "test8@test.ru",
    password: "test8",
    login: "test8"
};

describe("API tests.", () => {

    it("SignUp", function (done) {
        api.signUp(test_user.login, test_user.email, test_user.password).then(ok => {
            if (ok) {
                done();
            } else {
                fail();
            }
        })
    });

    it("SignIn", function (done) {
        api.login(test_user.login, test_user.password).then(ok => {
            if (ok) {
                done();
            } else {
                fail();
            }
        })
    });


    it("SignIn_fail", function (done) {
        try {
            api.login(test_user.login + "bla", test_user.password + "bla")
        } catch (err) {
            expect(err).toBe('Error: Invalid authentication data! en');
        }
        done();
    });

});
