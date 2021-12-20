function equalNeighbors(matrix) {
    let equalPairs = 0

    const x_matrix = matrix.length
    const y_matrix = matrix[0].length

    let kill_switch = false

    for (let i=1; x_matrix > i; i++) {
        for (let b=0; y_matrix > b; b++) {
            if (matrix[i - 1][b] === matrix[i][b]) {
                equalPairs += 1
            }
        }
        for (let b=1; y_matrix > b; b++) {
            if (!kill_switch) {
                if (matrix[i-1][b-1] === matrix[i-1][b]) {
                    equalPairs += 1
                }
            }
            if (matrix[i][b-1] === matrix[i][b]) {
                equalPairs += 1
            }
        }
        kill_switch = true
    }
    return equalPairs
}

console.log(equalNeighbors([['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]))

console.log(equalNeighbors([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]))

console.log(equalNeighbors([[2, 2 ,5 ,7 ,4],
    [4 ,0 ,5 ,3 ,4],
    [2 ,5 ,5 ,4 ,2]]))


console.log(equalNeighbors([['2', '2', '4', '2', '2'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]))
