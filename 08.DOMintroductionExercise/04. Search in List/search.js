function search() {
    const elements = Array.from(document.querySelectorAll('ul li'))

    const text = document.getElementById('searchText').value

    const result = document.getElementById("result")

    let matches = 0

    elements.forEach((el) => {
        if (el.textContent.includes(text)) {
            el.style.fontWeight = 'bold';
            el.style.textDecoration = 'underline';
            matches += 1
        } else {
            el.style.fontWeight = 'normal';
            el.style.textDecoration = '';
        }
    })

    result.innerText = `${matches} matches found`


}
