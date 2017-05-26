/**
 * Created by ed on 28.03.17.
 */

'use strict';

import pugMenuGame from './MenuGame.pug';

import MenuConstruct from '../../constructs/MenuConstruct/MenuConstruct';

const ITEMS = [
    {
        id: "menuGame_play",
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
