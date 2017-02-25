/**
 * Created by pacman29 on 20.02.17.
 */
'use strict';
const express = require('express');
const parser = require('body-parser');
const app = express();

['/','/singin'].forEach((path) => {
    app.use(path, express.static('public/static'));
});
app.use(express.static('public/static'));

app.listen(process.env.PORT || 3000, function () {
    console.log(`App started on port ${process.env.PORT || 3000}`);
});
