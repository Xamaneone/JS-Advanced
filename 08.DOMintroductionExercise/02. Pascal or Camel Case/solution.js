function solve() {
    let text = document.getElementById("text").value;
    const naming = document.getElementById("naming-convention").value;
    const resultContainer = document.getElementById("result")

    let result = ""

    text = text.split(" ")

    if (naming === "Camel Case") {
        result += text.shift().toLowerCase()
        for (let i = 0; i < text.length; i++) {
            result += text[i][0].toUpperCase() + text[i].slice(1).toLowerCase()
        }
        resultContainer.textContent = result
    } else if (naming === "Pascal Case") {
        for (let i = 0; i < text.length; i++) {
            result += text[i][0].toUpperCase() + text[i].slice(1).toLowerCase()
        }
        resultContainer.textContent = result
    } else {
        resultContainer.textContent = "Error!"
    }

}

