/**
 * Created by pacman29 on 21.02.17.
 */
(function(){
    window.Menu = function Menu(opt) {

        let container = document.createElement('div');
        container.setAttribute('class','container menu');
        let row = document.createElement('row');
        opt.icons.forEach(iter => {
           row.appendChild(window.IconConstruct(iter,opt.icons.length));
        });
        container.appendChild(row);
        return container;
    }
}());

/*
 <div class="container">
    <div class="row">
        <div class="col-lg-4">
            <a href="singin">
                <img src="../images/1.png" class="my_btn_image img-responsive" onMouseOver="this.src='../images/GOOGFACE.png'" onMouseOut="this.src='../images/1.png'">
            </a>
        </div>
        <div class="col-lg-4">
            <a href="#">
                <img src="../images/About_us.png" class="my_btn_image img-responsive"
                onMouseOver="this.src='../images/We_do_it.png'"
                onMouseOut="this.src='../images/About_us.png'">
            </a>
        </div>
        <div class="col-lg-4">
            <a href="#">
                <img src="../images/About_rules.png" class="my_btn_image img-responsive"
                onMouseOver="this.src='../images/About_rules_2.png'"
                onMouseOut="this.src='../images/About_rules.png'">
            </a>
        </div>
     </div>
 </div>

 */
