/**
 * Created by pacman29 on 28.02.17.
 */
(function () {
    window.InputContruct = function (opt) {
        let input = document.createElement('input');
        for(i in opt){
            input.setAttribute(i.toString(),opt[i].toString());
        }
        return input;
    };
}());
