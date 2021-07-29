function game() {
  
  let playerScore = 0
  let cpuScore = 0

  function playOneRound() {
    choices = ['ROCK', 'PAPER', 'SCISSORS'];
    playerChoice = prompt('Enter selection.').toUpperCase();
    console.log(`you choose ${playerChoice}`)

    cpuChoice = Math.floor(Math.random() * choices.length);
    cpuSelection = choices[cpuChoice];
    console.log(cpuChoice);
    console.log(cpuSelection);

    if (playerChoice === cpuSelection) {
      console.log('Draw');
      playOneRound()
    } else if (playerChoice === 'ROCK' && cpuSelection === 'SCISSORS') {
      console.log('you win!');
      ++playerScore;
      console.log(`p1 ${playerScore} - cpu ${cpuScore}`)
      playOneRound()
    } else if (playerChoice === 'SCISSORS' && cpuSelection === 'PAPER') {
      console.log('you win');
      ++playerScore;
      console.log(`p1 ${playerScore} - cpu ${cpuScore}`)
      playOneRound()
    } else if (playerChoice === 'PAPER' && cpuSelection === 'ROCK') {
      console.log('you win');
      ++playerScore;
      console.log(`p1 ${playerScore} - cpu ${cpuScore}`)
      playOneRound()
    } else {
      console.log('You lose');
      ++cpuScore;
      console.log(`p1 ${playerScore} - cpu ${cpuScore}`)
      playOneRound()
    }
  }

  playOneRound();

}

if (playerScore >= 5) {
  console.log('You Win 5 sets!');
}

game();
