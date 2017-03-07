(function () {
    window.IconConstruct = function (data,count) {
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
}());
