/**
 * Created by ed on 28.03.17.
 */

'use strict';

(function () {
    const ITEMS = [
        {
            id: "menuStart_signIn",
            defaultImg: "images/Login_btn.png",
            backImg: "images/GOODFACE.png"
        },
        {
            id: "menuStart_aboutUs",
            defaultImg: "images/About_us.png",
            backImg: "images/We_do_it.png"
        },
        {
            id: "menuStart_rules",
            defaultImg: "images/About_rules.png",
            backImg: "images/About_rules_2.png"
        }
    ];

    window.MenuStart = function MenuStart() {
        let div = document.createElement('div');
        div.innerHTML = pugMenuStart({
            items: ITEMS
        });
        return div;
    };
}());
