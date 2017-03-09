/**
 * Created by pacman29 on 22.02.17.
 */
(function () {
    let footer_template = template;
    window.Footer = function (opt) {
        let footer = document.createElement('footer');
        footer.setAttribute('class', 'text-center footer');
        footer.innerHTML = footer_template({_css: opt.class, text: opt.text});
        return footer;
    };
}());
