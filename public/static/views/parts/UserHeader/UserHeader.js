/**
 * Created by ed on 07.04.17.
 */

'use strict';

import './UserHeader.css';
import pugUserHeader from './UserHeader.pug';

const UserHeader = function (user) {
    let div = document.createElement('div');
    div.innerHTML = pugUserHeader({
        user: user
    });
    return div;
};

export default UserHeader;
