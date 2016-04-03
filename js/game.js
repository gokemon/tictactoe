$(document).ready(function(){

	var gameCells = $('.cell');
	var gameMoves = Array(9).join(".").split(".");
	var gameCounter = 0;


	$(gameCells).one('click', function(){
		gameCounter++;
		gameMoves[this.id] = this.id;
		console.log(gameMoves, gameCounter);
	 })

  });

//==========================================================================
$(document).ready(function(){​
	var $gameCells = $('.cell');
	var moves = ["","","","","","","","",""];
	var count = 0;
	var turn = 'X';
	
	$($gameCells).one('click', function(){
		$(this).html(turn);
		moves[this.id] = turn;
​
		count++;
​
		turn = (turn == 'X') ? 'O' : 'X';
		
		// if (count % 2 == 0){
		// 	turn = 'X';
		// } else {
		// 	turn = 'O';
		// }
​
		console.log(moves, count, turn);
	});
});