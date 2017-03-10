/**
 * Created by pacman29 on 07.03.17.
 */
(function () {
    class SignInController extends window.View {
        constructor(opt = {}) {
            super(opt.user);
            this.user = opt.user;
            this.page_parts = opt.page.getParts();
            this.addListener();
        }

        addListener() {
            this.page_parts.get("AppName").querySelector(".my_ref").addEventListener('click', event => {
                event.preventDefault();
                this.router.go("/");
            });
            debugger;
            this.page_parts.get("SignIn").addEventListener('submit', event => {
                event.preventDefault();

                let login = document.getElementById('username').value;
                let passw = document.getElementById('password').value;
                window.Api.login(login, passw)
                    .then(result => {
                        if (result) {
                            this.user.isAuth = 1;
                            this.router.go('/menu');
                        } else {
                            throw new window.Api.Error('Can not register');
                        }
                    }).catch(alert);

            });
            this.page_parts.get("SignIn").addEventListener('reset', event => {
                event.preventDefault();
                this.router.go('/signup')
            });


        }

        resume() {
            this.show();
        }

        show() {
            this.page_parts.get("AppName").hidden = false;
            this.page_parts.get("SignIn").hidden = false;
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
