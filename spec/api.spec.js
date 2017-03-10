/**
 * Created by pacman29 on 10.03.17.
 */
"use strict";

let test_user = new User();
test_user.email = "test@test.com";
test_user.password = "test";
test_user.login = "test";


describe("API tests.", function() {

    it("SignUp", function(done) {
        expect(window.api.signUp(test_user.login,test_user.email,test_user.password)).toBe()
    });

    it("POST /api/login must be ok", function(done) {

        fetcher.fetch("/api/login", "POST", data)
            .then((okJSON) => {
                expect(okJSON.description).toBe(authorization_success);
                done();
            })
            .catch((errorJSON) => {
                fail();
                done();
            });
    });

});
