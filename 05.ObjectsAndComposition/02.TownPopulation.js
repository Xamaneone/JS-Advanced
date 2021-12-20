function solve(array) {
    let cities = {}
    array.forEach((array) => {
        const [city, population] = array.split(' <-> ')
        if (cities[`${city}`]) {
            cities[`${city}`] += parseInt(population)
        } else {
            cities[`${city}`] = parseInt(population)
        }
    })

    for (const key in cities) {
        console.log(`${key} : ${cities[key]}`)
    }
}


solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);


solve(['Sofia <-> 1200000',
    'Montana <-> 1',
    'Montana <-> 1',
    'Montana <-> 1',
    'Montana <-> 1',
    'Montana <-> 1']);