let squareArea = document.querySelector("#squarearea");
let squareCount = parseInt(Math.random() * 21) + 30; //30-50
let topZIndex = 1;

document.querySelector("#add").onclick = addSquare;
document.querySelector("#change").onclick = changeColors;

function addSquare() {

    let square = document.createElement("div");
    square.className = "square";

    
    let size = parseInt(Math.random() * 11) + 45;
    square.style.width = size + "px";
    square.style.height = size + "px";

    square.style.backgroundColor = getRandomColor();

    square.style.top = parseInt(Math.random() * (300 - size)) + "px";
    square.style.left = parseInt(Math.random() * (700 - size)) + "px";

    square.onclick = squareClicked;

    squareArea.append(square);
}

function squareClicked() {

    // If already on top, delete it
    if (parseInt(this.style.zIndex) === topZIndex) {
        this.remove();
    }
    else {
        topZIndex++;
        this.style.zIndex = topZIndex;
    }
}

function changeColors() {

    let squares = document.querySelectorAll(".square");

    for (let square of squares) {
        square.style.backgroundColor = getRandomColor();
    }
}

for (let i = 0; i < squareCount; i++) {
    addSquare();
}

function getRandomColor() {

    let possibleLetters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        let position = parseInt(Math.random() * possibleLetters.length);
        color += possibleLetters.charAt(position);
    }

    return color;
}