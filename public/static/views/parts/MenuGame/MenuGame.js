/**
 * Created by ed on 28.03.17.
 */

'use strict';

(function () {
    const ITEMS = [
        {
            id: "menuGame_play",
            defaultImg: "images/1.png",
            backImg: "images/GOOGFACE.png"
        },
        {
            id: "menuGame_score",
            defaultImg: "images/About_us.png",
            backImg: "images/We_do_it.png"
        },
        {
            id: "menuGame_aboutUs",
            defaultImg: "images/About_rules.png",
            backImg: "images/About_rules_2.png"
        },
        {
            id: "menuGame_rules",
            defaultImg: "images/About_rules.png",
            backImg: "images/About_rules_2.png"
        }
    ];

    window.MenuGame = function MenuStart() {
        let div = document.createElement('div');
        div.innerHTML = pugMenuGame({
            items: ITEMS
        });
        return div;
    };
}());
