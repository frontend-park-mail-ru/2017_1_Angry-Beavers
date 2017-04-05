/**
 * Created by pacman29 on 04.04.17.
 */

'use strict';

const Session = require("../public/static/modules/session");

const session = new Session();

let test_user = {
    email: "test$$@test.ru",
    password: "test$$",
    login: "test$$"
};

describe("API tests.", () => {
    it("SignUp", function (done) {
        session.signUp(test_user.login, test_user.email, test_user.password)
            .then(() => {
                done();
            })
            .catch(() => {
                assert.fail();
            });
    });
    return;
    it("SignUp_fail", function (done) {
        session.signUp(test_user.login, test_user.email, test_user.password)
            .catch(() => {
                done();
            });
    });

    it("SignIn", function (done) {
        session.login(test_user.login, test_user.password)
            .then(() => {
                done();
            })
            .catch((err) => {
            });
    });

    it("LogOut", (done) => {
            session.logout()
                .then(() => {
                    done();
                })
                .catch((err) => {
                });
        }
    );

    it("SignIn_fail", function (done) {
        session.login(test_user.login + "bla", test_user.password + "bla")
            .catch(() => {
                done();
            });
    });

    it("LogOut_fail", (done) => {
        session.logout().catch(err => {
            done();
        });
    });

    it("SignIn", function (done) {
        session.login(test_user.login, test_user.password)
            .then(() => {
                done();
            })
            .catch((err) => {
            });
    });

    it("DeleteUser", (done) => {
        session.deleteUser()
            .then(() => {
                done();
            })
            .catch(err => {
            });
    });

    it("DeleteUser_fail", (done) => {
        session.deleteUser()
            .catch(() => {
                done();
            });
    });

    it("SignUp", function (done) {
        session.signUp(test_user.login, test_user.email, test_user.password)
            .then(() => {
                done();
            })
            .catch((err) => {
            });
    });
    it("LogOut", (done) => {
            session.logout()
                .then(() => {
                    done();
                })
                .catch((err) => {
                });
        }
    );
});
