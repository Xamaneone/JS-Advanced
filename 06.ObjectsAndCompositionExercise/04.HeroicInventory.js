function solve(array) {
    const result = []
    array.forEach((el) => {
        let [name, level, items] = el.split(" / ");
        result.push({
            name,
            level: Number(level),
            items: items ? items.split(", ") : []
        })
    })
    return JSON.stringify(result)
}

console.log(solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']))
console.log(solve(['Jake / 1000 / Gauss, HolidayGrenade']))