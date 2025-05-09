const players = document.querySelectorAll('.player')
const totalscores = document.querySelectorAll('.totalscore')
const currentscores = document.querySelectorAll('.currentscore')
const sparabtn = document.getElementById('spara-btn')
const rullbtn = document.getElementById('rull-btn')
const newgame = document.getElementById('ny-btn')

function start(){

    scores = [0, 0];
    totalscores = 0;
    currentscores = 0;
    playing = true;

    currentscores.forEach(score => score.textContent = 0);
    totalscores.forEach(score => score.textContent = 0);


    players.forEach((players, index) => {
        players.classList.remove('winner');
        if (index === 0){
            players.classList.add('player--active');
        }
        else{
            players.classList.remive('player--active');
        }
    });

}

function bytspelare(){
    currentscores = 0;
    currentscores[activePlayer].textCpontent = currentscores;
    activePlayer = activePlayer === 0 ? 1 : 0;
    players.forEach(players => players.classList.toggle('player--active'));
}

rullbtn.addEventListener('click', () => {
    if (!playing) return;

    const tärning = Math.floor(Math.random() * 6) + 1;

    if (dice === 1){
        currentscores[activePlayer].textContent = 0;
        bytspelare(); 
    }
    else{
        currentscore =+ dice;
        currentscores[activePlayer.textContent = currentscores;]
    }
}