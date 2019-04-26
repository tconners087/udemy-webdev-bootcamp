const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

var campgrounds = [
  {
    name: "Salmon Creek",
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "Granite Hill",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "Mountain Goat's Rest",
    image: "https://images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  }
]

app.get('/', (req, res) => {
  res.render('landing', {

  });
});

app.get('/campgrounds', (req, res) => {
  res.render('campgrounds', {
    campgrounds
  });
});

app.post('/campgrounds', (req, res) => {
  var name = req.body.name;
  var image = req.body.image;
  campgrounds.push({
    name, image
  });
  res.redirect('/campgrounds');
});

app.get('/campgrounds/new', (req, res) => {
  res.render('new');
});

app.listen((process.env.PORT || 3000), process.env.IP, () => {
  console.log(`Listening on port 3000`);
});