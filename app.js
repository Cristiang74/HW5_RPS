const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElemementById("user-score");
const computerScore_span = document.getElemementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice (){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function game(userChoice){
    const computerChoice = getComputerChoice();
}

function main();{
    rock_div.addEventListener('click', function(){
        console.log("hey you clicked on rock");
    })
    paper_div.addEventListener('click', function(){
        console.log("hey you clicked on paper");
    })
    scissors_div.addEventListener('click', function(){
        console.log("hey you clicked on scissors");
    })
}