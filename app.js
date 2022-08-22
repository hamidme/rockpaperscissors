const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors =  document.getElementById('scissors');
let userScore = document.getElementById('user-score');
let compScore = document.getElementById('comp-score');
let userDisplay = document.getElementById('user-display');
let compDisplay = document.getElementById('comp-display');
let message = document.querySelector('.message');
let modalBg = document.querySelector('.modal-bg');
let replayBtn = document.getElementById('replay');
let winningMessage = document.querySelector('.winning-message')


let userPlayCounter = 0;
let compPlayCounter = 0;

let userScoreCounter = 0;
let compScoreCounter = 0;

const objectList = ['rock', 'paper', 'scissors']

function selectObject(whatObject){

  let genRand = Math.floor(Math.random() * 3);
  let compDisplayObject = objectList[genRand]
  
  userDisplay.src = `images/${whatObject}.png`;
  compDisplay.src = `images/${compDisplayObject}.png`;

  if(compDisplayObject === `${whatObject}`){
    message.textContent = `It's a tie with ${whatObject}.`
  } else if (whatObject==='rock' && compDisplayObject === 'scissors'){
    message.textContent = `${whatObject} crushes scissors, you win`;
    userScore.textContent = userPlayCounter+=1;
    userScoreCounter+=1

  } else if (whatObject==='rock' && compDisplayObject === 'paper'){
    message.textContent = `paper covers ${whatObject}, you lose`;
    compScore.textContent = compPlayCounter+=1;
    compScoreCounter+=1
  
  } else if(whatObject==='paper' && compDisplayObject === 'rock'){
    message.textContent = `${whatObject} covers rock, you win`;
    userScore.textContent = userPlayCounter+=1;
    userScoreCounter+=1

  } else if (whatObject==='paper' && compDisplayObject === 'scissors'){
    message.textContent = `Scissors cuts ${whatObject}, you lose`;
    compScore.textContent = compPlayCounter+=1;
    compScoreCounter+=1

  } else if (whatObject==='scissors' && compDisplayObject === 'paper'){
    message.innerHTML = `${whatObject} cuts paper, you win`;
    userScore.textContent = userPlayCounter+=1;
    userScoreCounter+=1

  } else if(whatObject==='scissors' && compDisplayObject === 'rock') {
    message.textContent = `rock crushes ${whatObject}, you lose`;
    compScore.textContent = compPlayCounter+=1;
    compScoreCounter+=1
  }

  if(userScoreCounter === 5 || compScoreCounter === 5){
    if (userScoreCounter === 5){
      winningMessage.textContent = 'Congratulations, you win! Humans are save!'
      replay();
    } else{
      winningMessage.textContent = 'Oh no, you lose! Who will help defeat this beast?'
      replay();
    }
    modalBg.classList.remove('hidden')
  }
}

function replay(){
  compPlayCounter = 0;
  userPlayCounter = 0;
  userScoreCounter = 0;
  compScoreCounter = 0;
  userDisplay.src = `images/blank.png`;
  compDisplay.src = `images/blank.png`;
  compScore.textContent = compPlayCounter;
  userScore.textContent = userPlayCounter;
  message.textContent = '';
  modalBg.classList.add('hidden')
}

replayBtn.addEventListener('click',replay)

rock.addEventListener('click', function clickRock(){
  return selectObject('rock')
});

paper.addEventListener('click', function clickPaper(){
  return selectObject('paper')
});

scissors.addEventListener('click', function clickScissors(){
  return selectObject('scissors')
});



