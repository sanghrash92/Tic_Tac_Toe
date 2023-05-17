const board = document.querySelector('.board-container');
const cells = document.querySelectorAll('[data-cell-id]');
const playerOne = 'X';
const playerTwo = "O";
let playersTurn = false;

cells.forEach(cell => {
    cell.addEventListener("click", (e) => {
        if(playersTurn === false) {
            cell.innerText = playerOne;
            cell.style.fontSize = '5rem';
            playersTurn = true;
        } else {
            cell.innerText = playerTwo;
            cell.style.fontSize = '5rem';
            playersTurn = false;
        }
    })
})


