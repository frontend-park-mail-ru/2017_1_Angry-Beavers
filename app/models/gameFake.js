/**
 * Created by ed on 08.05.17.
 */

'use strict';

class GameFake {
    constructor(session) {
        this._session = session;
    }

    get session() {
        return this._session;
    }

    start() {
        this._rountCount = 4;

        this._hand = [];
        for (let i = 0; i < 7; ++i) {
            this._hand.push({
                "red": Math.random() < 0.1,
                "id": Math.round(Math.random() * 400)
            });
        }

        !this._users && (this._users = [
            {
                "userLogin": this._session.user.login,
                "isMaster": true,
                "score": 0,
                "type": "GameUserInfo"
            },
        ]);
        this._table = [
            {
                "red": Math.random() < 0.1,
                "id": Math.round(Math.random() * 400)
            }
        ];

        this._onHandInfo && this._onHandInfo();
        this._roundNum = 1;
        this._onRoundInfo && this._onRoundInfo();
        this._onTableInfo && this._onTableInfo();
        this._onGetCardFromHand && this._onGetCardFromHand();
    }

    stop() {

    }

    selectCardFromHand(index) {
        setTimeout(function () {
            if (this._table.length === 4) return;

            let card = this._hand[index];
            this._table.push(card);

            this._hand[index] = {
                "red": false,
                "id": Math.round(Math.random() * 400)
            };

            this._onTableInfo && this._onTableInfo();
            if (++this._roundNum === 4) {
                this._onGetCardFromTable && this._onGetCardFromTable();
            } else {
                this._onHandInfo && this._onHandInfo();
                this._onRoundInfo && this._onRoundInfo();
                setTimeout(function () {
                    this._onGetCardFromHand && this._onGetCardFromHand();
                }.bind(this), 500);
            }
        }.bind(this), 1000);
    }

    selectCardFromTable(index) {
        this._hand = [];
        this._onHandInfo && this._onHandInfo();
        setTimeout(function () {
            this.stop();
            ++this._users[0].score;
            this.start();
        }.bind(this), 3000);
    }

    get roundCount() {
        return this._rountCount
    }

    get roundNum() {
        return this._roundNum;
    }

    get hand() {
        return this._hand;
    }

    get users() {
        return this._users;
    }

    get table() {
        return this._table;
    }

    get onHandInfo() {
        return this._onHandInfo;
    }

    set onHandInfo(value) {
        this._onHandInfo = value;
    }

    get onRoundInfo() {
        return this._onRoundInfo;
    }

    set onRoundInfo(value) {
        this._onRoundInfo = value;
    }

    get onTableInfo() {
        return this._onTableInfo;
    }

    set onTableInfo(value) {
        this._onTableInfo = value;
    }

    get onGetCardFromHand() {
        return this._onGetCardFromHand;
    }

    set onGetCardFromHand(value) {
        this._onGetCardFromHand = value;
    }

    get onGetCardFromTable() {
        return this._onGetCardFromTable;
    }

    set onGetCardFromTable(value) {
        this._onGetCardFromTable = value;
    }

    get onError() {
        return this._onError;
    }

    set onError(value) {
        this._onError = value;
    }

    get onClosed() {
        return this._onClosed;
    }

    set onClosed(value) {
        this._onClosed = value;
    }
}

export default GameFake;
