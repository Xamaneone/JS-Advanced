function processOddPositions(arr) {
    let result_arr = []
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            result_arr.unshift(arr[i] * 2)
        }
    }
    console.log(result_arr.join(' '))
}

processOddPositions([10, 15, 20, 25])
processOddPositions([3, 0, 10, 4, 7, 3])