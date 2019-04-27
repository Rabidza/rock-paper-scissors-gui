let playerScore = 0;
let computerScore = 0;
const TOWIN = 5;

function computerPlay() {
  const choices = ['ROCK', 'PAPER', 'SCISSORS'];
  let random = Math.floor(Math.random() * choices.length);
  computerSelection = choices[random];
  return computerSelection;
}

function playRound(playerSelection, computerSelection){
  let player = playerSelection;
  let computer = computerSelection;
  displayScore();
  if (player === computer){
    score();
    return "You are tied!";
  }
  else if ((player === 'ROCK' && computer === 'SCISSORS') ||
           (player === 'PAPER' && computer === 'ROCK') ||
           (player === 'SCISSORS' && computer === 'PAPER')){
            score("player");
            displayScore();
            return "You win! " + playerSelection + " beats " + computerSelection;
  }
  else if ((player === 'ROCK' && computer === 'PAPER') ||
           (player === 'PAPER' && computer === 'SCISSORS') ||
           (player === 'SCISSORS' && computer === 'ROCK') ) {
            score("computer")
            displayScore();
            return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}

function score(player){
  if (player === "player") return playerScore += 1;
  else if (player === "computer")return computerScore += 1;
}

function determineWinner(playerScore, computerScore)
{
  if (playerScore > computerScore) return "You win! " + playerScore + " to " + computerScore;
  else return "You Lose! " + computerScore + " to " + playerScore;
}

function displayScore(){
  playerTotal.textContent = "Player Score: " + playerScore;
  computerTotal.textContent = "Computer Score: " + computerScore;
  finalResult.textContent = "";
  if (playerScore == 5 || computerScore == 5)
  {
    finalResult.textContent = determineWinner(playerScore, computerScore);
    playerScore = 0;
    computerScore = 0;
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach(function(btn){
  btn.addEventListener("click", function(e){
    let playerSelection = e.target.id;
    let computerSelection = computerPlay();
    resultDiv.textContent = playRound(playerSelection, computerSelection);
  });
});

const results = document.querySelector("#results");
const resultDiv = document.createElement("div");      
results.append(resultDiv);

const playerTotal = document.getElementById('playerTotal');
const computerTotal = document.getElementById('computerTotal');
const finalResult = document.getElementById('finalResult');
