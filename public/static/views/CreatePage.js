/**
 * Created by pacman29 on 20.02.17.
 */

'use strict';

import AppName from './parts/AppName/AppName';
import AboutUs from './parts/AboutUs/AboutUs';
import Footer from './parts/Footer/Footer';
import FormSignIn from './parts/FormSignIn/FormSignIn';
import FormSignUp from './parts/FormSignUp/FormSignUp';
import MenuStart from './parts/MenuStart/MenuStart';

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
        this.addParts(this.body, "MenuStart", MenuStart());
        this.addParts(this.body, "MenuGame", window.MenuGame());
        this.addParts(this.body, "SignIn", FormSignIn());
        this.addParts(this.body, "SignUp", FormSignUp());
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
