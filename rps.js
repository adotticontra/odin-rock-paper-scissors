let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let options = ['Rock', 'Paper', 'Scissors'];
    let choice = Math.floor(Math.random() * 3);
    return options[choice];
}

function playRound(player, computer) {
    if(player === computer) {
        return 0;
    } else if(
        (computer === 'Rock' && player === 'Paper')
            || (computer === 'Paper' && player == 'Scissors')
            || (computer === 'Scissors' && player == 'Rock')
        ) {
        return 1;
    } else {
        return -1;
    }
}

function game() {
    for(let i = 0; i < 5; i++) {
        let computer = getComputerChoice();
        let player = window.prompt('Rock, Paper, Scissors?');
        player = player.charAt(0).toUpperCase() + player.slice(1)
        let result = playRound(player, computer);
        if(result === 0) {
            console.log('Tie round!');
        } else if(result === 1) {
            humanScore++;
            console.log('You Win! ' + player + ' beats ' + computer);
        } else {
            computerScore++;
            console.log('You loose! ' + computer + ' beats ' + player);
        }
    }
    let message = 'Human scores ' + humanScore + ' and Computer scores ' + computerScore;
    if(humanScore === computerScore) {
        console.log('No winner! ' + message);
    } else if (humanScore > computerScore) {
        console.log('Human wins! ' + message);
    } else {
        console.log('Computer wins! ' + message);
    }
}

addEventListener('load', (event) => {
    game();
});
