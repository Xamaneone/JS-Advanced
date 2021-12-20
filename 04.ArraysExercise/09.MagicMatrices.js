function solve(matrix) {
    const sums = new Set()


    for (let array of matrix) {
        let numbers = 0
        for (let el of array) {
            numbers += parseInt(el)
        }
        sums.add(numbers)
    }

    for (let r=0; r < matrix.length; r++) {
        let numbers = 0
        for (let c=0; c < matrix[1].length; c++) {
            numbers += matrix[r][c]
        }
        sums.add(numbers)
    }

    console.log(sums)

    if (sums.size === 1) {
        console.log(true)
    } else {
        console.log(false)
    }


}

solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);


solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);


solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]);


solve([[1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]]);