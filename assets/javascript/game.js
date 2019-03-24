$(document).ready(function() {

// Geting computer pick

    var randomPick = Math.floor(Math.random() * 102) + 19; 
    console.log("crystal 1: " + crystalOne);		 
        $(".randomNumber").html(randomPick); 
        
// Getting the value of first crystal
	
    var crystalOne = Math.floor(Math.random() * 12) + 1; 
    console.log("Crystal 1: " + crystalOne);	 
        $("#image1").html("<img src=" + "assets/images/image1.png" + " value=" + crystalOne + ">"); 
        
// Getting the value of second crystal

    var crystalTwo = Math.floor(Math.random() * 12) + 1; 
    console.log("Crystal 2: " + crystalTwo);	
        $("#image2").html("<img src=" + "assets/images/image2.png" + " value=" + crystalTwo + ">"); 
        
// Getting the value of third crystal

    var crystalThree = Math.floor(Math.random() * 12) + 1;
    console.log("Crystal 3: " + crystalThree);	 
        $("#image3").html("<img src=" + "assets/images/image3.png" + " value=" + crystalThree + ">");

// Getting the value of fourth crystal
	
    var crystalFour = Math.floor(Math.random() * 12) + 1; 
    console.log("Crystal 4: " + crystalFour);		
        $("#image4").html("<img src=" + "assets/images/image4.png" + " value=" + crystalFour + ">");
        
// Setting variables for wins, losses and score		
	var wins = 0; 

	var losses = 0; 
		
	var score = 0; 
       
        
// reset

	function reset () {
		randomPick = Math.floor(Math.random() * 102) + 19; 
			console.log("randomPick: " + randomPick); 
		$(".randomNumber").html(randomPick); 

		score = 0; 
		$(".scoreDisplay").html(score); 

		crystalOne = Math.floor(Math.random() * 12) + 1;  
			console.log("crystal 1: " + crystalOne); 
		$("#img1").html("<img src=" + "assets/images/image1.png" + " value=" + crystalOne + ">"); 

		crystalTwo = Math.floor(Math.random() * 12) + 1; 
			console.log("crystal 2: " + crystalTwo); 
		$("#img2").html("<img src=" + "assets/images/image2.png" + " value=" + crystalTwo + ">"); 

		crystalThree = Math.floor(Math.random() * 12) + 1; 
			console.log("crystal 3: " + crystalThree); 
		$("#img3").html("<img src=" + "assets/images/image3.png" + " value=" + crystalThree + ">");
	
		crystalFour = Math.floor(Math.random() * 12) + 1; 
			console.log("crystal 4: " + crystalFour); 
		$("#img4").html("<img src=" + "assets/images/image4.png" + " value=" + crystalFour + ">");

		$("img").on("click", function () {
			var newScore = score += parseInt($(this).attr("value")); 
				console.log("New Score: " + newScore); 
            $(".scoreDisplay").html(newScore); 
            
// Wins count

			if(newScore === randomPick) { 
				wins++ ; 
				$(".wins").html("Wins: " + wins); 
					console.log("Wins: " + wins); 
					reset(); 
			
            } 
            
// Losses count

			else if(newScore > randomPick) {
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

		if(newScore === randomPick) { 
			wins++ ; 
			$(".wins").html("Wins: " + wins); 
				console.log("Wins: " + wins); 
				reset(); 
		} 

		else if(newScore > randomPick) {
			losses++ ; 
			$(".losses").html("Losses: " + losses); 
				console.log("Losses: " + losses); 
				reset(); 
		}

	}); 

}); 
