"use strict";

let randomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("No value");
  } else if (guess === randomNumber) {
    displayMessage("You are correct!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = randomNumber + "!";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (score > 1) {
    guess > randomNumber
      ? displayMessage("too high")
      : displayMessage("too low");
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    score--;
    displayMessage("You're lose ! :( ");
    document.querySelector(".score").textContent = 0;
    document.querySelector("body").style.backgroundColor = "#EB0000";
    document.querySelector(".number").textContent = ":(";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20 + 1);

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
