/**
 * Created by pacman29 on 05.03.17.
 */
(function () {

    function row(opt) {
        let tr = document.createElement('tr');
        if(opt.hasOwnProperty('class')){
            tr.setAttribute('class',opt.class);
        }
        let row = opt.row;
        tr.innerHTML = template({position: row.position, nickname: row.nickname, score: row.score});
        return tr;
    }

    window.ScoreList = function (opt,players) {
        let table = document.createElement('table');
        table.setAttribute('class','score_list');
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
/*
`<table class="score-table">
            <tbody><tr>
                <th>
                    #
                </th>
                <th>
                    nickname
                </th>
                <th>
                    score
                </th>
            </tr>
            <tr>
                <td>
                    <div class="medal medal_type_gold">
                        1
                    </div>
                </td>
                <td>
                    Kate
                </td>
                <td>
                    1000
                </td>
            </tr>
            <tr>
                <td>
                    <div class="medal medal_type_silver">
                        2
                    </div>
                </td>
                <td>
                    Anton
                </td>
                <td>
                    999
                </td>
            </tr>
            <tr>
                <td>
                    <div class="medal medal_type_bronze">
                        3
                    </div>
                </td>
                <td>
                    Slavas
                </td>
                <td>
                    2
                </td>
            </tr>
            <tr>
                <td>
                    <div class="medal medal_type_other">
                        4
                    </div>
                </td>
                <td>
                    0
                </td>
                <td>
                    0
                </td>
            </tr>
            <tr>
                <td>
                    <div class="medal medal_type_other">
                        5
                    </div>
                </td>
                <td>
                    0
                </td>
                <td>
                    0
                </td>
            </tr>
            <tr>
                <td>
                    <div class="medal medal_type_other">
                        6
                    </div>
                </td>
                <td>
                    0
                </td>
                <td>
                    0
                </td>
            </tr>
            <tr>
                <td>
                    <div class="medal medal_type_other">
                        7
                    </div>
                </td>
                <td>
                    0
                </td>
                <td>
                    0
                </td>
            </tr>
            <tr>
                <td>
                    <div class="medal medal_type_other">
                        8
                    </div>
                </td>
                <td>
                    0
                </td>
                <td>
                    0
                </td>
            </tr>
            <tr>
                <td>
                    <div class="medal medal_type_other">
                        ...
                    </div>
                </td>
                <td>
                    ...
                </td>
                <td>
                    ...
                </td>
            </tr>
            <tr>
                <td>
                    <div class="medal medal_type_other">
                        9
                    </div>
                </td>
                <td>
                    0
                </td>
                <td>
                    0
                </td>
            </tr>
            <tr>
                <td>
                    <div class="medal medal_type_other">
                        1996
                    </div>
                </td>
                <td>
                    Ты
                </td>
                <td>
                    0
                </td>
            </tr>
        </tbody></table>`

*/
