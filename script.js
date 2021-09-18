let playerScore = 0;
let aiScore = 0;

function computerPlay() {
    const buttons = document.querySelectorAll('.computer .buttons');
    let randomSelection = Math.floor(Math.random()*3);
    const selectionList = ["rock", "paper", "scissors"];

    buttons.forEach(button => {
        if (button.classList.contains('selected')) {
            button.classList.remove('selected')
        }
        if (button.name == selectionList[randomSelection]) {
            button.classList.add('selected')
        }
    })

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
        updateScore('player');
        return "You win! Computer picked scissors"
    }
    if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        updateScore('player');
        return "You win! Computer picked rock"
    }
    if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        updateScore('player');
        return "You win! Computer picked paper"
    }

    if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        updateScore('ai');
        return "You lose! Computer picked paper"
    }
    if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        updateScore('ai');
        return "You lose! Computer picked scissors"
    }
    if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        updateScore('ai');
        return "You lose! Computer picked rock"
    }
}

const buttons = document.querySelectorAll('.player .buttons');
buttons.forEach(button => button.addEventListener('click', function(e) {
    console.log(playRound(e.target.name,computerPlay()));
}));

// Update the score for player or ai
function updateScore(x) {
    if (x == "player") {
        playerScore += 1;
        const score = document.querySelector('.score #player');
        score.textContent = playerScore;
    } else if (x == "ai") {
        aiScore += 1;
        const score = document.querySelector('.score #ai');
        score.textContent = aiScore;
    }
}


