let player1 = 'player1';
let player2 = 'player2';

let currentscore1 = 0;
let currentscore2 = 0;

let totalscore1 = 0;
let totalscore2 = 0;

// Fixat: Lagt till 'let' som saknades i variabeldeklarationen
let startspelare = player1;

function bytspelare() { // Här är funktionen för att byta spelare och den även byter förgen här för vilket spelare det är som börjar
    startspelare = startspelare === player1 ? player2 : player1;
    if (startspelare === player2) {
        document.getElementById('player-2').classList.remove('player--inactiv');
        document.getElementById('player-2').classList.add('player--active');
        document.getElementById('player-1').classList.remove('player--active');
        document.getElementById('player-1').classList.add('player--inactiv');
    } else {
        document.getElementById('player-1').classList.remove('player--inactiv');
        document.getElementById('player-1').classList.add('player--active');
        document.getElementById('player-2').classList.remove('player--active');
        document.getElementById('player-2').classList.add('player--inactiv');
    }
}

function tarning(){ // Här rullar den tärnignen
    const tarningsnumer = Math.floor(Math.random()*6)+1;
    // Fixat: Lagt till visning av tärningsresultat
    document.getElementById('markor').textContent = `Tärningen visar: ${tarningsnumer}`;
    
    if (tarningsnumer === 1){
        if (startspelare === player1){
            currentscore1 = 0;
            bytspelare()
        }
        else{
            currentscore2 = 0;
            bytspelare()
        }
    }
    else{
        adderapoints(tarningsnumer);
    }
    ScoreUI();
}

function adderapoints(tarningsnumer){ // Här adderar den allt 
    if(startspelare === player1){
        currentscore1 += tarningsnumer;
    }
    else{
        currentscore2 += tarningsnumer;
    }
    ScoreUI();
}

function ScoreUI(){ // Här lägger den in allt i spelet
    document.getElementById('current-1').textContent = currentscore1;
    document.getElementById('current-2').textContent = currentscore2;
    document.getElementById('score-1').textContent = totalscore1;
    document.getElementById('score-2').textContent = totalscore2;
}

function sparascore(){ // här spara den current score till total score
    if(startspelare === player1){
        totalscore1 += currentscore1;
        currentscore1 = 0;
    }
    else{
        totalscore2 += currentscore2;
        currentscore2 = 0;
    }
    ScoreUI();
    bytspelare();
    winnare();
}

function winnare(){ // här kollar den om det finns en vinnare
    if(totalscore1 >= 100){
        alert('Spelare1 vann!');
        startaom(); // Fixat: Startar om spelet automatiskt efter vinst
    }
    else if(totalscore2 >= 100){
        alert('Spelare2 vann!');
        startaom(); // Fixat: Startar om spelet automatiskt efter vinst
    }
}

function startaom(){ // här ska den starta om spelet om man klickar på starta om knappen
    currentscore1 = 0;
    currentscore2 = 0;
    totalscore1 = 0;
    totalscore2 = 0;
    startspelare = player1;

    // Fixat: Återställer spelarstatus vid nytt spel
    document.getElementById('player-1').classList.remove('player--inactiv');
    document.getElementById('player-1').classList.add('player--active');
    document.getElementById('player-2').classList.remove('player--active');
    document.getElementById('player-2').classList.add('player--inactiv');
    
    document.getElementById('current-1').textContent = 0;
    document.getElementById('current-2').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('score-2').textContent = 0;
    document.getElementById('markor').textContent = ''; // Rensar tärningsvisningen
}

// Dem kollar om man har klickat på knapparna och säger vad knapparna ska göra
document.getElementById('rull-btn').addEventListener('click', tarning)
document.getElementById('spara-btn').addEventListener('click', sparascore)
document.getElementById('ny-btn').addEventListener('click', startaom)

// Musikhantering
const backgroundMusic = document.getElementById('backgroundMusic');
const musicToggle = document.getElementById('musicToggle');

// Starta musiken
document.addEventListener('DOMContentLoaded', function() {
    backgroundMusic.volume = 0.3;
    backgroundMusic.play().catch(error => {
        console.log("Automatisk uppspelning blockerad:", error);
        musicToggle.textContent = "Spela musik";
    });
});

// Knapp för att spela/pausa
musicToggle.addEventListener('click', function() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        this.textContent = "Stäng av musik";
    } else {
        backgroundMusic.pause();
        this.textContent = "Spela musik";
    }
});