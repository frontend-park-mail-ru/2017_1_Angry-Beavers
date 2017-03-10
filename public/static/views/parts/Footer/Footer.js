/**
 * Created by pacman29 on 22.02.17.
 */
(function () {
    let footerTemplate = template;
    window.Footer = function (opt) {
        let footer = document.createElement('footer');
        footer.setAttribute('class', 'text-center footer');
        footer.innerHTML = footerTemplate({_css: opt.class, text: opt.text});
        return footer;
    };
}());
