/**
 * Created by pacman29 on 08.03.17.
 */
(function () {
    window.AboutUs = function (opt) {
        let div = document.createElement('div');
        div.setAttribute('class', 'aboutus');

        let h3 = document.createElement('h3');
        h3.textContent = opt.text;
        div.appendChild(h3);
        opt.members.forEach(iter => {
            let a = document.createElement('a');
            a.textContent = iter.text;
            for (let i in iter) {
                if (i.toString() != iter.text.toString()) {
                    a.setAttribute(i, iter[i]);
                }
            }
            div.appendChild(a);
        });

        return div;
    }
}());
