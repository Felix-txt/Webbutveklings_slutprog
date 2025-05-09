// Hämta DOM-element
const players = document.querySelectorAll('.player');
const totalScores = document.querySelectorAll('.total-score');
const currentScores = document.querySelectorAll('.current-score');
const rollBtn = document.getElementById('roll-btn');
const holdBtn = document.getElementById('hold-btn');
const newGameBtn = document.getElementById('new-game-btn');
const diceImg = document.getElementById('dice');

let scores, currentScore, activePlayer, playing;

// Initiera spelet
function init() {
  scores = [0, 0]; // Totalpoäng för spelare 1 och 2
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  // Återställ poäng
  totalScores.forEach(score => score.textContent = 0);
  currentScores.forEach(score => score.textContent = 0);

  // Ta bort vinnare och aktiva klasser
  players.forEach((player, index) => {
    player.classList.remove('winner');
    if (index === 0) {
      player.classList.add('player--active');
    } else {
      player.classList.remove('player--active');
    }
  });

  // Dölj tärning
  diceImg.style.display = 'none';
  rollBtn.disabled = false;
  holdBtn.disabled = false;
}

// Byt spelare
function switchPlayer() {
  currentScore = 0;
  currentScores[activePlayer].textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  players.forEach(player => player.classList.toggle('player--active'));
}

// Kasta tärning
rollBtn.addEventListener('click', () => {
  if (!playing) return;

  const dice = Math.floor(Math.random() * 6) + 1;

  // Visa tärning
  diceImg.style.display = 'block';
  diceImg.src = `7469372.png`;

  if (dice === 1) {
    // Om 1 - förlora rundan
    currentScores[activePlayer].textContent = 0;
    switchPlayer();
  } else {
    // Addera till runda
    currentScore += dice;
    currentScores[activePlayer].textContent = currentScore;
  }
});

// Spara poäng
holdBtn.addEventListener('click', () => {
  if (!playing) return;

  // Lägg till till totalpoäng
  scores[activePlayer] += currentScore;
  totalScores[activePlayer].textContent = scores[activePlayer];

  // Kontrollera vinst
  if (scores[activePlayer] >= 50) {
    playing = false;
    players[activePlayer].classList.add('winner');
    players[activePlayer].querySelector('h2').textContent += ' ✅';
    rollBtn.disabled = true;
    holdBtn.disabled = true;
  } else {
    switchPlayer();
  }
});

// Starta nytt spel
newGameBtn.addEventListener('click', init);

// Initiera vid sidladdning
init();