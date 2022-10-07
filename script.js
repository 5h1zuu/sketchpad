const sketchpad = document.querySelector('.sketchpad')
const size = document.querySelector('.size')
const color = document.querySelector('.color')
const clear = document.querySelector('.clear')

let userChoice = 16


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
            square.style.backgroundColor = "black"
            })
            }
            click()
            

        } 
    }
}


createDiv()

        
        

//how to reset grid each time new size is added

function deleter(){
    document.querySelectorAll('.square').forEach(e => e.remove());
    document.querySelectorAll('.grid').forEach(e => e.remove())
}



size.addEventListener('click', () =>{
    deleter()
    createDiv()
    user = prompt("Choose a number for you grid")
    userChoice = user
    if (userChoice > 100){
        alert("Error, too big to create")

    }else{
        deleter()
        userChoice = user
        createDiv()
        
    }
    
    

})


color.addEventListener('click', () =>{
    alert('color')
})



clear.addEventListener('click', () =>{
    deleter()
    createDiv()
})