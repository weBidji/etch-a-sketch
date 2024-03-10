
//create grid

const gameScreen = document.getElementById('game-screen');

function createCell(){

    let gameCell = document.createElement('div');
    gameCell.classList.add('game-cell');
    gameScreen.appendChild(gameCell);

}
function createGrid(){
    for (let i = 1; i < 257; i++){
        createCell();
    }
}


document.addEventListener("DOMContentLoaded", createGrid());

//draw

let gameCells = document.querySelectorAll('.game-cell');
const dragBtn = document.getElementById('drag-btn');
let dragMode = false;


gameCells.forEach(cell => {
    cell.addEventListener('click', () => {
        let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        cell.style.backgroundColor = randomColor;
    });

    cell.addEventListener('mouseover', () => {
        if (dragMode) {
            let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            cell.style.backgroundColor = randomColor;
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

//toggle grid

let gridBtn = document.getElementById('grid-btn');

gridBtn.addEventListener('click', () => {

    gridBtn.classList.toggle('button-active')
    gameCells.forEach(cell => {
        cell.classList.toggle('grid-active');    })
})




