function AggregateElements(list) {
    let total = 0
    for (let i in list) {
        total += list[i]
    }
    console.log(total)
    total = 0
    for (let i in list) {
        total += 1/list[i]
    }
    console.log(total)
    total = ''
    for (let i in list) {
        total += String(list[i])
    }
    console.log(total)
}

AggregateElements([1, 2, 3])

AggregateElements([2, 4, 8, 16])