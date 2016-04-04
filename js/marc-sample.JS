$(document).ready(function(){
 	var gameCounter = 0;
 ​
 	var $gameCells = $('.cell');
 	var gameMoves = ["","","","","","","","",""];
 	var turn = 'X';
	

 	$($gameCells).one('click', function(){
 		$(this).html(turn);
 		gameMoves[this.id] = turn; ​
 		gameCounter++;
 ​
 		turn = (turn == 'X') ? 'O' : 'X';		
 		 if (gameCounter % 2 == 0){
 		 	turn = 'X';
 		 } else {
 		 	turn = 'O';
 		 }
 ​
 		console.log(gameMoves, gameCounter, turn);
 	});


 });