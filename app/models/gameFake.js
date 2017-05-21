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
        this._hand = [];
        for (let i = 0; i < 7; ++i) {
            this._hand.push({
                "red": false,
                "id": Math.round(Math.random() * 400)
            });
        }
        this._users = [
            {
                "userLogin": this._session.user.login,
                "isMaster": true,
                "score": Infinity,
                "type": "GameUserInfo"
            },
        ];
        this._table = [
            {
                "red": false,
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

    selectCard(cardId) {
        let card = this._hand.find(x => x.id == cardId);
        this._table.push(card);

        this._hand = [];
        for (let i = 0; i < 7; ++i) {
            this._hand.push({
                "red": false,
                "id": Math.round(Math.random() * 400)
            });
        }

        this._onHandInfo && this._onHandInfo();
        this._onRoundInfo && this._onRoundInfo();
        this._onTableInfo && this._onTableInfo();
        if (++this._roundNum >= 4) {
            setTimeout(function () {
                this.stop();
                this.start();
            }.bind(this), 3000);
        }
        this._onGetCardFromHand && this._onGetCardFromHand();
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
