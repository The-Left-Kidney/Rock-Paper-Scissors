let user_score = 0;
let computer_score = 0;
const userScore_span = document.getElementById("user_score");
const computerScore_span = document.getElementById('computer_score');
const scoreBoard_div = document.querySelector("score_board");
const result_div = document.querySelector("results");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const pId = document.getElementById("round_info");




function getComputerChoice() {

  const choices = ["r","p","s"];
const randomNumber = Math.floor(Math.random()*3);

return choices[randomNumber];
}


function win(user, computer){
user_score++;
console.log("win");
userScore_span.innerHTML = user_score;
computerScore_span.innerHTML = computer_score;
document.getElementById("p1").innerHTML = "YOU WIN !!!";
}

function lose(){
console.log("lose");
computer_score++;
computerScore_span.innerHTML = computer_score
document.getElementById("p1").innerHTML = "YOU LOSE";
}

function tie(){
console.log("Tie");
document.getElementById("p1").innerHTML = "ITS A DRAW";
computer_score++;
user_score++;
userScore_span.innerHTML = user_score;
computerScore_span.innerHTML = computer_score;
}



 function game(choice) {
const computerChoice = getComputerChoice();

switch (choice + computerChoice){
case "rp":
case "pr":
case "sp":
    win(choice,computerChoice);
break;
  case "pr":
  case "ps":
  case "sr":
    lose(choice,computerChoice);
break;
   case "rr":
   case "pp":
   case "ss":
  tie(choice,computerChoice);
break;
  }
}











function main(){

  rock_div.addEventListener("click",function() { game("r");
 })

  paper_div.addEventListener("click",function() {game("p");
 })

  scissors_div.addEventListener("click",function(){game("s");
 })

  }
getComputerChoice();
main();
