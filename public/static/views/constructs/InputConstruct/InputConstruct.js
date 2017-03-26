/**
 * Created by pacman29 on 28.02.17.
 */

'use strict';

(function () {
    window.InputContruct = function (opt) {
        let input = document.createElement('span');
        input.innerHTML = pugInputConstruct({
            attributes: opt
        });
        return input;
    };
}());
