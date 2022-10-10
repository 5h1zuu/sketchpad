const sketchpad = document.querySelector('.sketchpad')
const size = document.querySelector('.size')
const color = document.querySelector('.color')
const clear = document.querySelector('.clear')
const rainbow = document.querySelector('.rainbow')
const erase = document.querySelector('.erase')


let userChoice = 16
let value = ""

function createDiv(){
    for (let i = 0; i < userChoice; i++){
        let grid = document.createElement('div')
        grid.classList.add('grid')
        sketchpad.append(grid)
 
        
        for (let j = 0; j < userChoice; j++){
            const square = document.createElement('div')
            square.setAttribute('id', 'innerSquare')
            square.classList.add('square')
            grid.appendChild(square)
                    
            
            function click(){
            square.addEventListener('mousemove', ()=>{
                if (value == ""){
                    square.style.backgroundColor = "black"
                }
                else if (value == "color"){
                    square.style.backgroundColor = "black"
                }
                else if (value == "rainbow"){
                    square.style.backgroundColor = `${rgb()}`
                }
                else if (value == "white" ){
                    square.style.backgroundColor = "white"
                }
            })
            }
            click()
            

        } 
    }
}

function rgb(){
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    rgbColor = "rgb(" + r + "," + g + "," + b +")" 
    return rgbColor
}





createDiv()

    

function deleter(){
    document.querySelectorAll('.square').forEach(e => e.remove());
    document.querySelectorAll('.grid').forEach(e => e.remove())
}





size.addEventListener('click', () =>{
    deleter()
    createDiv()
    user = prompt("Choose a number for you grid")
    userChoice = user
    while (isNaN(`${userChoice}`) == true){
        alert("Error, not a number")
        user = prompt("Choose a number for you grid")
        userChoice = user
        
    }
    while (userChoice > 100){
        alert("Error, too big to create")
        user = prompt("Choose a number for you grid")
        userChoice = user
    }
    deleter()
    userChoice = user
    createDiv()
        
    

})











color.addEventListener('click', () => { 
    value = "color"
})


rainbow.addEventListener('click', () =>{
    value = "rainbow"
})


erase.addEventListener('click', () => {
    value = "white"
})


clear.addEventListener('click', () =>{
    deleter()
    createDiv()
})