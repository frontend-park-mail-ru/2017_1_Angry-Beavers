/**
 * Created by pacman29 on 08.03.17.
 */

'use strict';

import View from '../modules/view';

class SignUpController extends View {
    constructor(opt = {}) {
        if (SignUpController.__instance) {
            return SignUpController.__instance;
        }
        super(opt);
        SignUpController.__instance = this;
        this.addListener();
    }

    addListener() {
        [...document.querySelectorAll(".userheader__appname")]
            .concat([...document.querySelectorAll('.appname')])
            .forEach(a => a.addEventListener('click', event => {
                event.preventDefault();
                this.router.go("/");
            }));

        document.getElementById('formSignUp_signUpBtn').addEventListener('click', event => {
            event.preventDefault();

            let credentials = this.validateForm();
            if (credentials) {
                this.session.signUp(credentials.login, credentials.email, credentials.password)
                    .then(() => {
                        this.router.go('/menu');
                    })
                    .catch(e => {
                        alert(e);
                    });
            }
        });
        document.getElementById('formSignUp_signInBtn').addEventListener('click', event => {
            event.preventDefault();
            this.router.go('/signin')
        });
    }

    validateForm() {
        let login = document.getElementById('formSignUp_loginInput').value;
        let passw = document.getElementById('formSignUp_passwordInput').value;
        let passwRepeat = document.getElementById('formSignUp_passwordRepeatInput').value;
        let email = document.getElementById('formSignUp_emailInput').value;

        // email check
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            alert("Некорректный e-mail");
            return false;
        }

        // login check
        if (login.length < 4) {
            alert("Минимальная длина логина - 4 символа");
            return false;
        }
        if (!/^[a-zA-Z0-9_]*$/.test(login)) {
            alert("Логин может содержать только символы латинского алфавита, цифры и _");
            return false;
        }

        // password check
        if (passw.length < 6) {
            alert("Минимальная длина пароля - 6 символов");
            return false;
        }
        if (passw !== passwRepeat) {
            alert("Пароли не совпадают");
            return false;
        }

        return {
            login: login,
            password: passw,
            email: email
        }
    }

    resume() {
        this.show();
    }

    show() {
        this.page_parts.get("AppName").hidden = false;
        if (this.session.isAuth) {
            this.router.go('/');
        } else {
            this.page_parts.get("SignUp").hidden = false;
        }
        this.page_parts.get("Footer").hidden = false;
    }

    hide() {
        this.page_parts.get("AppName").hidden = true;
        this.page_parts.get("SignUp").hidden = true;
        this.page_parts.get("Footer").hidden = true;
    }
}

export default SignUpController;
