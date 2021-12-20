function returnObject(name, population, treasury) {
    const obj = {
        name: name,
        population: population,
        treasury: treasury,
    };
    return obj;
}


console.log(returnObject('Tortuga',
    7000,
    15000))


console.log(returnObject('Santo Domingo',
    12000,
    23500))