
  
let playerScore = 0
let cpuScore = 0

function computerPlay() {
  cpuChoice = Math.floor(Math.random() * choices.length);
  cpuSelection = choices[cpuChoice];
  console.log(cpuChoice);
  console.log(cpuSelection);
  return cpuSelection
};

function playOneRound(p1selection, cpuSelection) {
  choices = ['ROCK', 'PAPER', 'SCISSORS'];
  // playerChoice = prompt('Enter selection.').toUpperCase();
  console.log(`you choose ${p1selection}`)

  


  if (playerChoice === cpuSelection) {
    console.log('Draw');
    
  } else if (playerChoice === 'ROCK' && cpuSelection === 'SCISSORS') {
    console.log('you win!');
    ++playerScore;
    console.log(`p1 ${playerScore} - cpu ${cpuScore}`)
    
  } else if (playerChoice === 'SCISSORS' && cpuSelection === 'PAPER') {
    console.log('you win');
    ++playerScore;
    console.log(`p1 ${playerScore} - cpu ${cpuScore}`)
    
  } else if (playerChoice === 'PAPER' && cpuSelection === 'ROCK') {
    console.log('you win');
    ++playerScore;
    console.log(`p1 ${playerScore} - cpu ${cpuScore}`)
    
  } else {
    console.log('You lose');
    ++cpuScore;
    console.log(`p1 ${playerScore} - cpu ${cpuScore}`)
    
  }
}




document.getElementById('rock').addEventListener('click', playOneRound('ROCK'));

document.getElementById('scissors').addEventListener('click', playOneRound('SCISSORS'));

if (playerScore >= 5) {
console.log('You Win 5 sets!');
}


