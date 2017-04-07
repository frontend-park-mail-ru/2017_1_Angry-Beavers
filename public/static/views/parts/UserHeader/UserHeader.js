/**
 * Created by ed on 07.04.17.
 */

'use strict';

import './UserHeader.css';
import pugUserHeader from './UserHeader.pug';

const UserHeader = function () {
    let div = document.createElement('div');
    div.innerHTML = pugUserHeader();
    return div;
};

export default UserHeader;
