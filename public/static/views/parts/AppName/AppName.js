/**
 * Created by pacman29 on 20.02.17.
 */

'use strict';

import './AppName.css';

const AppName = function () {
    let container = document.createElement('div');
    container.innerHTML = pugAppName();
    return container;
};

export default AppName;
