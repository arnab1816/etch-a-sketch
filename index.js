let colorChoice = 'black';
let click = true;

// populating the board
function populateBoard(size) {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = 'white');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement('afterbegin', square);
    }
}
// selecting the desire color 
function colorSquare() {
    if(click){
        if (colorChoice == "random") {
            this.style.backgroundColor = `RGB(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
        }
        else {
            this.style.backgroundColor = colorChoice;
        }
    }
}
// setting the size of the board 
document.querySelector(".input").addEventListener("change", function(e) {
    let value = this.value;
    console.log(value);
    if (value >= 2 && value <= 100) {
        populateBoard(value);
        document.querySelector(".error").style.display = 'none';
    }
    else {
        document.querySelector(".error").style.display = 'block';
    }
});
// adding event listener to every button 
document.querySelector('.black-color-btn').addEventListener('click', () => {
    colorChoice = 'black';
});

document.querySelector('.gray-color-btn').addEventListener('click', () => {
    colorChoice = 'gray';
});

document.querySelector('.random-color-btn').addEventListener('click', () => {
    colorChoice = 'random';
});

document.querySelector('.eraser-btn').addEventListener('click', () => {
    colorChoice = 'white';
});

document.querySelector('.reset-btn').addEventListener('click', () => {
    let squares = document.querySelectorAll(".board div");
    squares.forEach((div) => div.style.backgroundColor = 'white');
});
// changing coloring status on click 
document.querySelector('body').addEventListener('click', (e) => {
    if(e.target.tagName != 'BUTTON' && e.target.tagName != 'INPUT'){
        click = !click;
        if(click){
            document.querySelector('.status').textContent = "Coloring Status: Coloring";
        }
        else{
            document.querySelector('.status').textContent = 'Coloring Status: Not Coloring';
        }
    }
});
populateBoard(16);