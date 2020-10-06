const squares = document.querySelectorAll(".square");
const display = document.querySelector("#color-display");
const message = document.querySelector("#message");


var colors = ["rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)", "rgb(255, 255, 0)", "rgb(255, 0, 255)", "rgb(0, 255, 255)"];
const pickColor = () => {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random]; 
}
const winningColor = pickColor();
//show color winning color
display.textContent = winningColor;



for(let i = 0; i < squares.length; i++){
    //add color styles to squares
    squares[i].style.backgroundColor = colors[i];
    //add click event to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare clicked color to winning
        if(clickedColor === winningColor){
            message.textContent = "YOU WIN";
            changeColors(clickedColor);
        }else {
            squares[i].style.backgroundColor = "#232323";
            message.textContent = "Try Again";
        }
    })

}

const changeColors = (color) => {
    for(let i = 0; i < squares.length; i++){
        console.log(color);
        squares[i].style.backgroundColor = color;
    }
}

