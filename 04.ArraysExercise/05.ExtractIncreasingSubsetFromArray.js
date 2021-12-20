function solve(array) {
    let result = []
    array.reduce((previousValue, currentValue) => {
        if (previousValue <= currentValue) {
            result.push(currentValue)
            return currentValue
        } else {
            return previousValue
        }
    }, 0)
    return result
}


console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]))

console.log(solve([1,
    2,
    3,
    4]
))

console.log(solve([20,
    3,
    2,
    15,
    6,
    1]))

console.log(solve([1, 2, 3, 4, 3, 2, 1, 'asd', 2, 1, 100, 99, 0, 1, 100, 200]))
