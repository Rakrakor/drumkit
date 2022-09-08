var numberOfDrumButtoms = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrumButtoms; i++){

	document.querySelectorAll(".drum")[i].addEventListener("click",function(){
		var buttonInnerHTML = this.textContent;

		callDrum(buttonInnerHTML);		
		
	});



document.addEventListener("keypress",function(e){
		var buttonInnerHTML = e.key;
		var toLowerCase = buttonInnerHTML.toLowerCase();
		console.log(toLowerCase);

		callDrum(toLowerCase);		
		
	});




function callDrum(buttonInnerHTML){
	switch(buttonInnerHTML){
			case "w":
				var tom1 = new Audio("sounds/tom-1.mp3");
				tom1.play();
				animation("w")
				break;
			case "a":
				var tom2 = new Audio("sounds/tom-2.mp3");
				tom2.play();		
				animation("a")
				break;
			case "s":
				var tom3 = new Audio("sounds/tom-3.mp3");
				tom3.play();
				animation("s")		
				break;
			case "d":
				var tom4 = new Audio("sounds/tom-4.mp3");
				tom4.play();		
				animation("d")
				break;
			case "j":
				var snare = new Audio("sounds/snare.mp3");
				snare.play();		
				animation("j")
				break;
			case "k":
				var crash = new Audio("sounds/crash.mp3");
				crash.play();		
				animation("k")
				break;
			case "l":
				var kick = new Audio("sounds/kick-bass.mp3");
				kick.play();		
				animation("l")
				break;
			default:
				console.log(buttonInnerHTML);

		}
}


function animation(d){

	document.querySelector("."+d+ " img").classList.add("pressed");
	setTimeout(function(){
		document.querySelector("."+d+ " img").classList.remove("pressed");
	}, 1000);
}
}

