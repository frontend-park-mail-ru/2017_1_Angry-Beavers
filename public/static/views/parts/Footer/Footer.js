/**
 * Created by pacman29 on 22.02.17.
 */

'use strict';

(function () {
    window.Footer = function (opt) {
        let footer = document.createElement('footer');
        footer.setAttribute('class', 'text-center footer');
        footer.innerHTML = pugFooter({_css: opt.class, text: opt.text});
        return footer;
    };
}());
