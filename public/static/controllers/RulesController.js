/**
 * Created by pacman29 on 08.03.17.
 */
'use strict';

import View from '../modules/view';

class RulesController extends View {
    constructor(opt = {}) {
        if(RulesController.__instance){
            return RulesController.__instance;
        }
        super(opt);
        RulesController.__instance = this;
        this.addListener();
    }

    addListener() {
        this.page_parts.get("AppName").querySelector(".appname").addEventListener('click', event => {
            event.preventDefault();
            if(this.session.isAuth){
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

export default RulesController;
