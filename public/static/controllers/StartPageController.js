/**
 * Created by pacman29 on 24.02.17.
 */
(function () {
    class StartPageController extends window.View {
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
            let imgs = this.page_parts.get("MenuStart").getElementsByTagName('img');
            imgs[0].addEventListener('click', event => {
                event.preventDefault();
                this.router.go('/signin');
            });
            imgs[1].addEventListener('click', event => {
                event.preventDefault();
                this.router.go('/aboutus');
            });
            imgs[2].addEventListener('click', event => {
                event.preventDefault();
                this.router.go('/rules');
            });
        }


        resume() {
            this.show();
        }

        show() {
            this.page_parts.get("AppName").hidden = false;
            if (this.user.isAuth) {
                debugger;
                this.router.go("/menu");
            }
            else {
                this.page_parts.get("MenuStart").hidden = false;
            }
            this.page_parts.get("Footer").hidden = false;
        }

        hide() {
            this.page_parts.get("AppName").hidden = true;
            this.page_parts.get("MenuStart").hidden = true;
            this.page_parts.get("Footer").hidden = true;
        }


    }

    window.StartPageController = StartPageController;
}());
