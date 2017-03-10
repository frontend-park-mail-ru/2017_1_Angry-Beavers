/**
 * Created by pacman29 on 28.02.17.
 */
(function () {
    window.ButtonConstruct = function (opt) {
        let button = document.createElement('button');
        for (let i in opt.attrs) {
            button.setAttribute(i.toString(), opt.attrs[i].toString());
        }
        button.textContent = opt.text;
        return button;
    }
}());
