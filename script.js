// Get the buttons and result element
const readyButton = document.querySelector('.READY');
const startButtons = document.querySelectorAll('.START');
const resultElement = document.querySelector('h3');

// Define the game logic
function playGame(userChoice) {
  const choices = ['STONE', 'PAPER', 'SCISSORS'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let result;
  if (userChoice === computerChoice) {
    result = 'TIE!';
  } else if ((userChoice === 'STONE' && computerChoice === 'SCISSORS') ||
             (userChoice === 'PAPER' && computerChoice === 'STONE') ||
             (userChoice === 'SCISSORS' && computerChoice === 'PAPER')) {
    result = 'YOU WIN!';
  } else {
    result = 'COMPUTER WINS!';
  }

  resultElement.textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
}

// Add event listeners to the buttons
readyButton.addEventListener('click', () => {
  // Reset the result element
  resultElement.textContent = '';
});

startButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const userChoice = event.target.textContent.trim().toUpperCase();
    playGame(userChoice);
  });
});
