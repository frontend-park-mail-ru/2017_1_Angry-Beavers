/**
 * Created by pacman29 on 08.03.17.
 */
(function () {
    window.Rules = function (opt) {
        let div = document.createElement('div');
        div.innerHTML = pugRules({
            text: opt.text
        });
        return div;
    }
}());
