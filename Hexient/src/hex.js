hexLetters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

const section = document.querySelector("section")
const colorCode = document.getElementById("color-name")
const button = document.getElementById("color-click")

function RandomNumber () {
    return Math.floor(Math.random() * hexLetters.length)
}

button.addEventListener("click", () => {
    let userHEX = '#'

    for (let i = 0; i < 6; i++){
        userHEX += hexLetters[RandomNumber()]
    }

    section.style.backgroundColor = userHEX
    colorCode.textContent = userHEX
    colorCode.style.backgroundColor = userHEX
})