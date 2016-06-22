$(document).ready(function(){
    var gameCounter=0;
    
    // gameloop
    $('#gameBoard').find('.cell').on('click', function(){ // change onclick to one click later
        if (gameCounter % 2 === 0){
            $(this).text('X'); 
            // could be a place to substute an X with a image of an X
            checkVictory('X');
        } else {
        ///player 2's turn (O)
            $(this).text('O');
            checkVictory('O');
        }
        gameCounter++;  
        console.log(gameCounter); 
        if (gameCounter == 9){
                    $('#winnerIs').text('Game over! no winner');
                    $('#newGame').removeClass('invisible');
        }
    });// onClick game loop
    // didn't like the onClick to oneClick, can't reset this????

    /// How do I keep score?
    /// Would need a place to load player 1 and player 2, and names, etc...
         

    function checkVictory(player){    
        ///top row check
        if ($('#gameBoard').find('#0').text() !== ''){
            if ($('#gameBoard').find('#0').text() == $('#gameBoard').find('#1').text()) {
                if ($('#gameBoard').find('#0').text() == $('#2').text()) {
                    //alert('Game over! '+player+' is the winner!');
                    $('#winnerIs').html('0-1 Game over! <br>'+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }//top row check        

            ///left column check
            if ($('#gameBoard').find('#0').text() == $('#gameBoard').find('#3').text()) {
                if ($('#gameBoard').find('#0').text() == $('#6').text()) {
                    //alert('Game over! '+player+' is the winner!');
                    $('#winnerIs').html('0-2 Game over! <br>'+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }//left column check

            ///left diagonal check
            if ($('#gameBoard').find('#0').text() == $('#gameBoard').find('#4').text()) {
                if ($('#gameBoard').find('#0').text() == $('#8').text()) {
                    //alert('Game over! '+player+' is the winner!');
                    $('#winnerIs').html('0-3 Game over! <br>'+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            } //left diagonal check   
        } // position 1 checks    

       ///middle column check
        if ($('#gameBoard').find('#1').text() !== ''){
            if ($('#gameBoard').find('#1').text() == $('#gameBoard').find('#4').text()) {
                if ($('#gameBoard').find('#1').text() == $('#7').text()) {
                    //alert('Game over! '+player+' is the winner!');
                    $('#winnerIs').html('1-1 Game over! <br>'+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                } 
            } //middle column check
        } // position 2 checks        

        ///right column check
        if ($('#gameBoard').find('#2').text() !== ''){
            if ($('#gameBoard').find('#2').text() == $('#gameBoard').find('#5').text()) {
                if ($('#gameBoard').find('#2').text() == $('#8').text()) {
                    //alert('Game over! '+player+' is the winner!');
                    $('#winnerIs').html('2-1 Game over! <br>'+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }//right column check

            ///right diag check
            if ($('#gameBoard').find('#2').text() == $('#gameBoard').find('#4').text()) {
                if ($('#gameBoard').find('#2').text() == $('#6').text()) {
                    //alert('Game over! '+player+' is the winner!');
                    $('#winnerIs').html('2-2 Game over! <br>'+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }//right diag check
        } // position 3 checks        

        ///middle row check        
        if ($('#gameBoard').find('#3').text() !== ''){
            if ($('#gameBoard').find('#3').text() == $('#gameBoard').find('#4').text()) {
                if ($('#gameBoard').find('#3').text() == $('#5').text()) {
                    //alert('Game over! '+player+' is the winner!');
                    $('#winnerIs').html('4-1 Game over! <br>'+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }//middle row check
        } // position 4 checks
        
        ///bottom row check
        if ($('#gameBoard').find('#6').text() !== ''){
            if ($('#gameBoard').find('#6').text() == $('#gameBoard').find('#7').text()) {
                if ($('#gameBoard').find('#6').text() == $('#8').text()) {
                    //alert('Game over! '+player+' is the winner!');
                    $('#winnerIs').html('7-1 Game over! <br>'+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }//bottom row check
        } // position 6 checks
    }///checkVictory


    /// display new game
    $('#newGame').on('click',function(){
        $('.cell').text('');
        gameCounter=0;//maybe this resets the counter to zero
        $('#newGame').addClass('invisible');
        $('#winnerIs').text('');
        console.log(gameCounter); 
    });// display newGame button

});// end of game appliction function