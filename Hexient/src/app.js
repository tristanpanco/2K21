colors = ["Blue", "Brown", "Coral", "Cyan", "Cornsilk", "Pink", "Fuchsia", "Gray", "Green", "Grey", "Ivory", "Khaki", "Indigo", 
"Moccasin", "Orange", "Peru", "Red", "Salmon", "Snow", "Silver", "Purple", "Tan", "Wheat", "Teal", "Thistle", "Tomato", "Tan", "Turquoise", "Violet", "Yellow", "Plum", "Navy", "Lime", "Linen", "Lavender", "Gold", "Aqua", "Beige", "Bisque"]

section = document.querySelector('section')
colorName = document.getElementById("color-name")
button = document.getElementById("color-click")

// console.log(section)
// console.log(colorName)
// console.log(button)

function randomNumber () {
    return Math.floor(Math.random() * colors.length)
}

// console.log(userRandomNumber)

let colorOfChoice

// console.log(colorClick())

function colorClick () { 
    const userRandomNumber = randomNumber()

    for (let i = 0; i <= colors.length; i++) {
        if (i === userRandomNumber){
            colorOfChoice = userRandomNumber
        }
    }
    console.log(colorOfChoice)

    section.style.backgroundColor = colors[colorOfChoice]
    colorName.textContent = colors[colorOfChoice]
    colorName.style.backgroundColor = colors[colorOfChoice]
}

button.addEventListener("click", colorClick)