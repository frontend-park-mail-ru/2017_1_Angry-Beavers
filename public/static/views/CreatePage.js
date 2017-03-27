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
            this.addParts(this.body, "MenuStart", window.Menu({
                icons: [
                    {
                        attr: {
                            src: "images/1.png",
                            class: "img-responsive my_btn_image",
                            onMouseOver: "this.src='images/GOOGFACE.png'",
                            onMouseOut: "this.src='images/1.png'"
                        }
                    },
                    {
                        attr: {
                            src: "images/About_us.png",
                            class: "img-responsive my_btn_image",
                            onMouseOver: "this.src='images/We_do_it.png'",
                            onMouseOut: "this.src='images/About_us.png'"
                        }
                    },
                    {
                        attr: {
                            src: "images/About_rules.png",
                            class: "img-responsive my_btn_image",
                            onMouseOver: "this.src='images/About_rules_2.png'",
                            onMouseOut: "this.src='images/About_rules.png'"
                        }
                    }
                ]
            }));
            this.addParts(this.body, "MenuGame", window.Menu({
                icons: [
                    {
                        href: "play",
                        attr: {
                            src: "images/1.png",
                            class: "img-responsive my_btn_image",
                            onMouseOver: "this.src='images/GOOGFACE.png'",
                            onMouseOut: "this.src='images/1.png'"
                        }
                    },
                    {
                        href: "score",
                        attr: {
                            src: "images/1.png",
                            class: "img-responsive my_btn_image",
                            onMouseOver: "this.src='images/GOOGFACE.png'",
                            onMouseOut: "this.src='images/1.png'"
                        }
                    },
                    {
                        href: "aboutus",
                        attr: {
                            src: "images/About_us.png",
                            class: "img-responsive my_btn_image",
                            onMouseOver: "this.src='images/We_do_it.png'",
                            onMouseOut: "this.src='images/About_us.png'"
                        }
                    },
                    {
                        href: "rules",
                        attr: {
                            src: "images/About_rules.png",
                            class: "img-responsive my_btn_image",
                            onMouseOver: "this.src='images/About_rules_2.png'",
                            onMouseOut: "this.src='images/About_rules.png'"
                        }
                    }
                ]
            }));

            this.addParts(this.body, "SignIn", window.BorderConstruct({
                img: "images/add_your_data.png",
                el: window.FormConstruct({
                    text: "Авторизация",
                    inputs: [
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
                        }
                    ],
                    buttons: [
                        {
                            attrs: {
                                type: "submit",
                                class: ""
                            },
                            text: "Вход"
                        },
                        {
                            attrs: {
                                type: "reset",
                                class: ""
                            },
                            text: "Регистрация"
                        }
                    ]
                })
            }));

            this.addParts(this.body, "SignUp", window.BorderConstruct({
                img: "images/add_your_data.png",
                el: window.FormConstruct({
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
