const hexLetters = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

const section = document.querySelector('section')
const colorName1 = document.querySelector('.one')
const colorName2 = document.querySelector('.two')
const button = document.getElementById('color-click-gr')

function randomNumber(){
    return Math.floor(Math.random() * hexLetters.length)
}


function Generator () {
    let hexOne = '#'
    let hexTwo = '#'

    for (let i = 0; i < 6; i++){
        hexOne += hexLetters[randomNumber()]
    }

    for (let i = 0; i < 6; i++){
        hexTwo += hexLetters[randomNumber()]
    }

    const gradient = "linear-gradient(90deg," + hexOne + ", " + hexTwo + ")"

    section.style.backgroundImage = gradient
    colorName1.style.backgroundColor = hexOne
    colorName1.textContent = hexOne
    colorName2.style.backgroundColor = hexTwo
    colorName2.textContent = hexTwo
}

button.addEventListener('click', Generator)