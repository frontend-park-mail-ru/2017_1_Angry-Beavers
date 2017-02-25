/**
 * Created by pacman29 on 20.02.17.
 */
(function () {
    class CreatePage extends window.View{
        constructor(opt = {}){
            super(opt);
            this.body = (document.getElementsByTagName('body'))[0];
            this.links  = [];
            this.parts = new Map();
            let link_name = document.createElement('link');
            link_name.setAttribute('rel','stylesheet');
            link_name.setAttribute('href','');
            this.links.push();
            this.add_parts(this.body,"AppName",window.AppName({
                attr : [
                    {
                        href: "/",
                        class: ""
                    },
                    {
                        href: "/",
                        class: ""
                    }
                ]
            }));
            this.add_parts(this.body,"Menu",window.Menu({
                icons: [
                    {
                        href: "/",
                        attr: {
                            src:  "",
                            class: "img-responsive",
                            onMouseOver: "this.src=''",
                            onMouseOut: "this.src=''"
                        }
                    },
                    {
                        href: "/",
                        attr: {
                            src:  "",
                            class: "img-responsive",
                            onMouseOver: "this.src=''",
                            onMouseOut: "this.src=''"
                        }
                    },
                    {
                        href: "/",
                        attr: {
                            src:  "",
                            class: "img-responsive",
                            onMouseOver: "this.src=''",
                            onMouseOut: "this.src=''"
                        }
                    }
                ]
            }));
            this.add_parts(this.body,"Footer",window.Footer("Copyright © MyWebsite. All rights reserved."));
            this.add_parts(this.body,"Border",window.Border(""));
        }

        add_parts(parent,name,elem){
            this.parts.set(name,elem);
            elem.hidden = false;
            parent.appendChild(elem);
        }

        get_parts(){
            return this.parts;
        }

        resume(options = {}) {
            this.show();
        }

    }
    window.CreatePage = CreatePage;
}());
