/**
 * Created by pacman29 on 21.02.17.
 */
(function(){
    window.Menu = function Menu(opt) {
        function create_icon(data,count) {
            let col = document.createElement('div');
            col.setAttribute('class',`col-lg-${Math.round(12/count)}`);
            let a = document.createElement('a');
            a.setAttribute('href',data.href);
            let img = document.createElement('img');
            for(let i in data.attr){
                img.setAttribute(i.toString(),data.attr[i].toString());
            }
            a.appendChild(img);
            col.appendChild(a);
            return col;
        }

        let container = document.createElement('div');
        container.setAttribute('class','container menu');
        let row = document.createElement('row');
        opt.icons.forEach(iter => {
           row.appendChild(create_icon(iter));
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
