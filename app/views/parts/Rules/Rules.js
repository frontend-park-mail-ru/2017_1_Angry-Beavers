/**
 * Created by pacman29 on 08.03.17.
 */

'use strict';

import './Rules.scss';
import pugRules from './Rules.pug';

import BorderConstruct from '../../constructs/BorderConstruct/BorderConstruct';

const RIGHT_IMG = "images/Rules_page.webp";
const TITLE = "ну тут какие-то правила будут, наверное...";

const Rules = function () {
    let div = document.createElement('div');

    div.innerHTML = pugRules();

    return BorderConstruct({
        title: TITLE,
        el: div,
        img: RIGHT_IMG
    });
};

export default Rules;
