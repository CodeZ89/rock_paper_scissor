let playerScore = 0;
let computerScore = 0;


const playerMoves = document.querySelectorAll('.playerMove');

playerMoves.forEach(playerMove => {
    const playerSelection = playerMove.getAttribute('data-move');
    playerMove.addEventListener('click', () => {
        playRound(playerSelection)
    });
});

function computerPlay() {
    let rps = ['rock', 'paper', 'scissor'];
    return rps[(Math.floor(Math.random() * rps.length))];
}

function playRound(playerSelection) {
    const computerSelection = computerPlay();
    if (playerSelection === 'rock' && computerSelection === 'scissor') {
        document.getElementById('scoreReport').innerText = 'Thor beats Loki! ' + ++playerScore + ' to ' + computerScore;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        document.getElementById('scoreReport').innerText = 'Odin beats Thor ' + playerScore + ' to ' + ++computerScore;
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        document.getElementById('scoreReport').innerText = `It's a tie! ` + playerScore + ' to ' + computerScore;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        document.getElementById('scoreReport').innerText = `Odin beat's Thor! ` + ++playerScore + ' to ' + computerScore;
    } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        document.getElementById('scoreReport').innerText = `Loki beats Odin ` + playerScore + ' to ' + ++computerScore;
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        document.getElementById('scoreReport').innerText = `It's a tie! ` + playerScore + ' to ' + computerScore;
    } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        document.getElementById('scoreReport').innerText = `Thor beats Loki ` + playerScore + ' to ' + ++computerScore;
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        document.getElementById('scoreReport').innerText = `Loki beats Odin! ` + ++playerScore + ' to ' + computerScore;
    } else if (playerSelection === 'scissor' && computerSelection === 'scissor') {
        document.getElementById('scoreReport').innerText = `It's a tie! ` + playerScore + ' to ' + computerScore;
    } else console.log('error');

    if (playerScore === 5) {
        alert('YOU WIN! ' + playerScore + ' to ' + computerScore);
        document.location.reload();

    } else if (computerScore === 5) {
        alert('YOU LOSE ' + playerScore + ' to ' + computerScore);
        document.location.reload();

    }
}



const battle = document.getElementById('theBattle');
battle.style.textAlign = 'center';
battle.style.font = '50px Impact, sans-serif';
battle.style.color = '#047E08'
battle.style.textShadow = '2px black';



const thor = document.getElementById('thor');
thor.style.height = '300px';
thor.style.display = 'flex';
thor.style.marginLeft = 'auto';
thor.style.marginRight = 'auto';
thor.style.outline = 'none';

const odin = document.getElementById('odin');
odin.style.height = '300px';
odin.style.display = 'flex';
odin.style.marginLeft = 'auto';
odin.style.marginRight = 'auto';
odin.style.outline = 'none';


const loki = document.getElementById('loki');
loki.style.height = '300px';
loki.style.display = 'flex';
loki.style.marginLeft = 'auto';
loki.style.marginRight = 'auto';
loki.style.outline = 'none';


const buttons = document.getElementById('buttons');
buttons.style.display = 'flex';
buttons.style.marginTop = '25px';
buttons.style.justifyContent = 'space-between';

const score = document.getElementById('scoreReport');
score.style.textAlign = 'center';
score.style.marginTop = '100px';
score.style.color = 'gold';
score.style.border = '4px solid white';
score.style.backgroundColor = 'black';
score.style.display = 'block'
score.style.width = '30%'
score.style.justifyContent = 'center';
score.style.marginLeft = 'auto';
score.style.marginRight = 'auto';
score.style.font = '30px Impact, sans-serif';

const character = document.getElementById('character');
character.style.display = 'flex';
character.style.marginLeft = 'auto';
character.style.marginRight = 'auto';
character.style.justifyContent = 'center';
character.style.font = '30px Impact, sans-serif';
character.style.color = '#F8610A'




const body = document.getElementById('body');
body.style.backgroundImage = `url('AsgardDarkWorld.png')`;
body.style.backgroundRepeat = 'no-repeat';











