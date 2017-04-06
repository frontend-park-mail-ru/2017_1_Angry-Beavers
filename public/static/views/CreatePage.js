/**
 * Created by pacman29 on 20.02.17.
 */

'use strict';

import AppName from './parts/AppName/AppName';
import AboutUs from './parts/AboutUs/AboutUs';
import Footer from './parts/Footer/Footer';
import FormSignIn from './parts/FormSignIn/FormSignIn';

class CreatePage {
    constructor() {
        if (CreatePage.__instance) {
            return CreatePage.__instance;
        }
        this.body = (document.getElementsByTagName('body'))[0];
        this.links = [];
        this.parts = new Map();
        this.links.push();

        this.addParts(this.body, "AppName", AppName());
        this.addParts(this.body, "MenuStart", window.MenuStart());
        this.addParts(this.body, "MenuGame", window.MenuGame());
        this.addParts(this.body, "SignIn", FormSignIn());
        this.addParts(this.body, "SignUp", window.FormSignUp());
        this.addParts(this.body, "ScoreList", window.ScoreList());
        this.addParts(this.body, "AboutUs", AboutUs());
        this.addParts(this.body, "Rules", window.Rules());
        this.addParts(this.body, "Footer", Footer());
    }

    addParts(parent, name, elem) {
        this.parts.set(name, elem);
        elem.hidden = true;
        parent.appendChild(elem);
    }

    getParts() {
        return this.parts;
    }
}

export default CreatePage;
