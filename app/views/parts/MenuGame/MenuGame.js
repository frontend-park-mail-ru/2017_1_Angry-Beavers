/**
 * Created by ed on 28.03.17.
 */

'use strict';

import pugMenuGame from './MenuGame.pug';

import MenuConstruct from '../../constructs/MenuConstruct/MenuConstruct';
import imagescontroller from '../../ImagesController';
const ITEMS = [
    {
        id: "menuGame_play",
<<<<<<< HEAD
        defaultImg: "/images/Game.webp",
        backImg: "/images/Game_hold.webp"
    },
    {
        id: "menuGame_score",
        defaultImg: "/images/Score_btn.webp",
        backImg: "/images/Score_btn_hold.webp"
    },
    {
        id: "menuGame_aboutUs",
        defaultImg: "/images/About_us.webp",
        backImg: "/images/We_do_it.webp"
    },
    {
        id: "menuGame_rules",
        defaultImg: "/images/About_rules.webp",
        backImg: "/images/About_rules_2.webp"
=======
        defaultImg: imagescontroller.get_menu_img("Game"),
        backImg: imagescontroller.get_menu_img("Game_hold")
    },
    {
        id: "menuGame_score",
        defaultImg: imagescontroller.get_menu_img("Score_btn"),
        backImg: imagescontroller.get_menu_img("Score_btn_hold")
    },
    {
        id: "menuGame_aboutUs",
        defaultImg: imagescontroller.get_menu_img("About_us"),
        backImg: imagescontroller.get_menu_img("We_do_it")
    },
    {
        id: "menuGame_rules",
        defaultImg: imagescontroller.get_menu_img("About_rules"),
        backImg: imagescontroller.get_menu_img("About_rules_2")
>>>>>>> baacede1307f7c2bbf11eba3d49f0ccb6063e6d7
    }
];

const MenuGame = function MenuStart() {
    let div = document.createElement('div');
    div.innerHTML = pugMenuGame({
        items: ITEMS
    });
    return div;
};

export default MenuGame;
