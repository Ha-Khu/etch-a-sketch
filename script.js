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
    let input = prompt("Choose size")
    return input
    
}


function changeColor() {
    this.style.backgroundColor = "black"
}

