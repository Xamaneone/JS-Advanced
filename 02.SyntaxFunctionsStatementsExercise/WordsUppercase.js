function wordsExtractor(str) {
    str = str.toUpperCase()
    let regEx = new RegExp('[^a-zA-Z0-9]')
    let my_array = str.split(regEx)


    let filteredAry = my_array.filter(function(e) { return e !== '' })

    console.log(filteredAry.join(', '))
}



wordsExtractor('Hi, how are you?')
wordsExtractor('hello')
wordsExtractor('123')
