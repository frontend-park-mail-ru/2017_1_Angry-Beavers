/**
 * Created by pacman29 on 20.02.17.
 */

'use strict';

(function () {
    window.AppName = function (opt) {
        let container = document.createElement('div');
        container.innerHTML = pugAppName({
            opt: opt
        });
        return container;
    }
}());
