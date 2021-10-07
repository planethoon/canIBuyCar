const express = require('express');
const test = require('./test/test');

const app = express();

app.use('/', test);

app.listen(8080);
