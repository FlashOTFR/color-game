const squares = document.querySelectorAll(".square");
const display = document.querySelector("#color-display");
const message = document.querySelector("#message");
const announce = document.querySelector("#announce");
const resetButton = document.querySelector("#reset");
const easyButton = document.querySelector("#easy");
const hardButton = document.querySelector("#hard");


const randomColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

const changeColors = (color) => {
    for(let i = 0; i < squares.length; i++){
        console.log(color);
        squares[i].style.backgroundColor = color;
    }
}

const pickColor = () => {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random]; 
}

const generateRandomColors = (num) => {
    //make an array
    let arr = [];
    //add num random colors to arr
    for(let i = 0; i < num; i++){
        arr.push(randomColor());
    }
    //return that array
    return arr
}


let colors = generateRandomColors(6);
let winningColor = pickColor();
//show color winning color
display.textContent = winningColor;

resetButton.addEventListener("click", () => {
        colors = generateRandomColors(6);
        winningColor = pickColor();
        display.textContent = winningColor;
        resetButton.textContent = "New Colors";
        announce.style.backgroundColor = "#232323";
        for(let i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
        }
})

easyButton.addEventListener("click", () => {
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    colors = generateRandomColors(3);
    winningColor = pickColor();
    display.textContent = winningColor;
    for(let i = 0; i < squares.length; i++){
        if(i < 3){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
})

hardButton.addEventListener("click", () => {
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    colors = generateRandomColors(6);
    winningColor = pickColor();
    display.textContent = winningColor;
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        if(i > 2){
            squares[i].style.display = "block";
        }
    }
})

for(let i = 0; i < squares.length; i++){
    //add color styles to squares
    squares[i].style.backgroundColor = colors[i];
    //add click event to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        let clickedColor = this.style.backgroundColor;
        //compare clicked color to winning
        console.log(clickedColor)
        if(clickedColor === winningColor){
            message.textContent = "YOU WIN";
            changeColors(clickedColor);
            announce.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?";
        }else {
            squares[i].style.backgroundColor = "#232323";
            message.textContent = "Try Again";
        }
    })
    
}



