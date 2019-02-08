const express = require('express');
const hbs = require('hbs');
const port = process.envPORT || 3000;
var app = express()

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('index.hbs');
});

app.get('/help', (req, res) => {
  res.render('help.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
})
app.get('/bad', (req, res) => {
  res.render('bad.hbs');
})
app.listen(port, () => {
  console.log('Server is up on port 3000');
});
