
// define variable
let userScore = 0;
let computerScore = 0;

// define variable and get html variable
const userScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("computerScore");

const score_borad_div = document.querySelector("score-borad");
const result1 = document.querySelector("h2");

let userInput = document.querySelector("h3");
let computerInput = document.querySelector("h4");

const stone_btn = document.getElementById("r");
const paper_btn = document.getElementById("p");
const scissor_btn = document.getElementById("s");

// functions

// function for Computer choice / Random No.
function getComputerChoice(computerChoice) {
    let Choice = ['r', 'p', 's'];
    const randomNo = (Math.floor(Math.random() * 3));
    return Choice[randomNo];
}

// function for get User choice 
function game(userChoice){
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice){
        case ("sp"):
        case ("pr"):
        case ("rs"):
            win(userChoice, computerChoice );
            break;
        case ("sr"):
        case ("ps"):
        case ("rp"):
            lose(userChoice, computerChoice );
            break;
        case ("rr"):
        case ("ss"):
        case ("pp"):
            draw(userChoice, computerChoice );
            break;          
    }
}

function convertWord(letter){
    if (letter == 'r') return "Rock";
    if (letter == 'p') return "Paper";
    return "Scissor";
}

function win(userChoice, computerChoice ) {
    userScore++;
    userScore_span.innerHTML = userScore;
    userInput.innerHTML = convertWord(userChoice);
    computerInput.innerHTML = convertWord(computerChoice);
    result1.innerHTML =" Your Winner..." ;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')}, 1000);
}
function lose(userChoice, computerChoice){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userInput.innerHTML = convertWord(userChoice);
    computerInput.innerHTML = convertWord(computerChoice);
    result1.innerHTML = " Your Lose..." ;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')}, 1000);
}
function draw(userChoice, computerChoice){
    computerInput.innerHTML = convertWord(computerChoice);
    userInput.innerHTML = convertWord(userChoice);
    result1.innerHTML = " Drop Down....." ;
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('grey-glow')}, 1000);
}

// function for click on button p rform 
stone_btn.addEventListener('click', function(){
    game("r");
})

paper_btn.addEventListener('click', function(){
    game("p");
})

scissor_btn.addEventListener('click', function(){
    game("s");
})

//  console.log("User : "+userChoice);
  // console.log("Computer : "+computerChoice);

/**
  case "r":
            console.log("Stone");
            break;
        case "p":
            console.log("Paper");
            break;
        case "s":
            console.log("Scissor");
            break;
 */

/*
console.log("user win");
            userCount = userCount + 1;
            console.log(userCount);

console.log("computer win");
            computerCount = computerCount + 1 ;
            console.log(computerCount);

console.log("draw");
            computerCount = computerCount + 1 ;
            console.log("computer"+computerCount);
            userCount = userCount + 1;
            console.log("user"+userCount);
*/