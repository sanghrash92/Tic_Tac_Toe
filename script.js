const gameboard = (() => {
    const statusDisplay = document.querySelector('.message-container');
    const cells = document.querySelectorAll(".cell");
    const restart = document.querySelector('.game--restart')

    let gameActive = true;

    let playerOne = "X";

    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    const handlePlayerChange = () => {
        playerOne = playerOne === 'X' ? "O" : "X";
    }

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const checkWin = () => {
        let roundWon = false;
        for (let i = 0; i < winningConditions.length; i++) {
            const winCondition = winningConditions[i];
            let a = gameBoard[winCondition[0]];
            let b = gameBoard[winCondition[1]];
            let c = gameBoard[winCondition[2]];

            if (a === '' || b === '' || c === '') continue;
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }
        
        if (roundWon) {
            statusDisplay.innerHTML = `Congrats ${playerOne} won the game!`;
            gameActive = false;
            return;
        }

        let rounDraw = !gameBoard.includes('');
        if (rounDraw) {
            statusDisplay.innerHTML = 'Game is a draw!';
            gameActive = false;
            return;
        }

        handlePlayerChange()
    }

    const handleCellPlayed = (clickedCell, clickedIndex) => {
        gameBoard[clickedIndex] = playerOne;
        clickedCell.innerHTML = playerOne;
        clickedCell.style.fontSize = '6rem'
    }

    const handleCellClick = e => {
        const clickedCell = e.target;
        const clickedIndex = parseInt(
            clickedCell.getAttribute('data-cell-num')
        );
        if(gameBoard[clickedIndex] !== "" || !gameActive) return;

        handleCellPlayed(clickedCell, clickedIndex);
        checkWin()
    }

    function handleRestartGame() {
        gameActive = true;
        playerOne = "X";
        gameBoard = ["", "", "", "", "", "", "", "", ""];
        document.querySelectorAll('.cell')
                   .forEach(cell => cell.innerHTML = "");
    }
  

    cells.forEach(cell => cell.addEventListener("click", handleCellClick));
    restart.addEventListener('click', handleRestartGame)
})();


