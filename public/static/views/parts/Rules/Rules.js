/**
 * Created by pacman29 on 08.03.17.
 */
(function () {
    let rules_template = template;
    window.Rules = function (opt) {
        debugger;
        let div = document.createElement('div');
        div.innerHTML = rules_template({
            text: opt.text
        });
        return div;
    }
}());
