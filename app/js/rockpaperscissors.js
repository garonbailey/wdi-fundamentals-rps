////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log('Please choose either \'rock\', \'paper\', or \'scissors\'.');
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return 'rock';
    } else if (randomNumber < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    var playerMove = getInput() || move;
    return playerMove;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    var computerMove = randomPlay() || move;
    return computerMove;
}

function getWinner(getPlayerMove, getComputerMove) {
    var computerMove = getComputerMove();
    var playerMove = getPlayerMove();
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove === computerMove) {
    	winner = 'tie';
    } else if (playerMove === 'rock' && computerMove === 'paper') {
    	winner = 'computer';
    } else if (playerMove === 'rock' && computerMove === 'scissors') {
    	winner = 'player';
    } else if (playerMove === 'paper' && computerMove === 'rock') {
    	winner = 'player';
    } else if (playerMove === 'paper' && computerMove === 'scissors') {
    	winner = 'computer';
    } else if (playerMove === 'scissors' && computerMove === 'rock') {
    	winner = 'computer';
    } else if (playerMove === 'scissors' && computerMove === 'paper') {
    	winner = 'player';
    } else {
    	winner = 'This didn\'t make sense to my silly computer brain!';
    }
    return winner;
}

function playToFive() {
    console.log('Let\'s play Rock, Paper, Scissors');
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < 5 && computerWins < 5) {
    	var winner = getWinner(getPlayerMove, getComputerMove);
    	if (winner === 'player') {
    		playerWins += 1;
    		console.log(winner + ' has won!');
    	} else if (winner === 'computer') {
    		computerWins += 1;
    		console.log(winner + ' has won!');
    	} else {
    		playerWins += 0;
    		computerWins += 0;
    		console.log("It's a tie!");
    	}
    	console.log('The current score is Player: ' + playerWins + ', Computer: ' + computerWins);
    }
    if (playerWins === 5) {
    	console.log('Game over! You win!');
    } else if (computerWins === 5) {
    	console.log('Game over! The computer wins!');
    }
    return [playerWins, computerWins];
}

playToFive();