const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog_demo');

var Post = require("./models/posts");
var User = require("./models/user")

// User.create({
//   email: "bob@gmail.com",
//   name: "Bob Belcher"
// });

// Post.create({
//   title: "How to cook the best burger",
//   content: "blah blah blah"
// }, function(err, post) {
//   User.findOne({email: "bob@gmail.com"}, function(err, foundUser) {
//     if(err) {
//       console.log(err);
//     } else {
//       foundUser.posts.push(post);
//       foundUser.save(function(err, data) {
//         console.log(data);
//       });
//     }
//   });
// });

// // Find user -> find all posts for that user -> populate posts in user
// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });


