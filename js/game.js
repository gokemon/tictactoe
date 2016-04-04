$(document).ready(function(){
	var gameCounter = 0;








  });


//=======================================================================
	var gameCells = $('.cell');
	var gameMoves = Array(9).join(".").split(".");

	$(gameCells).one('click', function(){
		gameCounter++; // increaase before loop
		gameMoves[this.id] = this.id;
		console.log(gameMoves, gameCounter);
	 })


//==========================================================================
$(document).ready(function(){​
	var $gameCells = $('.cell');
	var moves = ["","","","","","","","",""];
	var count = 0;
	var turn = 'X';
	

	$($gameCells).one('click', function(){
		$(this).html(turn);
		moves[this.id] = turn;
		count++;// increaase after
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

