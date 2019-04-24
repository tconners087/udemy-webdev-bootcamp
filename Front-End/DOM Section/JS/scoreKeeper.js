var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var rsButton = document.querySelector("#rs");
var numInput = document.querySelector("input[type='number']");

var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2display");
var scDisplay = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;
var max = 5;

numInput.value = max;

var gameOver = false;

function reset() {
  p1Score = 0;
  p2Score = 0;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  gameOver=false;
}

p1Button.addEventListener("click", () => {
  if(!gameOver) {
    p1Score++;
    if(p1Score === max) {
      gameOver = true;
      p1Display.classList.add("winner");
    }
      
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", () => {
  if(!gameOver) {
    p2Score++;
    if(p2Score === max) {
      gameOver = true;
      p2Display.classList.add("winner");
    }
    p2Display.textContent = p2Score;
  }
});

rsButton.addEventListener("click", () => {
  reset();
});

numInput.addEventListener("change", () => {
  reset();
  scDisplay.textContent = numInput.value;
  max = Number(numInput.value);
})