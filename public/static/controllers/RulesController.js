/**
 * Created by pacman29 on 08.03.17.
 */
(function () {
    class RulesController extends window.View {
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
        }

        resume() {
            this.show();
        }

        show() {
            this.page_parts.get("AppName").hidden = false;
            this.page_parts.get("Rules").hidden = false;
            this.page_parts.get("Footer").hidden = false;
        }

        hide() {
            this.page_parts.get("AppName").hidden = true;
            this.page_parts.get("Rules").hidden = true;
            this.page_parts.get("Footer").hidden = true;
        }

    }

    window.RulesController = RulesController;
}());
