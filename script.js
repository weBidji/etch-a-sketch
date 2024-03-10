
//create grid

const gameScreen = document.getElementById('game-screen');
let cellNumber = 20;

function createCell(){

    let gameCell = document.createElement('div');
    gameCell.classList.add('game-cell');
    gameScreen.appendChild(gameCell);

}
function createGrid(){
    for (let i = 1; i <= cellNumber * cellNumber; i++){
        createCell();
        
    }
    
}


document.addEventListener("DOMContentLoaded", createGrid());

//draw

let gameCells = document.querySelectorAll('.game-cell');


gameCells.forEach(cell => {
    cell.style.width = `${Math.floor(800 / cellNumber)}px`;
    cell.style.height = `${Math.floor(800 / cellNumber)}px`;
});



const dragBtn = document.getElementById('drag-btn');
let dragMode = false;


let isMouseDown = false;

document.addEventListener('mousedown', () => {
    isMouseDown = true;
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});

const black = 'black';


gameCells.forEach(cell => {
    cell.addEventListener('click', () => {
        let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        blackMode? cell.style.backgroundColor = black : cell.style.backgroundColor = randomColor;
    });

    cell.addEventListener('mouseover', () => {
        if (dragMode && isMouseDown) {
            let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            blackMode? cell.style.backgroundColor = black : cell.style.backgroundColor = randomColor;
        }
    });
});




dragBtn.addEventListener('click', () => {
    dragMode = !dragMode;
    dragBtn.classList.toggle('button-active');
    

})




//clear board

const clearBtn = document.getElementById('clear-btn');

clearBtn.addEventListener('click', () => {

   gameCells.forEach(cell => {
    cell.style.backgroundColor = 'white';
   })

})

//black mode

const rainbowBtn = document.querySelector('.rainbow-btn');
let blackMode = false;

rainbowBtn.addEventListener('click', () => {

    blackMode = !blackMode;
    updateRainbowBtn();
})

function updateRainbowBtn() {
    if (blackMode) {
        rainbowBtn.classList.toggle('black');
        rainbowBtn.innerHTML = "Black<br>mode";
    } else {
        rainbowBtn.classList.toggle('black');
        // rainbowBtn.style.background = "linear-gradient(89.7deg, rgba(223,0,0,1) 2.7%, rgba(214,91,0,1) 15.1%, rgba(233,245,0,1) 29.5%, rgba(23,255,17,1) 45.8%, rgba(29,255,255,1) 61.5%, rgba(5,17,255,1) 76.4%, rgba(202,0,253,1) 92.4%)";
        rainbowBtn.innerHTML = 'Rainbow mode';
    }
}

//toggle grid

const gridBtn = document.getElementById('grid-btn');
let gridActive = false;

gridBtn.addEventListener('click', () => {

    gridActive = !gridActive;

    
    gridBtn.classList.toggle('button-active')
    gameCells.forEach(cell => {
        cell.classList.toggle('grid-active');    })
})

//add and remove cells

let addCellsBtn = document.getElementById('add-cells');
let removeCellsBtn = document.getElementById('remove-cells');

removeCellsBtn.addEventListener('click', () => {

    if (cellNumber > 5){
        cellNumber -= 5;
        updateCells();cell.style.backgroundColor = randomColor;
    }  
});


addCellsBtn.addEventListener('click', () => {

    if (cellNumber < 60 ){
        cellNumber += 5;
        updateCells();
    }  
    ('grid-active');
});
   

function updateCells() {
    gameCells.forEach(cell => {
        gameScreen.removeChild(cell);
    });

    setTimeout(() => {
        createGrid();
        gameCells = document.querySelectorAll('.game-cell');
        if (gridActive){
            gameCells.forEach(cell => {

                cell.classList.remove('grid-active');
                cell.classList.add('grid-active');
            })
        }
        

        
        gameCells.forEach(cell => {
            cell.style.width = `calc(100% / ${cellNumber})`;
            cell.style.height = `calc(100% / ${cellNumber})`;
            
            cell.addEventListener('click', () => {
                let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                
                blackMode? cell.style.backgroundColor = black : cell.style.backgroundColor = randomColor;
                
            });
        
            cell.addEventListener('mouseover', () => {
                if (dragMode && isMouseDown) {
                    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                    blackMode? cell.style.backgroundColor = black : cell.style.backgroundColor = randomColor;
                }
            });
        });

        
    }, 0);

    
        cell.addEventListener('click', () => {
            let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            cell.style.backgroundColor = randomColor;
        });
    
        cell.addEventListener('mouseover', () => {
            if (dragMode && isMouseDown) {
                let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                cell.style.backgroundColor = randomColor;
            }
        });
    }

    
//button interactions

    const pressableButtons = document.querySelectorAll('.pressable');

    pressableButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('button-press');
            setTimeout(() => {
                button.classList.toggle('button-press');
            }, 200);
        });
    });



