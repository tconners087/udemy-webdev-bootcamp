const express = require('express'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  seedDB = require('./seed');

var Campground = require('./models/campground');
var Comment = require('./models/comment');

var app = express();
mongoose.connect('mongodb://localhost:27017/yelp_camp', { useNewUrlParser: true });

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

//seedDB();

app.get('/', (req, res) => {
  res.render('landing', {

  });
});

app.get('/campgrounds', (req, res) => {
  Campground.find({}, function (err, campgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render('campgrounds/index', {
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
  res.render('campgrounds/new');
});

// SHOW
app.get('/campgrounds/:id', (req, res) => {
  Campground.findOne({ _id: req.params.id }).populate("comments").exec(function (err, foundCamp) {
    if (err) {
      console.log(err);
    } else {
      res.render('campgrounds/show', {
        camp: foundCamp
      });
    }
  });
});

app.get('/campgrounds/:id/comments/new', (req, res) => {
  Campground.findOne({ _id: req.params.id }, function (err, camp) {
    if (err) {
      console.log(err);
    } else {
      res.render('comments/new', {
        camp
      });
    }
  });
});//

app.post('/campgrounds/:id/comments', (req, res) => {
  Campground.findOne({ _id: req.params.id }, function (err, camp) {
    if (err) {
      console.log(err);
      res.redirect('/campgrounds');
    } else {
      Comment.create(
        req.body.comment
        , function (err, comment) {
          if (err) {
            console.log(err);
          } else {
            camp.comments.push(comment);
            camp.save();
            res.redirect('/campgrounds/' + camp._id);
          }
        });
    }
  });
});

app.listen((process.env.PORT || 3000), process.env.IP, () => {
  console.log(`Listening on port 3000`);
});