function solve(array) {
    array.sort((a, b) => {
        if (a.length > b.length) {
            return 1;
        } else if (a.length === b.length) {
            return a.localeCompare(b);
        } else {
            return -1;
        }
    })
    console.log(array.join('\n'))
}

solve(['alpha',
    'beta',
    'gamma']);


solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
);


solve(['test',
    'Deny',
    'omen']);