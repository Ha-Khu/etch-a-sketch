let color = "black"

let squares_DOM = document.querySelector(".squares-container")
let changeSize = document.querySelector(".size")


changeSize.addEventListener("click", function(){
    let number = getSize()
    count(number)
})


function count (number) {
squares_DOM.style.gridTemplateColumns = `repeat(${number}, 1fr)` 
squares_DOM.style.gridTemplateRows = `repeat(${number}, 1fr)` 

let size = number * number
for (let i = 0; i < size; i++) {
    let square = document.createElement("div")
    square.classList.add("squares")
    square.addEventListener("mouseover", changeColor)
    squares_DOM.insertAdjacentElement("beforeend", square)
}

}

count()

function getSize () {
    let input = prompt("Choose size (max 100)")
    if (input < 2 || input > 100) {
        alert("minimum size is 2 and maximum is 100")
    } else
    return input
    
}

function changeColor() {
    if (color == "black") {
        this.style.backgroundColor = "black"
    } else if (color == "rainbow") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    } else if (color == "white") {
        this.style.backgroundColor = "white"
    }
}


function colorChoosing(chooseColor) {
     color = chooseColor
}

