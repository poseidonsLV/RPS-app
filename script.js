const items = document.querySelectorAll(".choose-item");
const playerScore = document.querySelector(".score-player");
const robotScore = document.querySelector(".score-robot");
const choosesDiv = document.querySelector(".chooses");
const fighting = document.querySelector(".chooses-fighting");
const fightingImgs = document.querySelectorAll("#fighting-img");
const winnerText = document.querySelector(".winner-side-text");
const playAgainButton = document.querySelector(".play-again-btn");

let playerChoose = "";
let robotChoose = "";
let playerWins = 0;
let robotWins = 0;
let playing = false;

items.forEach((item) => {
  item.addEventListener("click", () => {
    playerChoose = item.id;
    robotChoosing();
    if (playerChoose.length > 1 && robotChoose.id.length > 1) {
      playing = true;
      if (playing === true) {
        choosesDiv.classList.add("hide");
        fightingScreenShow(item.src, robotChoose.src, item.id, robotChoose.id);
        checkWinner(playerChoose, robotChoose);
        playerScore.innerText = playerWins;
        robotScore.innerText = robotWins;
        playAgainButton.addEventListener("click", () => {
          playing = false;
          fightingScreenHide();
        });
      }
    }
  });
});

function robotChoosing() {
  let randomChoose = Math.floor(Math.random() * items.length);
  if (playerChoose.length > 1) {
    return (robotChoose = items[randomChoose]);
  }
}

function checkWinner(player, robot) {
  if (player === robot.id) {
    ++playerWins;
    ++robotWins;
    winnerText.innerText = "Draw!";
  } else if (player == "rock" && robot.id == "scissors") {
    ++playerWins;
    winnerText.innerText = "Player won!";
  } else if (player == "paper" && robot.id == "rock") {
    ++playerWins;
    winnerText.innerText = "Player won!";
  } else if (player == "scissors" && robot.id == "paper") {
    ++playerWins;
    winnerText.innerText = "Player won!";
  } else if (player == "paper" && robot.id == "scissors") {
    ++robotWins;
    winnerText.innerText = "Robot won!";
  } else if (player == "scissors" && robot.id == "rock") {
    ++robotWins;
    winnerText.innerText = "Robot won!";
  } else if (player == "rock" && robot.id == "paper") {
    ++robotWins;
    winnerText.innerText = "Robot won!";
  }
}

function fightingScreenShow(playerSrc, robotSrc, playerColor, robotColor) {
  fighting.classList.add("show");
  fightingImgs[0].src = playerSrc;
  fightingImgs[1].src = robotSrc;
  fightingImgs[0].classList.add(playerColor);
  fightingImgs[1].classList.add(robotColor);
}
function fightingScreenHide() {
  fightingImgs[0].setAttribute("class", "fighting-left");
  fightingImgs[1].setAttribute("class", "fighting-right");
  choosesDiv.classList.remove("hide");
  fighting.classList.remove("show");
  fightingImgs[0].src = "";
  fightingImgs[1].src = "";
}
