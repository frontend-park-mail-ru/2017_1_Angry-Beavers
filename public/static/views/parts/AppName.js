/**
 * Created by pacman29 on 20.02.17.
 */
(function () {
    window.AppName = function (opt) {

        function get_word(data) {
            let col = document.createElement('div');
            col.setAttribute('class', 'col-lg-6');
            let h1 = document.createElement('h1');
            let a = document.createElement('a');
            a.setAttribute('class', data.class);
            a.textContent = data.text;

            h1.appendChild(a);
            col.appendChild(h1);
            return col;
        }

        let container = document.createElement('div');
        container.setAttribute('class', 'container appname');
        let row = document.createElement('div');
        row.setAttribute('class', 'row');
        opt.attr.forEach(iter => {
            row.appendChild(get_word(iter));
        });
        container.appendChild(row);
        return container;
    }
}());
/*
 <div class="container">
 <div class="row">
 <div class="col-lg-6">
 <h1><a href="Index.html" class="my_ref my_font_for_gamename first">Joking&nbsp;</a></h1>
 </div>
 <div class="col-lg-6">
 <h1><a href="Index.html" class="my_ref my_font_for_gamename second">Hazard</a></h1>
 </div>
 </div>
 </div>

 */
