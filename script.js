const gameBox = document.getElementById('game-box');

function createCell(){

    let gameCell = document.createElement('div');
    gameCell.classList.add('game-cell');
    gameBox.appendChild(gameCell);

}
function createGrid(){
    for (let i = 1; i < 257; i++){
        createCell();
    }
}


document.addEventListener("DOMContentLoaded", createGrid());

let gameCells = document.querySelectorAll('.game-cell');

let randomColor = Math.floor(Math.random()*16777215).toString(16);

gameCells.forEach(cell =>{

    cell.addEventListener('mouseover', () => {

        let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

        cell.style.backgroundColor = randomColor;
    })
})

