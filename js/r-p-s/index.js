const choices = document.querySelectorAll(".choice");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const result = document.querySelector(".result p");
const rounds = document.querySelector(".rounds");
const playerHand = document.querySelector(".player-hand i");
const computerHand = document.querySelector(".computer-hand i");
const resetBtn = document.querySelector(".reset-btn");

const INITIAL_ROUNDS = 10;
const gameState = {
  playerScore: 0,
  computerScore: 0,
  roundsLeft: INITIAL_ROUNDS,
};

const GAME_OPTIONS = {
  rock: "fa-hand-rock",
  paper: "fa-hand-paper",
  scissors: "fa-hand-scissors",
};

const WINNING_COMBINATIONS = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

function getComputerChoice() {
  const options = Object.keys(GAME_OPTIONS);
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function updateScore() {
  const { playerScore: pScore, computerScore: cScore, roundsLeft } = gameState;

  playerScore.textContent = pScore;
  computerScore.textContent = cScore;
  rounds.textContent = `남은 횟수: ${roundsLeft}`;

  updateWinnerHighlight(pScore, cScore);
}

function updateWinnerHighlight(pScore, cScore) {
  const scores = document.querySelectorAll(".score");
  scores.forEach((score) => score.classList.remove("winner"));

  if (pScore > cScore) {
    scores[0].classList.add("winner");
  } else if (cScore > pScore) {
    scores[1].classList.add("winner");
  }
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    result.className = "";
    return "무승부!";
  }

  if (WINNING_COMBINATIONS[playerChoice] === computerChoice) {
    gameState.playerScore++;
    result.className = "win-text";
    return "승리!";
  } else {
    gameState.computerScore++;
    result.className = "lose-text";
    return "패배!";
  }
}

function resetHands() {
  const handClasses = Object.values(GAME_OPTIONS);
  [playerHand, computerHand].forEach((hand) => {
    hand.classList.remove(...handClasses);
  });
}

function resetGame() {
  Object.assign(gameState, {
    playerScore: 0,
    computerScore: 0,
    roundsLeft: INITIAL_ROUNDS,
  });

  result.textContent = "선택하기";
  updateScore();

  [playerHand, computerHand].forEach((hand) => {
    hand.className = `far ${GAME_OPTIONS.rock} fa-5x`;
  });

  choices.forEach((choice) => {
    choice.classList.remove("disabled");
    choice.disabled = false;
  });

  initializeResultArea();
}

function initializeResultArea() {
  const resultDiv = document.querySelector(".result");
  resultDiv.innerHTML = `
    <p>선택하기</p>
    <p class="rounds">남은 횟수: ${INITIAL_ROUNDS}</p>
    <button class="reset-btn hidden">다시 시작하시겠습니까?</button>
  `;
}

function showFinalResult() {
  const { playerScore: pScore, computerScore: cScore } = gameState;
  const resultDiv = document.querySelector(".result");

  const resultMessages = {
    win: { text: "You Win! 🏆", class: "win" },
    lose: { text: "You Lose! 💔", class: "lose" },
    draw: { text: "Draw! 🤝", class: "" },
  };

  const result = pScore > cScore ? "win" : pScore < cScore ? "lose" : "draw";
  const { text, class: className } = resultMessages[result];

  resultDiv.innerHTML = `
    <p class="final-result ${className}">${text}</p>
    <p>최종 스코어: ${pScore} - ${cScore}</p>
  `;

  addResetButton(resultDiv);
  disableChoices();
}

function addResetButton(resultDiv) {
  const resetBtn = document.createElement("button");
  resetBtn.className = "reset-btn";
  resetBtn.textContent = "다시 시작하시겠습니까?";
  resetBtn.addEventListener("click", resetGame);
  resultDiv.appendChild(resetBtn);
}

function disableChoices() {
  choices.forEach((choice) => {
    choice.classList.add("disabled");
    choice.disabled = true;
  });
}

function playRound(playerChoice) {
  if (gameState.roundsLeft <= 0) return;

  gameState.roundsLeft--;

  updateHandIcons(playerChoice);
  addShakeAnimation();

  setTimeout(() => {
    processRoundResult(playerChoice);
  }, 500);
}

function updateHandIcons(playerChoice) {
  const computerChoice = getComputerChoice();
  updateHandIcon(playerHand, playerChoice);
  updateHandIcon(computerHand, computerChoice);
  return computerChoice;
}

function addShakeAnimation() {
  playerHand.parentElement.classList.add("shake");
  computerHand.parentElement.classList.add("shake-computer");
}

function processRoundResult(playerChoice) {
  const computerChoice = getComputerChoice();
  const gameResult = determineWinner(playerChoice, computerChoice);

  result.textContent = gameResult;
  updateScore();
  resetHands();

  if (gameState.roundsLeft === 0) {
    setTimeout(showFinalResult, 1000);
  }
}

function updateHandIcon(element, choice) {
  const handClasses = Object.values(GAME_OPTIONS);
  element.classList.remove(...handClasses);
  element.classList.add(GAME_OPTIONS[choice]);

  // 가위 아이콘일 경우 scissors-icon 클래스 추가
  if (choice === "scissors") {
    element.classList.add("scissors-icon");
  } else {
    element.classList.remove("scissors-icon");
  }
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => playRound(choice.dataset.choice));
});

[playerHand, computerHand].forEach((hand) => {
  hand.addEventListener("animationend", function () {
    this.parentElement.classList.remove("shake", "shake-computer");
  });
});

resetBtn?.addEventListener("click", resetGame);
