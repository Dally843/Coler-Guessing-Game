var numSquares = 9;
//var colors = generateRandomColors(numSquares);
var colors=["#5353c6","#4040bf","#333399","#ccff33"," #c6ff1a","#ace600","#00e600"," #00cc00","#00b300"]

var squares = document.querySelectorAll(".square");
var pickedColor = randomColorG();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyButton");
var hardBtn = document.querySelector("#hardButton");
var meduimBtn=document.querySelector("#mediumButton")


easyBtn.addEventListener("click", function(){
	//highlight button to show selected
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	meduimBtn.classList.remove("selected")
	//set number of squares to 3
	//numSquares = 3;
	//change colors to 3
	//colors = generateRandomColors(numSquares);
	//reset winning color
	sliced = [...colors]
	  console.log(sliced)
	   newarray= sliced.slice(0,3)
	   var shuffled= shuffle(newarray)
	pickedColor = randomColorG(colors);
	//change display to show new picked color
	colorDisplay.textContent = pickedColor;
	//loop through 3 squares and reset colors while displaying none for squares without new reset colors
	for(var i = 0; i < squares.length; i++){
		if(shuffled[i]){
			squares[i].style.background = shuffled[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});
meduimBtn.addEventListener("click", function(){
	//highlight button to show selected
	hardBtn.classList.remove("selected");
	easyBtn.classList.remove("selected");
	meduimBtn.classList.add("selected")
	//set number of squares to 3
	//numSquares = 6;
	//change colors to 3
	//colors = generateRandomColors(numSquares);
	//reset winning color
	  
	  sliced1 = [...colors]
	  console.log(sliced1)
	   newarray= sliced1.slice(0,6)
	   console.log(newarray)
	pickedColor = randomColorG(colors);
	//change display to show new picked color
	colorDisplay.textContent = pickedColor;
	//loop through 3 squares and reset colors while displaying none for squares without new reset colors
	for(var i = 0; i < squares.length; i++){
		if(newarray[i]){
			squares[i].style.background = newarray[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	meduimBtn.classList.remove("selected")
	numSquares = 9;
	//colors = generateRandomColors(numSquares);
	pickedColor = randomColorG(colors);
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function(){
	//generate all new colors
	//colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = randomColorG(colors);
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	//set winning color highlight back to default
	h1.style.background = "steelblue"; 
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		var splitted= clickedColor.split("")
		var paraenthse= splitted.indexOf("(")
		var R=  Number(splitted.slice(paraenthse +1,splitted.indexOf(",")).join(""))
		//console.log(R)
		var espace = splitted.indexOf(" ")
		      var G = Number(splitted.slice(espace +1 ,10).join(""))
		console.log(splitted)
		  var B = Number(splitted.slice(splitted.lastIndexOf(",")+1,splitted.length-1).join(""))
		  console.log("b",B)
		  	
		
		

		
		//compare color to pickedColor
		console.log(clickedColor, pickedColor);
		if(rgbToHex(R, G, B)  === pickedColor){
			console.log(rgbToHex(R,G,B))
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			//window.location.reload(true);
			setTimeout(function(){window.location.reload(true)  }, 2000);

		}	else {
			console.log(rgbToHex(R,G,B))
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
		});
}

function changeColors(colorz){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.background = colorz;
	}	
}

function randomColorG(){
	//pick a random number
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColors(genColor){
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < genColor; i++){
	// get random color and push into array
		arr.push(randomColor(genColor))
	}
	//return that array
	return arr;
}

function randomColor(arr){
	// //pick a "red" from 0 - 255
	// var r = Math.floor(Math.random() * 256);
	// //pick a "green" from 0 - 255
	// var g = Math.floor(Math.random() * 256);
	// // pick a "blue" from 0 - 255
	// var b = Math.floor(Math.random() * 256);
	var  randomIndex = Math.floor(Math.random() * arr.length)
	var item = arr[randomIndex]

	return  item;
}

function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  function shuffle(array) {
	let currentIndex = array.length,  randomIndex;
  
	// While there remain elements to shuffle.
	while (currentIndex != 0) {
  
	  // Pick a remaining element.
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex--;
  
	  // And swap it with the current element.
	  [array[currentIndex], array[randomIndex]] = [
		array[randomIndex], array[currentIndex]];
	}
  
	return array;
  }