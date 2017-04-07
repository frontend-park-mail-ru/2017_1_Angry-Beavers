/**
 * Created by pacman29 on 07.03.17.
 */

'use strict';

import View from '../modules/view';

class SignInController extends View {
    constructor(opt = {}) {
        if(SignInController.__instance){
            return SignInController.__instance;
        }
        super(opt);
        SignInController.__instance = this;
        this.addListener();
    }

    addListener() {
        //
        this.page_parts.get("AppName").querySelector(".appname").addEventListener('click', event => {
            event.preventDefault();
            if(this.session.isAuth){
                this.router.go("/menu");
            } else {
                this.router.go("/");
            }

        });

        document.getElementById("formSignIn_signInBtn").addEventListener('click', event => {
            event.preventDefault();

            let login = document.getElementById('formSignIn_loginInput').value;
            let passw = document.getElementById('formSignIn_passwordInput').value;
            this.session.login(login, passw)
                .then(() => {
                    this.router.go('/menu');
                })
                .catch(e => {
                    alert(e);
                });
        });
        document.getElementById("formSignIn_signUpBtn").addEventListener('click', event => {
            event.preventDefault();
            this.router.go('/signup')
        });
    }

    resume() {
        this.show();
    }

    show() {
        this.page_parts.get("AppName").hidden = false;
        if (this.session.isAuth) {
            this.router.go('/');
        } else {
            this.page_parts.get("SignIn").hidden = false;
        }
        this.page_parts.get("Footer").hidden = false;
    }

    hide() {
        this.page_parts.get("AppName").hidden = true;
        this.page_parts.get("SignIn").hidden = true;
        this.page_parts.get("Footer").hidden = true;
    }

}

export default SignInController;
