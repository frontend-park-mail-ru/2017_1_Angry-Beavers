/**
 * Created by ed on 06.05.17.
 */

'use strict';

import './Lobby.css';
import pugLobby from './Lobby.pug';

const Lobby = function () {
    let div = document.createElement('div');
    div.innerHTML = pugLobby();
    return div;
};

export default Lobby;
