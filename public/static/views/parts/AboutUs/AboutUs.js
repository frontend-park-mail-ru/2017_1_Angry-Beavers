/**
 * Created by pacman29 on 08.03.17.
 */
(function () {
    window.AboutUs = function (opt) {
        let div = document.createElement('div');

        div.innerHTML = pugAboutUs({
            members: opt.members,
            text: opt.text
        });

        return div;
    }
}());
