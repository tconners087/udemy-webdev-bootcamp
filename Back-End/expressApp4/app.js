// General search: http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb 
// Search with Movie ID: http://www.omdbapi.com/?i=tt3896198&apikey=thewdb 

const express = require('express');
const request = require('request');

var app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('search');
});


app.get('/results', (req, res) => {
  request(`http://www.omdbapi.com/?s=${req.query.term}&apikey=thewdb`, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      var parsedData = JSON.parse(body);
      res.render('results', {
        parsedData
      });
    }
  });
});

app.listen((process.env.PORT || 3000), process.env.IP, () => {
  console.log('listening on port 3000');
});
