/**
 * Created by pacman29 on 24.02.17.
 */

'use strict';

(function () {
    class MenuStartController extends window.View {
        constructor(opt = {}) {
            super(opt.user);
            this.addListener();
        }

        addListener() {
            this.page_parts.get("AppName").querySelector(".appname").addEventListener('click', event => {
                event.preventDefault();
                this.router.go("/");
            });

            document.getElementById('menuStart_signIn').addEventListener('click', event => {
                event.preventDefault();
                this.router.go('/signin');
            });
            document.getElementById('menuStart_aboutUs').addEventListener('click', event => {
                event.preventDefault();
                this.router.go('/aboutus');
            });
            document.getElementById('menuStart_rules').addEventListener('click', event => {
                event.preventDefault();
                this.router.go('/rules');
            });
        }

        resume() {
            this.show();
        }

        show() {
            this.page_parts.get("AppName").hidden = false;
            if (this.session.isAuth) {
                this.router.go('/menu');
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

    window.MenuStartController = MenuStartController;
}());
