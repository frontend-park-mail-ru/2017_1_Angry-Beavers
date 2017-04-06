/**
 * Created by pacman29 on 07.03.17.
 */
(function () {
    class SignInController extends window.View {
        constructor(opt = {}) {
            super(opt);
            this.addListener();
        }

        addListener() {

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
            if(this.session.isAuth){
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

    window.SignInController = SignInController;
}());
