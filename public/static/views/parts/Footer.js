/**
 * Created by pacman29 on 22.02.17.
 */
(function () {
   window.Footer = function Footer(opt) {
       let footer = document.createElement('footer');
       footer.setAttribute('class','text-center footer');
       footer.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <p>${opt}</p>
                </div>
            </div>
        </div>
        `;
       return footer;
   }
});
/*
 <footer class="text-center">
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <p>Copyright © MyWebsite. All rights reserved.</p>
            </div>
        </div>
    </div>
 </footer>
 */
