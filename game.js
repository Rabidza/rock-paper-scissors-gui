const GAMEOVER = 5;
      let playerScore = 0;
      let computerScore = 0;

      function computerPlay() {
        const choices = ['Rock', 'Paper', 'Scissors'];
        let random = Math.floor(Math.random() * choices.length);
        computerSelection = choices[random];
        return computerSelection;
      }

      function playRound(playerSelection, computerSelection){
      let player = playerSelection.toString().toLowerCase();
      let computer = computerSelection.toString().toLowerCase();
        if (player == computer){
          console.log("You are tied!");
          return "You are tied!";
        }
        else if ((player === 'rock' && computer === 'scissors') ||
                (player === 'paper' && computer === 'rock') ||
                (player === 'scissors' && computer === 'paper')){
                  console.log("You win! " + playerSelection + " beats " + computerSelection)
                  return "You win! " + playerSelection + " beats " + computerSelection;
        }
        else if ((player === 'rock' && computer === 'paper') ||
                (player === 'paper' && computer === 'scissors') ||
                (player === 'scissors' && computer === 'rock') ) {
                  console.log("You lose! " + computerSelection + " beats " + playerSelection);
                  return "You lose! " + computerSelection + " beats " + playerSelection;
        }
      }

      function game(){
        let rounds = 5;
        let playerScore = 0;
        let computerScore = 0;
        while (rounds > 0){
          let playerChoice = prompt("Enter rock, paper or scissors").toLowerCase();
          while(playerChoice != 'rock' && playerChoice != 'scissors' && playerChoice != 'paper'){
          playerChoice = prompt("Please try again! Enter 'Rock', 'Paper' or 'Scissors'")
        }
        let computerChoice = computerPlay();
        round = playRound(playerChoice, computerChoice);
        if (round.indexOf("tied") !== -1){
          // Do nothing
        }
        else if(round.indexOf("win") !== -1){
          playerScore += 1;
        }
        else{
          computerScore += 1;
        }
        rounds--;
        }
        if (playerScore > computerScore){
          return "You win! " + playerScore + " to " + computerScore;
        }
        else if (playerScore == computerScore)
        {
          return "You are tied!";
        }
        else{
          return "You Lose! " + computerScore + " to " + playerScore;
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