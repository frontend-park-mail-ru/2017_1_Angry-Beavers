/**
 * Created by ed on 28.03.17.
 */

'use strict';

import pugMenuStart from './MenuStart.pug';

import MenuConstruct from '../../constructs/MenuConstruct/MenuConstruct';

const ITEMS = [
    {
        id: "menuStart_signIn",
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
