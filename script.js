const sketchpad = document.querySelector('.sketchpad')
const size = document.querySelector('.size')
const color = document.querySelector('.color')
const rgb = document.querySelector('.rgb')
const eraser = document.querySelector('.eraser')
const clear = document.querySelector('.clear')

let userChoice = 0


function createDiv(){
    for (let i = 0; i < userChoice; i++){
        let grid = document.createElement('div')
        grid.classList.add('grid')
        sketchpad.append(grid)

    }

}






size.addEventListener('click', () =>{
    user = prompt("Choose a number for you grid")
    userChoice = user
    createDiv()
})


color.addEventListener('click', () =>{
    alert("color")
})


rgb.addEventListener('click', () =>{
    alert("rgb")
})


eraser.addEventListener('click', () =>{
    alert("eraser")
})


clear.addEventListener('click', () =>{
    alert("clear")
})