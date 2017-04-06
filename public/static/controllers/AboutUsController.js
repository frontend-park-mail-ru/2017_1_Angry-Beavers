/**
 * Created by pacman29 on 08.03.17.
 */
(function () {
    class AboutUsController extends window.View {
        constructor(opt = {}) {
            if(AboutUsController.__instance){
                return AboutUsController.__instance;
            }
            super(opt);
            AboutUsController.__instance = this;
            this.addListener();
        }

        addListener() {
        }

        resume() {
            this.show();
        }

        show() {
            this.page_parts.get("AppName").hidden = false;
            this.page_parts.get("AboutUs").hidden = false;
            this.page_parts.get("Footer").hidden = false;
        }

        hide() {
            this.page_parts.get("AppName").hidden = true;
            this.page_parts.get("AboutUs").hidden = true;
            this.page_parts.get("Footer").hidden = true;
        }

    }

    window.AboutUsController = AboutUsController;
}());
