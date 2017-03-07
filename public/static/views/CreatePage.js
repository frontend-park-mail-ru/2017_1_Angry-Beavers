/**
 * Created by pacman29 on 20.02.17.
 */
(function () {
    class CreatePage extends window.View{
        constructor(opt = {}){
            if(CreatePage.__instance){
                return CreatePage.__instance;
            }
            super(opt);
            this.body = (document.getElementsByTagName('body'))[0];
            this.links  = [];
            this.parts = new Map();
            let link_name = document.createElement('link');
            link_name.setAttribute('rel','stylesheet');
            link_name.setAttribute('href','');
            this.links.push();
            this.addParts(this.body,"AppName",window.AppName({
                attr : [
                    {
                        href: "/",
                        stylesheet: "my_ref my_font_for_gamename first",
                        text: "Joking"
                    },
                    {
                        href: "/",
                        stylesheet: "my_ref my_font_for_gamename second",
                        text: "Hazard"
                    }
                ]
            }),"stylesheets/parts/AppName.css");
            this.addParts(this.body,"MenuStart",window.Menu({
                icons: [
                    {
                        href: "singin",
                        attr: {
                            src:  "images/1.png",
                            class: "img-responsive my_btn_image",
                            onMouseOver: "this.src='images/GOOGFACE.png'",
                            onMouseOut: "this.src='images/1.png'"
                        }
                    },
                    {
                        href: "aboutus",
                        attr: {
                            src:  "images/About_us.png",
                            class: "img-responsive my_btn_image",
                            onMouseOver: "this.src='images/We_do_it.png'",
                            onMouseOut: "this.src='images/About_us.png'"
                        }
                    },
                    {
                        href: "rules",
                        attr: {
                            src:  "images/About_rules.png",
                            class: "img-responsive my_btn_image",
                            onMouseOver: "this.src='images/About_rules_2.png'",
                            onMouseOut: "this.src='images/About_rules.png'"
                        }
                    }
                ]
            }),"stylesheets/parts/Menu.css");
            this.addParts(this.body,"MenuGame",window.Menu({
                icons: [
                    {
                        href: "play",
                        attr: {
                            src:  "images/1.png",
                            class: "img-responsive my_btn_image",
                            onMouseOver: "this.src='images/GOOGFACE.png'",
                            onMouseOut: "this.src='images/1.png'"
                        }
                    },
                    {
                        href: "score",
                        attr: {
                            src:  "images/1.png",
                            class: "img-responsive my_btn_image",
                            onMouseOver: "this.src='images/GOOGFACE.png'",
                            onMouseOut: "this.src='images/1.png'"
                        }
                    },
                    {
                        href: "aboutus",
                        attr: {
                            src:  "images/About_us.png",
                            class: "img-responsive my_btn_image",
                            onMouseOver: "this.src='images/We_do_it.png'",
                            onMouseOut: "this.src='images/About_us.png'"
                        }
                    },
                    {
                        href: "rules",
                        attr: {
                            src:  "images/About_rules.png",
                            class: "img-responsive my_btn_image",
                            onMouseOver: "this.src='images/About_rules_2.png'",
                            onMouseOut: "this.src='images/About_rules.png'"
                        }
                    }
                ]
            }),"stylesheets/parts/Menu.css");

            this.addParts(this.body,"SingIn",window.Border({
                img: "images/add_your_data.png",
                stylesheet: "stylesheets/parts/Form.css",
                el : window.FormConstruct({
                    text: "Авторизация",
                    inputs:[
                        {
                            placeholder: "Username",
                            class: "",
                            name: "username",
                            type: "text"
                        },
                        {
                            placeholder: "Password",
                            class: "",
                            name: "password",
                            type: "password"
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
            }),
            "stylesheets/parts/Border.css");

            this.addParts(this.body,"SingUp",window.Border({
                    img: "images/add_your_data.png",
                    stylesheet: "stylesheets/parts/Form.css",
                    el : window.FormConstruct({
                        text: "Регистрация",
                        inputs:[
                            {
                                placeholder: "Your Email",
                                class: "",
                                name: "email",
                                type: "text"
                            },
                            {
                                placeholder: "Username",
                                class: "",
                                name: "username",
                                type: "text"
                            },
                            {
                                placeholder: "Password",
                                class: "",
                                name: "password",
                                type: "password"
                            },
                            {
                                placeholder: "Repeat password",
                                class: "",
                                name: "password_r",
                                type: "password"
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
                }),
                "stylesheets/parts/Border.css");

            this.addParts(this.body,"ScoreList",window.Border({
                    img: "images/add_your_data.png",
                    stylesheet: "stylesheets/parts/ScoreList.css",
                    el : window.ScoreList({
                        },
                        [
                            {
                                position: "1",
                                nickname: "lol_1",
                                score: "999"
                            },
                            {
                                position: "2",
                                nickname: "lol_2",
                                score: "888"
                            },
                            {
                                position: "3",
                                nickname: "lol_3",
                                score: "777"
                            },
                            {
                                position: "...",
                                nickname: "...",
                                score: "..."
                            },
                            {
                                position: "4",
                                nickname: "lol_4",
                                score: "777"
                            }
                        ]
                    )
                }),
                "stylesheets/parts/Border.css");

            this.addParts(this.body,"Footer",window.Footer({
                text: "Copyright © MyWebsite. All rights reserved.",
                class: "my_font"
            }),"stylesheets/parts/Footer.css");
        }

        addParts(parent, name, elem, stylesheet = ""){
            if(stylesheet !== "") {
                let style = document.createElement('link');
                style.setAttribute('rel', 'stylesheet');
                style.setAttribute('href', stylesheet);
                this.body.appendChild(style);
            }
            this.parts.set(name,elem);
            elem.hidden = true;
            parent.appendChild(elem);
        }

        getParts(){
            return this.parts;
        }

        resume(options = {}) {
            this.parts.forEach(item =>{
                item.hidden = false;
            })
        }

    }
    window.CreatePage = CreatePage;
}());
