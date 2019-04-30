const express = require('express'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose');

var app = express();
mongoose.connect('mongodb://localhost:27017/yelp_camp', { useNewUrlParser: true });

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Schema Setup
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

app.get('/', (req, res) => {
  res.render('landing', {

  });
});

app.get('/campgrounds', (req, res) => {
  Campground.find({}, function (err, campgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render('index', {
        campgrounds
      });
    }
  });
});

app.post('/campgrounds', (req, res) => {
  var name = req.body.name;
  var image = req.body.image;
  var description = req.body.description;
  Campground.create({
    name: name,
    image: image,
    description: description
  }, function (err, camp) {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/campgrounds');
    }
  });
});//

app.get('/campgrounds/new', (req, res) => {
  res.render('new');
});

app.get('/campgrounds/:id', (req, res) => {
  Campground.findById(req.params.id, function (err, foundCamp) {
    if(err) {
      console.log(err);
    } else {
      res.render('show', {
        camp: foundCamp
      });
    }
  });
});

app.listen((process.env.PORT || 3000), process.env.IP, () => {
  console.log(`Listening on port 3000`);
});