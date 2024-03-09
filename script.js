
1//grid creation

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

// painting

let gameCells = document.querySelectorAll('.game-cell');

let randomColor = Math.floor(Math.random()*16777215).toString(16);

gameCells.forEach(cell =>{

    cell.addEventListener('mouseover', () => {

        let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

        cell.style.backgroundColor = randomColor;
    })
})

//clearing board

const clearBtn = document.getElementById('clear-btn');

clearBtn.addEventListener('click', () => {

   gameCells.forEach(cell => {
    cell.style.backgroundColor = 'white';
   })

})
