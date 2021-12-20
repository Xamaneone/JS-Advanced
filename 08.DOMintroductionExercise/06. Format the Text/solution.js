function solve() {
    const text = document.getElementById("input").value;
    const splittedText = text.split(".").filter((el) => el != "" && el.length > 1);
    const output = document.getElementById("output")
    let finalString = ""
    let result = "<p>";

    for (let i = 0; i < splittedText.length; i++) {
        if (i % 3 === 0 && i!==0) {
            result = result + "</p>";
            finalString += result;
            result = '<p>';
        }
        result += splittedText[i] + ".";

    }

    console.log(finalString)

    if (result !== "<p>") {
        finalString += result
    }

    console.log(finalString)


    output.innerHTML += finalString
}