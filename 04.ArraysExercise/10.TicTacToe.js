function ticTacToe(array) {

    function hasWin(board) {
        for (let row of board) {
            if (row[0] === row[1] === row[2]) {
                if (row[0] === false || row[1] === false || row[2] === false) {
                    return false
                }
                gameWon = true
                return true
            }
        }
        if (board[0][0] === board[1][1] === board[2][2] || board[0][2] === board[1][1] === board[2][0]) {
            if (board[1][1] === false || board[0][0] === false || board[2][2] === false) {
                return false
            }
            gameWon = true
            return true
        }
        for (let i=0; i < 3; i++) {
            if (board[0][i] === board[1][i] === board[2][i]) {
                if (board[1][i] === false) {
                    return false
                }
                gameWon = true
                return true
            }
        }
        return false

    }

    function printResult(board) {
        board.forEach((el) => {
            console.log(el.join('\t'))
        })
    }


    let board = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    let currentPlayerSign = 'X';
    let gameWon = false

    for (let i = 0; i<array.length; i++) {
        const [x, y] = array[i].split(' ');

        if (board[x][y] !== false) {
            console.log('This place is already taken. Please choose another!');
        } else {
            board[x][y] = currentPlayerSign;
            if (hasWin(board)) {
                console.log(`Player ${currentPlayerSign} wins!`)
                printResult(board)
                break
            }
            currentPlayerSign = currentPlayerSign === 'X' ? 'O' : 'X';
        }
    }

    if (!gameWon) {
        console.log(`The game ended! Nobody wins :(`)
        printResult(board)
    }

}

ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]);


ticTacToe(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2"]);


