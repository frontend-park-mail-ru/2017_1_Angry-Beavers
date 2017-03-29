/**
 * Created by pacman29 on 08.03.17.
 */
(function () {
    class SignUpController extends window.View {
        constructor(opt = {}) {
            super(opt.user);
            this.user = opt.user;
            this.page_parts = opt.page.getParts();
            this.addListener();
        }

        addListener() {
            this.page_parts.get("AppName").querySelector(".appname").addEventListener('click', event => {
                event.preventDefault();
                this.router.go("/");
            });
            document.getElementById('formSignUp_signUpBtn').addEventListener('click', event => {
                event.preventDefault();

                let login = document.getElementById('formSignUp_loginInput').value;
                let passw = document.getElementById('formSignUp_passwordInput').value;
                let email = document.getElementById('formSignUp_emailInput').value;

                window.Api.signUp(login, email, passw)
                    .then(result => {
                        if (result) {
                            this.user.isAuth = 1;
                            this.router.go('/menu');
                        } else {
                            throw new window.Api.Error('Can not login');
                        }
                    }).catch(alert);
            });
            document.getElementById('formSignUp_signInBtn').addEventListener('click', event => {
                event.preventDefault();
                this.router.go('/signin')
            });
        }

        resume() {
            this.show();
        }

        show() {
            this.page_parts.get("AppName").hidden = false;
            this.page_parts.get("SignUp").hidden = false;
            this.page_parts.get("Footer").hidden = false;
        }

        hide() {
            this.page_parts.get("AppName").hidden = true;
            this.page_parts.get("SignUp").hidden = true;
            this.page_parts.get("Footer").hidden = true;
        }

    }

    window.SignUpController = SignUpController;
}());
