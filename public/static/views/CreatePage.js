/**
 * Created by pacman29 on 20.02.17.
 */
(function () {
    class CreatePage {
        constructor() {
            if (CreatePage.__instance) {
                return CreatePage.__instance;
            }
            this.body = (document.getElementsByTagName('body'))[0];
            this.links = [];
            this.parts = new Map();
            this.links.push();

            this.addParts(this.body, "AppName", window.AppName());
            this.addParts(this.body, "MenuStart", window.MenuStart());
            this.addParts(this.body, "MenuGame", window.MenuGame());
            this.addParts(this.body, "SignIn", window.FormSignIn());
            this.addParts(this.body, "SignUp", window.FormSignUp());
            this.addParts(this.body, "ScoreList", window.ScoreList());
            this.addParts(this.body, "AboutUs", window.AboutUs());
            this.addParts(this.body, "Rules", window.Rules());
            this.addParts(this.body, "Footer", window.Footer());
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
    window.CreatePage = CreatePage;
}());
