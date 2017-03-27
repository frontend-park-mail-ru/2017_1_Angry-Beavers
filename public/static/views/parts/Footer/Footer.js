/**
 * Created by pacman29 on 22.02.17.
 */

'use strict';

(function () {
    const TEXT = "Copyright © Angry Beavers. All rights reserved.";

    window.Footer = function () {
        let footer = document.createElement('footer');
        footer.setAttribute('class', 'text-center footer');
        footer.innerHTML = pugFooter({
            text: TEXT
        });
        return footer;
    };
}());
