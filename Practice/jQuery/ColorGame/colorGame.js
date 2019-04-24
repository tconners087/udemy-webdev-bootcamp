
var colors = [];
var pickedColor;
var numColors = 6;

init();

function init() {
  // Generate array of random rgb colors
  genColorArray();

  // Assign rgb colors to squares
  assignColors()

  // Pick one color and assign its value to h1
  pickedColor = pickColor();
  $("#pickedColor").text(pickedColor);

  // toggle selected between easy and hard buttons
  $(".btn.difficulty").on("click", function () {
    $(".btn.difficulty").each(function (i, obj) {
      $(obj).removeClass("selected");
    });
    $(this).toggleClass("selected");
    if ($(this).text() === "Easy") {
      numColors = 3;
    } else {
      numColors = 6;
    }
    reset();
  });

  $("#newGame").on("click", function() {
    reset();
  });

  $(".square").on("click", function () {
    if($(this).css("background-color") === pickedColor) {
      $("#message").text("Correct!");
      $("#header div").css("background-color", pickedColor);
      $(".square").each(function (i, obj) {
        if (i < colors.length)
          $(obj).fadeIn();
        $(obj).css("background-color", pickedColor);
      });
    } else {
      $("#message").text("Try Again");
      $(this).css("background-color", "#393939");
    }
  })
}

function reset() {
  colors = [];
  genColorArray();
  assignColors();
  console.log(colors.length);
  pickedColor = pickColor();
  $("#pickedColor").text(pickedColor);
  $("#message").text("");
  $("#header div").css("background-color", "steelblue");
}

function assignColors() {
  $(".square").each(function (i, obj) {
    if (i < colors.length) {
      $(obj).fadeIn();
      $(obj).css("background-color", colors[i]);
    }
    else
      $(obj).fadeOut();
  });
}

function genRandomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function genColorArray() {
  for (var i = 0; i < numColors; i++) {
    colors.push(genRandomColor());
  }
}

function pickColor() {
  return colors[Math.floor(Math.random() * numColors)];
}

