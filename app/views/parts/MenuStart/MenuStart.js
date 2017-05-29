/**
 * Created by ed on 28.03.17.
 */

'use strict';

import pugMenuStart from './MenuStart.pug';

import MenuConstruct from '../../constructs/MenuConstruct/MenuConstruct';
import imagescontroller from '../../ImagesController';
const ITEMS = [
    {
        id: "menuStart_signIn",
<<<<<<< HEAD
        defaultImg: "/images/Login_btn.webp",
        backImg: "/images/GOODFACE.webp"
    },
    {
        id: "menuStart_aboutUs",
        defaultImg: "/images/About_us.webp",
        backImg: "/images/We_do_it.webp"
    },
    {
        id: "menuStart_rules",
        defaultImg: "/images/About_rules.webp",
        backImg: "/images/About_rules_2.webp"
=======
        defaultImg: imagescontroller.get_menu_img("Login_btn"),
        backImg:imagescontroller.get_menu_img("GOODFACE")
    },
    {
        id: "menuStart_aboutUs",
        defaultImg: imagescontroller.get_menu_img("About_us"),
        backImg: imagescontroller.get_menu_img("We_do_it")
    },
    {
        id: "menuStart_rules",
        defaultImg: imagescontroller.get_menu_img("About_rules"),
        backImg: imagescontroller.get_menu_img("About_rules_2")
>>>>>>> baacede1307f7c2bbf11eba3d49f0ccb6063e6d7
    }
];

const MenuStart = function MenuStart() {
    let div = document.createElement('div');
    div.innerHTML = pugMenuStart({
        items: ITEMS
    });
    return div;
};

export default MenuStart;
