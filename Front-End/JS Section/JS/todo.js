var todos = ["Buy New Turtle"];

function printTodo(todo, idx, arr) {
  console.log(idx + ": " + todo);
}

window.setTimeout(() => {
  console.log("connected");
  var input;
  while (input !== "quit") {
    input = prompt("What would you like to do?");
    if (input === "list") {
      console.log("************");
      todos.forEach(printTodo);
      console.log("************");
    }
    else if (input === "new") {
      todos.push(prompt("Enter a new Todo: "));
    }
    else if (input === "delete") {
      var idx = prompt("Enter idx of todo to delete: ");
      todos.splice(idx, 1);
      console.log("Item deleted.");
    }
  }
  console.log("Quitted, lol.");
}, 500);