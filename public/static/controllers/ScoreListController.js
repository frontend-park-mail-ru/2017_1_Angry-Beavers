/**
 * Created by pacman29 on 08.03.17.
 */
(function () {
    class ScoreListController extends window.View {
        constructor(opt = {}) {
            super(opt);
            this.addListener();
        }

        addListener() {
            this.page_parts.get("AppName").querySelector(".appname").addEventListener('click', event => {
                event.preventDefault();
                this.router.go("/");
            });
        }

        resume() {
            this.show();
        }

        show() {
            this.page_parts.get("AppName").hidden = false;
            if(!this.session.isAuth){
                this.router.go('/signin');
            } else {
                this.page_parts.get("ScoreList").hidden = false;
            }
            /*
             TODO :: Здесь нужно заполнить лидерборд, тут надо просто подумать
             */


            this.page_parts.get("Footer").hidden = false;
        }

        hide() {
            this.page_parts.get("AppName").hidden = true;
            this.page_parts.get("ScoreList").hidden = true;
            this.page_parts.get("Footer").hidden = true;
        }

    }

    window.ScoreListController = ScoreListController;
}());
