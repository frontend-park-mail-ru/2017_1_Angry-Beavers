/**
 * Created by ed on 06.04.17.
 */

'use strict';

let path = require('path');
module.exports = {
    entry: './public/static/main.js',
    output: {
        path: __dirname,
        filename: './public/static/bundle.js'
    }
};
