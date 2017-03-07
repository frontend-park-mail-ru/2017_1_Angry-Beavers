(function () {
    window.IconConstruct = function (data,count) {
        let col = document.createElement('div');
        col.setAttribute('class',`col-lg-${Math.round(12/count)}`);
        let img = document.createElement('img');
        for(let i in data.attr){
            img.setAttribute(i.toString(),data.attr[i].toString());
        }
        col.appendChild(img);
        return col;
    }
}());
