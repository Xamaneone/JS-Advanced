function biggestElement(matrix) {
    let result = Number.MIN_SAFE_INTEGER
    for (let i=0; i < matrix.length; i++) {
        let array = matrix[i]
        let biggest = (array.sort((a, b) => a - b)).pop()
        if (biggest > result) {
            result = biggest
        }
    }
    return result
}

console.log(biggestElement([[20, 50, 10],
    [8, 33, 145]]))

console.log(biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]))