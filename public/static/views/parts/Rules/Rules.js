/**
 * Created by pacman29 on 08.03.17.
 */

'use strict';

(function () {
    const RIGHT_IMG = "images/add_your_data.png";
    const HEAD_TEXT = "ну тут какие-то правила будут, наверное...";

    window.Rules = function () {
        let div = document.createElement('div');

        div.innerHTML = pugRules({
            title: HEAD_TEXT
        });

        return window.Border({
            el: div,
            img: RIGHT_IMG
        });
    }
}());
