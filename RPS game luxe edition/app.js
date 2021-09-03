let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user_score");
const computerScore_span = document.getElementById("computer_score");
const scoreBoard_div =document.querySelector(".score_board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

const smalluser="user".fontsize(4).sub();
const smallcomp="comp".fontsize(4).sub();


function convertToWord(letter){
	if(letter=="r") return "Rock";
	if(letter=="p") return "Paper";
	return "Scissors";
}


function draw(userChoice, computerChoice){
	const userChoice_div = document.getElementById(userChoice);
	userScore_span.innerHTML= userScore;
	computerScore_span.innerHTML= computerScore;
	result_div.innerHTML=`${convertToWord(userChoice)}${smalluser}. ${convertToWord(computerChoice)}${smallcomp}. Its a draw`;
	userChoice_div.classList.add('gray_glow');
	setTimeout(function() {userChoice_div.classList.remove('gray_glow')}, 500);
}

function win(userChoice, computerChoice){
	const userChoice_div = document.getElementById(userChoice);
	userScore++;
	userScore_span.innerHTML= userScore;
	computerScore_span.innerHTML= computerScore;
	result_div.innerHTML=`${convertToWord(userChoice)}${smalluser} beats ${convertToWord(computerChoice)}${smallcomp}. YOU WIN!`;
	userChoice_div.classList.add('green_glow');
	setTimeout(function() {userChoice_div.classList.remove('green_glow')}, 500);
 
}

// setTimeout(function() {console.log("hello")},3000);

function lose(userChoice, computerChoice){
	const userChoice_div = document.getElementById(userChoice);
	computerScore++;
	userScore_span.innerHTML= userScore;
	computerScore_span.innerHTML= computerScore;
	result_div.innerHTML=`${convertToWord(computerChoice)}${smallcomp} beats ${convertToWord(userChoice)}${smalluser}. YOU LOSE!`;
	userChoice_div.classList.add('red_glow');
	setTimeout(function() {userChoice_div.classList.remove('red_glow')}, 500);

}

function getComputerChoice(){
	const choices = ['r','p','s'];
	const randomNumber=(Math.floor(Math.random()*3));
	return choices[randomNumber];

}


function game(userChoice) {
	const computerChoice=getComputerChoice();
	switch(userChoice+computerChoice) {
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, computerChoice);
			break;
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, computerChoice);
			break;
	}
}


function main(){
rock_div.addEventListener('click',function() {
	game("r");
})

paper_div.addEventListener('click',function() {
	game("p");
})

scissors_div.addEventListener('click',function() {
	game("s");
})

}


main();










