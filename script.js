var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btnRandom = document.querySelector(".random-color");

//Show intial value of background
var background = window
  .getComputedStyle(body, null)
  .getPropertyValue("background-image");

css.textContent = background + ";";

//Colors background and show value
function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

//Random button
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function randomColor(a, b, c) {
  var a = getRandomInt(0, 256);
  var b = getRandomInt(0, 256);
  var c = getRandomInt(0, 256);
  return "rgb(" + a + ", " + b + ", " + c + ")";
}

function selectRandomColor(a, b, c, r1, r2) {
  var r1 = randomColor(a, b, c);
  var r2 = randomColor(a, b, c);
  body.style.background = "linear-gradient(to right, " + r1 + ", " + r2 + ")";
  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btnRandom.addEventListener("click", selectRandomColor);
