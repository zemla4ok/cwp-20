const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', { countriesCount: 10, citiesCount: 42 });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
