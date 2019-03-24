$(document).ready(function() {

// Geting computer pick

	var compPick = Math.floor(Math.random() * 102) + 19; 		 
        $(".randomNumber").html(compPick); 
        
// Getting the value of first crystal
	
	var gemOne = Math.floor(Math.random() * 12) + 1; 		 
        $("#img1").html("<img src=" + "assets/images/image1.png" + " value=" + gemOne + ">"); 
        
// Getting the value of second crystal

	var gemTwo = Math.floor(Math.random() * 12) + 1; 		
        $("#img2").html("<img src=" + "assets/images/image2.png" + " value=" + gemTwo + ">"); 
        
// Getting the value of third crystal

	var gemThree = Math.floor(Math.random() * 12) + 1;		 
        $("#img3").html("<img src=" + "assets/images/image3.png" + " value=" + gemThree + ">");

// Getting the value of fourth crystal
	
	var gemFour = Math.floor(Math.random() * 12) + 1; 		
        $("#img4").html("<img src=" + "assets/images/image4.png" + " value=" + gemFour + ">");
        
		
	var wins = 0; 

	var losses = 0; 
		
	var score = 0; 
       
        
// reset the game to start again

	function reset () {
		compPick = Math.floor(Math.random() * 102) + 19; 
			console.log("compPick: " + compPick); 
		$(".randomNumber").html(compPick); 

		score = 0; 
		$(".scoreDisplay").html(score); 

		gemOne = Math.floor(Math.random() * 12) + 1;  
			console.log("Gem 1: " + gemOne); 
		$("#img1").html("<img src=" + "assets/images/image1.png" + " value=" + gemOne + ">"); 

		gemTwo = Math.floor(Math.random() * 12) + 1; 
			console.log("Gem 2: " + gemTwo); 
		$("#img2").html("<img src=" + "assets/images/image2.png" + " value=" + gemTwo + ">"); 

		gemThree = Math.floor(Math.random() * 12) + 1; 
			console.log("Gem 3: " + gemThree); 
		$("#img3").html("<img src=" + "assets/images/image3.png" + " value=" + gemThree + ">");
	
		gemFour = Math.floor(Math.random() * 12) + 1; 
			console.log("Gem 4: " + gemFour); 
		$("#img4").html("<img src=" + "assets/images/image4.png" + " value=" + gemFour + ">");

		$("img").on("click", function () {
			var newScore = score += parseInt($(this).attr("value")); 
				console.log("New Score: " + newScore); 
			$(".scoreDisplay").html(newScore); 

			if(newScore === compPick) { 
				wins++ ; 
				$(".wins").html("Wins: " + wins); 
					console.log("Wins: " + wins); 
					reset(); 
			
			} 

			else if(newScore > compPick) {
				losses++ ; 
				$(".losses").html("Losses: " + losses); 
					console.log("Losses: " + losses); 
					reset(); 
				
			}

		}); 



	}

	$("img").on("click", function () {
		var newScore = score += parseInt($(this).attr("value")); 
			console.log("New Score: " + newScore); 
		$(".scoreDisplay").html(newScore); 

		if(newScore === compPick) { 
			wins++ ; 
			$(".wins").html("Wins: " + wins); 
				console.log("Wins: " + wins); 
				reset(); 
		} 

		else if(newScore > compPick) {
			losses++ ; 
			$(".losses").html("Losses: " + losses); 
				console.log("Losses: " + losses); 
				reset(); 
		}

	}); 

}); 
