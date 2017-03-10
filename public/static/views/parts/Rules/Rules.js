/**
 * Created by pacman29 on 08.03.17.
 */
(function () {
    let rulesTemplate = template;
    window.Rules = function (opt) {
        debugger;
        let div = document.createElement('div');
        div.innerHTML = rulesTemplate({
            text: opt.text
        });
        return div;
    }
}());
