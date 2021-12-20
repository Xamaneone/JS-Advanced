function solve(array) {
    const result = [];

    for (let el of array.splice(1)) {
        let [_, town, latitude, longitude] = el.split("|")
        result.push({
            Town: town.trim(),
            Latitude: Number(Number(latitude.trim()).toFixed(2)),
            Longitude: Number(Number(longitude.trim()).toFixed(2)),
        })
    }
    console.log(JSON.stringify(result))
}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])


// solve(['| Town | Latitude | Longitude |',
//     '| Veliko Turnovo | 43.0757 | 25.6172 |',
//     '| Monatevideo | 34.50 | 56.11 |'])