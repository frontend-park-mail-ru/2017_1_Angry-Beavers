/**
 * Created by pacman29 on 07.03.17.
 */
(function () {
    class SignInController extends window.View{
        constructor(opt = {}){
            super(opt.user);
            this.user = opt.user;
            this.page_parts = opt.page.getParts();
            this.addListener();
        }

        addListener(){
            this.page_parts.get("AppName").querySelector(".my_ref").addEventListener('click', event => {
                this.router.go("/");
            });
            debugger;
            this.page_parts.get("SignIn").addEventListener('submit', event => {
                alert("Check");
                this.user.isAuth = 1;
                this.router.go('/menu')
            });
            this.page_parts.get("SignIn").addEventListener('reset', event => {
                this.router.go('/signup')
            });


        }

        resume(){
            this.show();
        }

        show(){
            this.page_parts.get("AppName").hidden = false;
            this.page_parts.get("SignIn").hidden = false;
            this.page_parts.get("Footer").hidden = false;
        }

    }

    window.SignInController = SignInController;
}());
