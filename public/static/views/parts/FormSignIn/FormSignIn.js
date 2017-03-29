/**
 * Created by ed on 28.03.17.
 */

'use strict';

(function () {
    const RIGHT_IMG = "images/add_your_data.png";
    const TITLE = "Авторизация";

    const LOGIN_FIELD = {
        id: "formSignIn_loginInput",
        type: "text",
        required: "true",
        placeholder: "ваш логин",
    };
    const PASSRORD_FIELD = {
        id: "formSignIn_passwordInput",
        type: "password",
        required: "true",
        placeholder: "ваш пароль",
    };

    const SIGN_IN_BUTTON = {
        id: "formSignIn_signInBtn",
        type: "submit",
        text: "Войти",
    };
    const SIGN_UP_BUTTON = {
        id: "formSignIn_signUpBtn",
        type: "reset",
        text: "Регистрация",
    };

    window.FormSignIn = function () {
        let div = document.createElement('div');
        div.innerHTML = pugFormSignIn({
            form: {
                title: TITLE,
                fields: [
                    LOGIN_FIELD,
                    PASSRORD_FIELD,
                ],
                buttons: [
                    SIGN_IN_BUTTON,
                    SIGN_UP_BUTTON,
                ],
            }
        });
        return window.BorderConstruct({
            img: RIGHT_IMG,
            el: div
        });
    };
}());
