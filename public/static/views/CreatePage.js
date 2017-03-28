/**
 * Created by pacman29 on 20.02.17.
 */
(function () {
    class CreatePage {
        constructor(opt = {}) {
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

            this.addParts(this.body, "SignUp", window.FormSignIn({
                img: "images/add_your_data.png",
                el: window.FormSignIn({
                    text: "Регистрация",
                    inputs: [
                        {
                            placeholder: "Your Email",
                            class: "",
                            id: "email",
                            type: "text",
                            required: ""
                        },
                        {
                            placeholder: "Username",
                            class: "",
                            id: "username",
                            type: "text",
                            required: ""
                        },
                        {
                            placeholder: "Password",
                            class: "",
                            id: "password",
                            type: "password",
                            required: ""
                        },
                        {
                            placeholder: "Repeat password",
                            class: "",
                            id: "password_r",
                            type: "password",
                            required: ""
                        }
                    ],
                    buttons: [
                        {
                            attrs: {
                                type: "submit",
                                class: ""
                            },
                            text: "Отправить"
                        },
                        {
                            attrs: {
                                type: "reset",
                                class: ""
                            },
                            text: "Авторизация"
                        }
                    ]
                })
            }));

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
