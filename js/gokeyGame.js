$(document).ready(function(){
    var gameCounter=0;
    

    $('#gameBoard').find('.cell').on('click', function(){ // change onclick to one click later
        if (gameCounter % 2 === 0){
            $(this).text('X'); 
            checkVictory('X');
        } else {
        ///player 2's turn (O)
            $(this).text('O');
            checkVictory('O');
        }
        gameCounter++;          
    });// onClick game loop
     
    

    function checkVictory(player){
        ///top row check
        if ($('#gameBoard').find('#0').text() !== ''){
            if ($('#gameBoard').find('#0').text() == $('#gameBoard').find('#1').text()) {
                if ($('#gameBoard').find('#0').text() == $('#2').text()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }//top row check        

            ///left column check
            if ($('#gameBoard').find('#0').text() == $('#gameBoard').find('#3').text()) {
                if ($('#gameBoard').find('#0').text() == $('#6').text()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }//left column check

            ///left diagonal check
            if ($('#gameBoard').find('#0').text() == $('#gameBoard').find('#4').text()) {
                if ($('#gameBoard').find('#0').text() == $('#8').text()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            } //left diagonal check   
        } // position 1 checks
        

       ///middle column check
        if ($('#gameBoard').find('#1').text() !== ''){
            if ($('#gameBoard').find('#1').text() == $('#gameBoard').find('#4').text()) {
                if ($('#gameBoard').find('#1').text() == $('#7').text()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                } 
            } //middle column check
        } // position 2 checks
        

        ///right column check
        if ($('#gameBoard').find('#2').text() !== ''){
            if ($('#gameBoard').find('#2').text() == $('#gameBoard').find('#5').text()) {
                if ($('#gameBoard').find('#2').text() == $('#8').text()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }//right column check

            ///right diag check
            if ($('#gameBoard').find('#2').text() == $('#gameBoard').find('#4').text()) {
                if ($('#gameBoard').find('#2').text() == $('#6').text()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }//right diag check
        } // position 3 checks
        

        ///middle row check        
        if ($('#gameBoard').find('#3').text() !== ''){
            if ($('#gameBoard').find('#3').text() == $('#gameBoard').find('#4').text()) {
                if ($('#gameBoard').find('#3').text() == $('#5').text()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }//middle row check
        } // position 4 checks
        

        ///bottom row check
        if ($('#gameBoard').find('#6').text() !== ''){
            if ($('#gameBoard').find('#6').text() == $('#gameBoard').find('#7').text()) {
                if ($('#gameBoard').find('#6').text() == $('#8').text()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }//bottom row check
        } // position 6 checks
    }//checkVictory
    // do I want to add an outer loop that says, if all spaces were taken and no win was found that its a draw game?
    //a simple if


    /// display new game
    $('#newGame').on('click',function(){
        $('.cell').text('');
    });// display newGame button

});// end of game appliction function