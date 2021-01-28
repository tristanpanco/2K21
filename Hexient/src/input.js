const section = document.querySelector('section')
const input = document.getElementById('color-input')
const button = document.querySelector('#color-click')

function createColor () {
    const createdColor = input.value

    // console.log(createdColor)

    section.style.backgroundColor = '#' + input.value
}

button.addEventListener('click', createColor)