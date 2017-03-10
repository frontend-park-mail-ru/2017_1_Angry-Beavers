/**
 * Created by pacman29 on 22.02.17.
 */
(function () {
    window.Border = function Border(opt = {}) {
        let container = document.createElement('div');
        container.setAttribute('class', 'container border');
        container.innerHTML = `
            <div class="row">
                <div class="col-lg-2"></div>
                <div class="col-lg-6">
                    <div id="inside_block" >
                         <link rel="stylesheet" href=${opt.stylesheet}>
                         ${opt.el.outerHTML}
                    </div>
                </div>
                <div class="col-lg-1"></div>
                <div class="col-lg-3">
                    <div class="row">
                        <img src="${opt.img.toString()}" class="img-responsive">
                    </div>
                </div>
             </div>
            `;
        return container;
    }
}());
