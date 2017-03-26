/**
 * Created by pacman29 on 28.02.17.
 */

'use strict';

(function () {
    window.ButtonConstruct = function (opt) {
        let result = document.createElement('span');
        result.innerHTML = pugButtonConstruct({
            attributes: opt.attrs,
            text: opt.text
        });
        return result;
    }
}());
