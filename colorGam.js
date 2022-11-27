
var numSquare = 6;
var colors = [];
var colorPicked;

var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset")
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    //mode buttons event
    setupModebuttons()
    // squares eventlistener
    setupSquares()
    // reset event listener
    reset();
}


function setupModebuttons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquare = 3: numSquare = 6;
            reset();
        });
    } 
}

function setupSquares(){
    for(var i = 0; i < square.length; i++){
        //add a 'clicked' eventlistener to square
        square[i].addEventListener("click", function(){
            //grab color iof clicked square
            var clickedColor = this.style.backgroundColor;
            //comparing clicked color to bckgrd color
            if(clickedColor === colorPicked){
                messageDisplay.textContent = "Correct!";
                changeColor(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again" 
            }else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!"
            }
        });
    }
}

function reset(){
      //generate a new colors
      colors = generateRandomcolors(numSquare);
      //pick a new random color from the array
      colorPicked = pickedColor();
      //change color display to  match new color
      colorDisplay.textContent = colorPicked;
      //change colours on all square
      for(var i = 0; i < square.length; i++ ){
          square[i].style.backgroundColor = colors[i];
      }
      //change reset button color 
      h1.style.backgroundColor = "steelblue";
      // message should leave after clicking play again
      messageDisplay.textContent = "";  
      // return play again to new color on click 
      resetButton.textContent = "New color"
      messageDisplay.textContent = "";
      //changing color of squares and number
      for(var i = 0; i < square.length; i++){
        if(colors[i]){
         square[i].style.display = "block";
         square[i].style.backgroundColor = colors[i];
        }else {
         square[i].style.display = "none";
        }
        //change reset button color 
        h1.style.backgroundColor = "steelblue";
    }

}

resetButton.addEventListener("click", function(){
    reset();
});
    

function changeColor(color){
    //loop through all squares 
    for(var i = 0; i < square.length; i++ ){
        //change all square to correct square picked
        square[i].style.backgroundColor = color
    }
}

function pickedColor(){
    // slect a color at random
   var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomcolors(num){
    //make an array
    var arr = []
    //repeat num times
    for(var i = 0; i < num; i++){
    //get random color and push to array
        arr.push(randomColor()) 
    }
    //return that array
    return arr;
}

function randomColor(){
    // pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    // pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);
     return "rgb(" + r + ", " + g + ", " + b +")";
}