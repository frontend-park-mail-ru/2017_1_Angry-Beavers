/**
 * Created by pacman29 on 08.03.17.
 */
(function () {
    class RulesController extends window.View {
        constructor(opt = {}) {

            if(RulesController.__instance){
                return RulesController.__instance;
            }
            super(opt);
            RulesController.__instance = this;
            this.addListener();
        }

        addListener() {
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
