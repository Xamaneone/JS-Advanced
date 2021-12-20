function extractText() {
    let data = document.getElementById('items')
    let result = ""
    for (let index = 0; index < data.children.length; index++) {
        console.log(data.children[index].textContent)
        result += data.children[index].textContent + "\n"
        console.log(result)
    }

    document.getElementById('result').value = result
}



