function printer(array, splitter) {
    console.log(array.join(splitter))
}

printer(['One',
        'Two',
        'Three',
        'Four',
        'Five'],
    '-')

printer(['How about no?',
        'I',
        'will',
        'not',
        'do',
        'it!'],
    '_')