let playerScore = 0;
let compScore = 0;
const playerScore_span = document.getElementById("player-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const stone_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
// const myForm_form = document.forms.myForm;

function compChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = [Math.floor(Math.random() * 3)];
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "ROCK";
  if (letter === "p") return "PAPER";
  return "SCISSOR";
}

// function pointSelection(myForm_form) {
//   myForm.onsubmit = () => {
//     selectedPoints = myForm_form.points.value;
//     return selectedPoints;
//   };
// }

function end() {
  result_div.innerHTML = "Game ends here. Thank You!!!!";
}

function win(user, computer) {
  if (playerScore === 10 || compScore === 10) {
    playerScore = 0;
    compScore = 0;
    end();
  } else {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML =
      convertToWord(user) + " beats " + convertToWord(computer) + ". You win!";
    document.getElementById(user).classList.add("green-glow");
    setTimeout(
      () => document.getElementById(user).classList.remove("green-glow"),
      980
    );
  }
}

function lose(user, computer) {
  if (playerScore === 10 || compScore === 10) {
    playerScore = 0;
    compScore = 0;
    end();
  } else {
    compScore++;
    playerScore_span.innerHTML = playerScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML =
      convertToWord(user) + " loses " + convertToWord(computer) + ". You lost!";
    document.getElementById(user).classList.add("red-glow");
    setTimeout(
      () => document.getElementById(user).classList.remove("red-glow"),
      980
    );
  }
}

function tie(user, computer) {
  if (playerScore === 10 || compScore === 10) {
    playerScore = 0;
    compScore = 0;
    end();
  } else {
    result_div.innerHTML = `${convertToWord(user)} equals to ${convertToWord(
      computer
    )}. The game is tie!`;
    document.getElementById(user).classList.add("orange-glow");
    setTimeout(
      () => document.getElementById(user).classList.remove("orange-glow"),
      980
    );
  }
}

function game(userChoice) {
  const computerChoice = compChoice();
  switch (userChoice + computerChoice) {
    case "pr":
    case "rs":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      tie(userChoice, computerChoice);
      break;
  }
}

function main() {
  stone_div.addEventListener("click", () => game("r"));

  paper_div.addEventListener("click", () => game("p"));

  scissor_div.addEventListener("click", () => game("s"));
}

main();
