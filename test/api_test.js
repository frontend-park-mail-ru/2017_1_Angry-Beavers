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
        return api.signUp(test_user.login, test_user.email, test_user.password)
            .then(done)
            .catch(() => {
            });
    });

    it("SignUp_fail", function (done) {
        api.signUp(test_user.login, test_user.email, test_user.password)
            .catch(done);
    });

    it("SignIn", function (done) {
        api.login(test_user.login, test_user.password)
            .then(done)
            .catch(() => {
            });
    });


    it("SignIn_fail", function (done) {
        api.login(test_user.login + "bla", test_user.password + "bla")
            .catch(err => {
                if (err === 'Error: Invalid authentication data! en') {
                    done();
                }
            });
    });

    it("LogOut", (done) => {
            api.logout()
                .then(done)
                .catch(() => {
                });
        }
    );

    it("LogOut_fail", (done) => {
        api.logout().catch(err => {
            if (err === 'Error: Invalid session! en') {
                done();
            }
        });
    });

    it("SignIn", function (done) {
        api.login(test_user.login, test_user.password)
            .then(done)
            .catch(() => {
            });
    });

    it("DeleteUser", (done) => {
        api.deleteUser()
            .then(done)
            .catch(err => {
            });
    });

    it("DeleteUser_fail", (done) => {
        api.deleteUser()
            .catch(err => {
                if (err === 'Error: Invalid session! en') {
                    done();
                }
            });
    })
})
;
