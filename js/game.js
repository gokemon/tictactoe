

$(document).ready(function(){
//old// console.log("loaded");
	//old// $('#gameboard').on('click', function(){
	//old// 	console.log("Board Clicked!");
	//old// })

	var $gameCells = $('.cell');
	//var moves = ["", "", "", "", "", "", "", "", ""];
	var moves = Array(9).join(".").split(".");
	var count = 0;

	$($gameCells).one('click', function(){

		count++;
		//console.log(this.id);
		moves[this.id] = this.id;
		console.log(moves, count);

	 })
	
	// klcvnxclvjlcjvhdv
	// sd
	// sdkvsdlkvhslkvhSD
	// FSdfS
	// DFKSDFKL



  });