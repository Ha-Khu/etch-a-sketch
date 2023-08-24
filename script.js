let squares_DOM = document.querySelector(".squares-container")

squares_DOM.style.gridTemplateColumns = "repeat(16, 1fr)"
squares_DOM.style.gridTemplateRows = "repeat(16, 1fr)"

for (let i = 0; i < 256; i++) {
    let square = document.createElement("div")
    squares_DOM.insertAdjacentElement("beforeend", square)
}
