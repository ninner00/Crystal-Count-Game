// Game controls:
// 1. Generate a random number for the user to "get"
// 2. Assign a points to each crystal color
// 3. Display crystals points only when clicked on
// 4. Ater a crystal is clicked, add points together and display total score.
// 5. When added score reaches the same number as the random score, user wins.
// 6. When addes score reaches over the same number as the random score,, user losses.
// 7. Each time when the game starts, the game will change the values of each crystal.


$(document).ready(function() {
	// 1. Generate a random number for the user to "get"
	var targetNumber = Math.floor(Math.random() * 120 + 9);
	// Assign to the html
	$('#randomNumber').text(targetNumber);
	// console.log(targetNumber);

	// 2. Assign random points to each crystal color
	var gemBlue = Math.floor(Math.random() * 12 + 1);
	var gemGreen = Math.floor(Math.random() * 12 + 1); 
	var gemRed = Math.floor(Math.random() * 12 + 1);
	var gemYellow = Math.floor(Math.random() * 12 + 1);


	// 3. Display crystals points to total only when clicked on
	$(function() {
		$('#gemBlue').val(gemBlue);
		$('#gemGreen').val(gemGreen);
		$('#gemRed').val(gemRed);
		$('#gemYellow').val(gemYellow);
	})

	// 4. After a crystal is clicked, add points together and display total score.
	var theTotal = 0;
	$('.gemImage').click(function(){
   		theTotal = Number(theTotal) + Number($(this).val());
    	$('#finalScore').text(theTotal);      
          //sets wins and losses
        if (theTotal == targetNumber){
          winner();
        }
        else if ( theTotal > targetNumber){
          loser();
        }   
  	})  

	  //  Wins and losses
	  var theTotal= 0; 
	  var wins= 0;
	  var losses = 0;
	  // Assign to the html
	$('#numberWins').text(wins);
	$('#numberLosses').text(losses);

	// New Game
	// 7. Each time when the game starts, the game will change the values of each crystal.
	function reset(){
		// reset targetNumber
	  	targetNumber = Math.floor(Math.random() * 101 + 19);
		$('#randomNumber').text(targetNumber);
		console.log(targetNumber);

		// Reset gems
		gemBlue = Math.floor(Math.random() * 11 + 1);
		gemGreen = Math.floor(Math.random() * 11 + 1); 
		gemRed = Math.floor(Math.random() * 11 + 1);
		gemYellow = Math.floor(Math.random() * 11 + 1);  
		
		theTotal= 0;
	  	$('#finalScore').text(theTotal);
  	} 

	// 5. When added score reaches the same number as the random score, user wins.
	function winner(){
		
		// adds to the wins
	  	wins++; 
	  	// Assign to the html
	  	$('#numberWins').text(wins);
	  	alert("You won!");
	  reset();
	}

	// 6. When addes score reaches over the same number as the random score, user losses.
	function loser(){
		
	  	// adds to the losses
	  	losses++;
	  	$('#numberLosses').text(losses);
	  	alert ("You lose!");
	  reset();
	}
})
