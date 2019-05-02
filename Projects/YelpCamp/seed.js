const mongoose = require('mongoose');
const Campground = require('./models/campground');
const Comment = require('./models/comment')

var data = [
  {
    name: "Ashina's Rest",
    image: "https://images.unsplash.com/photo-1554759384-e0bbfd486f5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80",
    description: "Beautiful campground in the frigid north of Ashina province."
  },
  {
    name: "Dune's Volley",
    image: "https://images.unsplash.com/photo-1553564003-28e601062b3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    description: "Pleasent waves and sandy shores stretch on for miles."
  },
  {
    name: "Mountain Goat Abode",
    image: "https://images.unsplash.com/photo-1555999017-0d0f80510719?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    description: "For the mountain goat in all of us."
  }
];

function seedDB() {
  // Remove campgrounds
  Campground.remove({}, function (err) {
    if (err) {
      console.log(err);
    }
    console.log('Removed campgrounds...');
    // Add campgrounds
    data.forEach(function (seed) {
      Campground.create(seed, function (err, camp) {
        if (err) {
          console.log(err);
        } else {
          console.log('Added a Campground...')
          // Create Comments
          Comment.create({
            text: "comment text",
            author: "homer"
          }, function (err, comment) {
            if (err) {
              console.log(err);
            } else {
              console.log("Comment created...");
              camp.comments.push(comment);
              camp.save();
            }
          });
        }
      });
    });
  });
}

module.exports = seedDB;