/**
 * Created by ed on 29.03.17.
 */

'use strict';

(function () {
    const RIGHT_IMG = "images/add_your_data.png";
    const TITLE = "Регистрация";

    const EMAIL_FIELD = {
        id: "formSignUp_emailInput",
        type: "text",
        required: "true",
        placeholder: "ваш логин",
    };
    const LOGIN_FIELD = {
        id: "formSignUp_loginInput",
        type: "text",
        required: "true",
        placeholder: "ваш логин",
    };
    const PASSRORD_FIELD = {
        id: "formSignUp_passwordInput",
        type: "password",
        required: "true",
        placeholder: "ваш пароль",
    };
    const PASSRORD_REPEAT_FIELD = {
        id: "formSignUp_passwordRepeatInput",
        type: "password",
        required: "true",
        placeholder: "ваш пароль ещё раз",
    };

    const SIGN_UP_BUTTON = {
        id: "formSignUp_signUpBtn",
        type: "submit",
        text: "Зарегистрироваться",
    };
    const SIGN_IN_BUTTON = {
        id: "formSignUp_signInBtn",
        type: "reset",
        text: "Авторизация",
    };

    window.FormSignUp = function () {
        let div = document.createElement('div');
        div.innerHTML = pugFormSignUp({
            form: {
                title: TITLE,
                fields: [
                    EMAIL_FIELD,
                    LOGIN_FIELD,
                    PASSRORD_FIELD,
                    PASSRORD_REPEAT_FIELD,
                ],
                buttons: [
                    SIGN_UP_BUTTON,
                    SIGN_IN_BUTTON,
                ],
            }
        });
        return window.BorderConstruct({
            img: RIGHT_IMG,
            el: div
        });
    };
}());
