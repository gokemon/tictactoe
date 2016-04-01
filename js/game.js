

$(document).ready(function(){

	var $gameCells = $('.cell');
	var moves = Array(9).join(".").split(".");
	var count = 0;

	$($gameCells).one('click', function(){
		count++;
		moves[this.id] = this.id;
		console.log(moves, count);

	 })
	

  });