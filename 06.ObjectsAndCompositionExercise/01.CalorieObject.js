function solve(array) {
    let result = {}
    for (let el in array) {
        if (el%2 == 0) {
            result[array[el]] = parseInt(array[parseInt(el) + 1])
        }
    }
    return result
}





console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']))


console.log(solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']))