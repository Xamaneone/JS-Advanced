function editElement(el, match, replacer) {
    while (el.textContent.search(match) !== -1)
        el.textContent = String(el.textContent.replace(match, replacer))
}