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
    
        
        
        for (let j = 0; j < userChoice; j++){
            const square = document.createElement('div')
            square.setAttribute('id', 'innerSquare')
            square.classList.add('square')
            grid.appendChild(square)
                    
            color.addEventListener('click', () =>{
                alert('color')
            })
            
            
            rgb.addEventListener('click', () =>{
                alert('rainbow')
            })
            
            
            eraser.addEventListener('click', () =>{
                alert('erase')
            })
            
            
            clear.addEventListener('click', () =>{
                alert('clear')
            })
            

            function click(){
            square.addEventListener('mousemove', ()=>{
            square.style.backgroundColor = "black"
            })
            }
            click()
            

                    
            function erase(){
            square.addEventListener('mousemove', ()=>{
            square.style.backgroundColor = "white"
            })
            }
            
            
        } 
    }
}




        
        







size.addEventListener('click', () =>{
    user = prompt("Choose a number for you grid")
    userChoice = user
    createDiv()
})


