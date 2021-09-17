function computerPlay() {
    let randomSelection = Math.floor(Math.random()*3);
    const selectionList = ["rock", "paper", "scissors"]
    return selectionList[randomSelection];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "rock") {
        return "TIE! Both of you chosen rock"
    }
    if (playerSelection.toLowerCase() == "paper" && computerSelection == "paper") {
        return "TIE! Both of you chosen paper"
    }
    if (playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors") {
        return "TIE! Both of you chosen scissors"
    }

    if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        return "You win! Computer picked scissors"
    }
    if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        return "You win! Computer picked rock"
    }
    if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        return "You win! Computer picked paper"
    }

    if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        return "You lose! Computer picked paper"
    }
    if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        return "You lose! Computer picked scissors"
    }
    if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        return "You lose! Computer picked rock"
    }
}

function playerSelection() {
    let playerChosen = prompt("Rock, Paper or Scissors?");
    return playerChosen;
}

function gameLoop() {
    let round = 1;
    while (round <= 5) {
        console.log(playRound(playerSelection(), computerPlay()));
        round += 1;
    }
}

gameLoop();
