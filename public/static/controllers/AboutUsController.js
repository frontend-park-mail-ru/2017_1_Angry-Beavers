/**
 * Created by pacman29 on 08.03.17.
 */

'use strict';

class AboutUsController extends window.View {
    constructor(opt = {}) {
        super(opt);
        this.addListener();
    }

    addListener() {
        this.page_parts.get("AppName").addEventListener('click', event => {
            event.preventDefault();
            this.router.go("/");
        });
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

export default AboutUsController;
