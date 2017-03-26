/**
 * Created by pacman29 on 08.03.17.
 */

'use strict';

(function () {
    const RIGHT_IMG = "images/add_your_data.png";
    const HEAD_TEXT = "Ага, вот эти ребята: ";
    const MEMBERS = [
        {
            link: "https://github.com/ed-asriyan",
            name: "Ed Asriyan"
        },
        {
            link: "https://github.com/Pacman29",
            name: "Pacman29"
        }
    ];

    window.AboutUs = function () {
        let div = document.createElement('div');

        div.innerHTML = pugAboutUs({
            members: MEMBERS,
            headText: HEAD_TEXT
        });

        return window.Border({
            el: div,
            img: RIGHT_IMG
        });
    }
}());
