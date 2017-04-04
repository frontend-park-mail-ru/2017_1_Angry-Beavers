/**
 * Created by pacman29 on 04.04.17.
 */

'use strict';

const api = require("../public/static/api/api.js");

let test_user = {
    email: "test$$@test.ru",
    password: "test$$",
    login: "test$$"
};

describe("API tests.", () => {
    // it("SignUp", function (done) {
    //     api.signUp(test_user.login, test_user.email, test_user.password)
    //         .then(done)
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // });
    //
    // it("SignUp_fail", function (done) {
    //     api.signUp(test_user.login, test_user.email, test_user.password)
    //         .catch((err) => {
    //             console.log(err);
    //         done();
    //     });
    // });
    //
    // it("SignIn", function (done) {
    //     api.login(test_user.login, test_user.password)
    //         .then(done)
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // });
    //
    // it("LogOut", (done) => {
    //         api.logout()
    //             .then(done)
    //             .catch((err) => {
    //             console.log(err);
    //             });
    //     }
    // );
    //
    // it("SignIn_fail", function (done) {
    //     api.login(test_user.login + "bla", test_user.password + "bla")
    //         .catch(err => {
    //             console.log(err);
    //             done();
    //         });
    // });
    //
    // it("LogOut_fail", (done) => {
    //     api.logout().catch(err => {
    //         console.log(err);
    //         done();
    //     });
    // });
    //
    // it("SignIn", function (done) {
    //     api.login(test_user.login, test_user.password)
    //         .then(done)
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // });
    //
    // it("DeleteUser", (done) => {
    //     api.deleteUser()
    //         .then(done)
    //         .catch(err => {
    //             console.log(err);
    //         });
    // });
    //
    // it("DeleteUser_fail", (done) => {
    //     api.deleteUser()
    //         .catch(err => {
    //             console.log(err);
    //             done();
    //         });
    // })

    it("SignUp", function (done) {
            api.signUp(test_user.login, test_user.email, test_user.password)
                .then(done)
                .catch((err) => {
                    console.log(err);
                });
        });
        it("LogOut", (done) => {
                    api.logout()
                        .then(done)
                        .catch((err) => {
                        console.log(err);
                        });
                }
            );
});
