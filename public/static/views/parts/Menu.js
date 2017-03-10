/**
 * Created by pacman29 on 21.02.17.
 */
(function () {
    window.Menu = function Menu(opt) {

        let container = document.createElement('div');
        container.setAttribute('class', 'container menu');
        let row = document.createElement('row');
        opt.icons.forEach(iter => {
            row.appendChild(window.IconConstruct(iter, opt.icons.length));
        });
        container.appendChild(row);
        return container;
    }
}());
