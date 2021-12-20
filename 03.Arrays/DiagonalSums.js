function diagonalSums(square_matrix) {
    let left_diagonal_sum = 0
    let right_diagonal_sum = 0
    let matrix_len = square_matrix.length
    for (let i=0; i < matrix_len; i++) {
        left_diagonal_sum += square_matrix[i][i]
        right_diagonal_sum += square_matrix[i][matrix_len - 1 - i]
    }
    console.log(`${left_diagonal_sum} ${right_diagonal_sum}`)
}

diagonalSums([[20, 40],
    [10, 60]])


diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]])