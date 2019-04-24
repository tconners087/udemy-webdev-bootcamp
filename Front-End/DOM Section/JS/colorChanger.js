var button = document.querySelector("button");
var body = document.querySelector("body");

button.addEventListener("click", () => {
  body.classList.toggle("bg-purple");
});
