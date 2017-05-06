/**
 * Created by pacman29 on 08.03.17.
 */
'use strict';

import View from '../modules/view';

class AboutUsController extends View {
    constructor(opt = {}) {
        if (AboutUsController.__instance) {
            return AboutUsController.__instance;
        }
        super(opt);
        AboutUsController.__instance = this;
        this.addListener();
    }

    addListener() {
        this.page_parts.get("AppName").querySelector(".appname").addEventListener('click', event => {
            event.preventDefault();
            if (this.session.isAuth) {
                this.router.go("/menu");
            } else {
                this.router.go("/");
            }

        });
    }

    resume() {
        this.show();
    }

    show() {
        if (this.session.isAuth) {
            this.page_parts.get("UserHeader").hidden = false;
        } else {
            this.page_parts.get("AppName").hidden = false;
        }
        this.page_parts.get("AboutUs").hidden = false;
        this.page_parts.get("Footer").hidden = false;
    }

    hide() {
        if (this.session.isAuth) {
            this.page_parts.get("UserHeader").hidden = true;
        } else {
            this.page_parts.get("AppName").hidden = true;
        }
        this.page_parts.get("AppName").hidden = true;
        this.page_parts.get("AboutUs").hidden = true;
        this.page_parts.get("Footer").hidden = true;
    }
}

export default AboutUsController;
