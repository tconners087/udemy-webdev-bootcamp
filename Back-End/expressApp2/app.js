const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send('Hi there, welcome to my assignment!');
});

app.get('/speak/:animal', (req, res) => {
  var sounds = {
    pig: "Oink",
    cow: "Moo",
    dog: "Woof Woof!"
  }
  var animal = req.params.animal.toLowerCase();
  var sound = sounds[animal];

  if(!sound)
    return res.redirect('/error');

  res.send(`The ${animal} says '${sound}'`);
});

app.get('/repeat/:word/:num', (req, res) => {
  var word = req.params.word;
  var num = Number(req.params.num);
  var newString = "";

  if(isNaN(num))
    return res.redirect('/error');

  newString += word;
  for(var i = 0; i < num-1; i++) {
    newString += " " + word;
  }

  res.send(`${newString}`);
});

app.get('*', (req, res) => {
  res.send(`Sorry, page not found... What are you doing with your life?`);
});

app.listen((process.env.PORT || 3000), process.env.IP, () => {
  console.log(`Listening on port 3000`);
});