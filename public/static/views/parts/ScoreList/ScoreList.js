/**
 * Created by pacman29 on 05.03.17.
 */

'use strict';

(function () {
    function row(opt) {
        let tr = document.createElement('tr');
        if (opt.hasOwnProperty('class')) {
            tr.setAttribute('class', opt.class);
        }
        let row = opt.row;
        tr.innerHTML = pugScoreList({position: row.position, nickname: row.nickname, score: row.score});
        return tr;
    }

    window.ScoreList = function (opt, players) {
        let table = document.createElement('table');
        table.setAttribute('class', 'score_list');
        let header = row({
            class: "header",
            row: {
                position: "#",
                nickname: "nickname",
                score: "score"
            }
        });

        table.appendChild(header);

        players.forEach(item => {
            let tmp = {row: item};
            table.appendChild(row(tmp));
        });

        return table;
    }
}());
