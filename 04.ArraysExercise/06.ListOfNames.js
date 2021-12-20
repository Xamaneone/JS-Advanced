function solve(array) {
    array.sort((a, b) => a.localeCompare(b))
    array.forEach((name, index) => console.log(`${index + 1}.${name}`))
}


solve(["John", "Bob", "Christina", "Ema"])