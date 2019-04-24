const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send('Hi there!');
});

app.get('/bye', (req, res) => {
  res.send('Goodbye!');
});

app.get('/dog', (req, res) => {
  res.send('MEOW!');
});

// any route matching this pattern will access this route
app.get('/r/:subName', (req, res) => {
  res.send(`Welcome to the ${req.params.subName} subreddit!`);
});

app.get('/r/:subName/comments/:id', (req, res) => {
  res.send(`Welcome to the ${req.params.id} comment section of ${req.params.subName}!`);
});

app.get('*', (req,res) => {
  res.send("You are a star!");
});

app.listen((process.env.PORT || 3000), process.env.IP, () => {
  console.log("Listening on port 3000");
});