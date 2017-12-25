const express = require('express');

const app = express();

app.set('view engine', 'pug');

let index = require('./routers/index');


app.use('/', index);

app.listen(3000, () => console.log('Example app listening on port 3000!'));