/**
 * Created by pacman29 on 08.03.17.
 */
(function () {
    let aboutUsTemplate = template;
    window.AboutUs = function (opt) {
        let div = document.createElement('div');

        div.innerHTML = aboutUsTemplate({
            members: opt.members,
            text: opt.text
        });

        return div;
    }
}());
