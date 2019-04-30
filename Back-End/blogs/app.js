const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const expressSanitizer = require('express-sanitizer');
var app = express();

// APP CONFIG
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer());
app.use(methodOverride("_method"));

mongoose.connect('mongodb://localhost/restful_blog_app', { useNewUrlParser: true, useFindAndModify: false });

// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {
    type: Date,
    default: Date.now
  }
});

var Blog = mongoose.model("Blog", blogSchema);

// RESTFUL ROUTES

app.get('/', (req, res) => {
  res.redirect('/blogs');
})

// INDEX
app.get('/blogs', (req, res) => {
  Blog.find({}, function (err, blogs) {
    if (err) {
      console.log(err);
    } else {
      res.render('index', {
        blogs
      });
    }
  });
});

// NEW
app.get('/blogs/new', (req, res) => {
  res.render('new');
});

// CREATE
app.post('/blogs', (req, res) => {
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.create(req.body.blog, function (err, blog) {
    if (err) {
      res.render('new');
    } else {
      res.redirect('/blogs');
    }
  });
});

// SHOW
app.get('/blogs/:id', (req, res) => {
  Blog.findById(req.params.id, function (err, foundBlog) {
    if (err) {
      res.redirect('/blogs');
    } else {
      res.render('show', {
        blog: foundBlog
      });
    }
  });
});

// EDIT
app.get('/blogs/:id/edit', (req, res) => {
  Blog.findById(req.params.id, function(err, foundBlog) {
    if(err) {
      res.redirect('/blogs');
    } else {
      res.render('edit', {
        blog: foundBlog
      });
    }
  });
});

// UPDATE
app.put('/blogs/:id', (req, res) => {
  req.body.blog.body = req.sanitize(req.body.blog.body);
  // Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog) {
  //   if(err) {
  //     res.redirect('/blogs');
  //   } else {
  //     res.redirect('/blogs/' + req.params.id);
  //   }
  // });
  Blog.findOneAndUpdate({_id: req.params.id}, req.body.blog, function(err, updatedBlog) {
    if(err) {
      res.redirect('/blogs');
    } else {
      res.redirect('/blogs/' + req.params.id);
    }
  }); 
});

// DESTROY
app.delete('/blogs/:id', (req, res) => {
  Blog.findOneAndDelete({_id: req.params.id}, function(err) {
    if(err) {
      res.redirect('/blogs');
    } else {
      res.redirect('/blogs');
    }
  });
});

app.listen((process.env.PORT || 3000), process.env.IP, () => {
  console.log(`listening on port 3000`);
});

