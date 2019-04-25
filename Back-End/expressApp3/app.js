const express = require('express');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/public"));
app.set('views', './views');
app.set('view engine', 'ejs');

var friends = [
  "Tony",
  "Miranda",
  "Justin",
  "Pierre",
  "Lily"
]

app.get('/', (req, res) => {
  res.render('index', {
    title: "Home Page",
    name: "Taylor"
  });
});

app.get('/fall/:thing', (req, res) => {
  var thing = req.params.thing;
  res.render('love', {
    thing
  });
}); 

app.get('/posts', (req, res) => {
  var posts = [ 
    {title: "Post 1", author: "Author 1"},
    {title: "Post 2", author: "Author 2"},
    {title: "Post 3", author: "Author 3"}
  ];

  res.render('posts', {
    posts
  });
});

app.get('/friends', (req, res) => {
  res.render('friends', {
    friends
  });
})

app.post('/addfriend', (req, res) => {
  var newFriend = req.body.newFriend;
  friends.push(newFriend);
  res.redirect('/friends');
});

app.listen((process.env.PORT || 3000), process.env.IP, () => {
  console.log(`listening on port 3000`);
});