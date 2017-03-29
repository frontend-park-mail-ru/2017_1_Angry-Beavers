/**
 * Created by pacman29 on 05.03.17.
 */

'use strict';

(function () {
    const RIGHT_IMG = "images/Scorelist.png";
    const PLAYERS = [
        {
            position: "1",
            nickname: "lol_1",
            score: "999"
        },
        {
            position: "2",
            nickname: "lol_2",
            score: "888"
        },
        {
            position: "3",
            nickname: "lol_3",
            score: "777"
        },
    ];
    const YOU = {
        position: "1337",
        nickname: "Andrew",
        score: "-7"
    };

    window.ScoreList = function () {
        let div = document.createElement('div');

        div.innerHTML = pugScoreList({
            topPlayers: PLAYERS,
            player: YOU
        });

        return window.BorderConstruct({
            el: div,
            img: RIGHT_IMG
        });
    }
}());
