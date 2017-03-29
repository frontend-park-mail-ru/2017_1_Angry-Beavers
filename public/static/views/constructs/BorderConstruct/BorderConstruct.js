/**
 * Created by pacman29 on 22.02.17.
 */

'use strict';

(function () {
    window.BorderConstruct = function Border(opt = {}) {
        let container = document.createElement('div');
        container.innerHTML = pugBorderConstruct({
            img: opt.img,
            element: opt.el
        });
        return container;
    }
}());
