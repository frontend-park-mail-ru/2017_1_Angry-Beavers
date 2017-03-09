/**
 * Created by pacman29 on 08.03.17.
 */
(function () {
    window.Rules = function (opt) {
        debugger;
        let div = document.createElement('div');
        div.setAttribute('class', 'rules');

        let h3 = document.createElement('h3');
        h3.textContent = opt.text;
        div.appendChild(h3);
        return div;
    }
}());
