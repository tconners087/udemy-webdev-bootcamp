// Check off specific todos by clicking
$('ul').on('click', 'li', function() {
  $(this).toggleClass("done");
});

// Click X to delete todo
$('ul').on('click', 'li span', function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  // Stops event bubbling
  event.stopPropagation();
});

$("input[type='text']").on('keypress', function(event) {
  if(event.which === 13) {
    // This is bad. I can inject code here.
    var todoText = $(this).val();
    $(this).val("");
    $('ul').append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
  }
});

$("#plus").on('click', function() {
  $("input[type='text']").fadeToggle();
});

