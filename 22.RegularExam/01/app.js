window.addEventListener('load', solve);

// Check date is correct

function solve() {
    let genre = document.getElementById("genre")
    const name = document.getElementById("name");
    const author = document.getElementById("author");
    const date = document.getElementById("date");


    const allHits = document.querySelector(".all-hits-container")
    const savedHits = document.querySelector(".saved-container")


    const addButton = document.getElementById("add-btn");
    addButton.addEventListener("click", addSong);

    const totalLikes = document.querySelector(".likes")



    function addSong(e) {
        e.preventDefault()

        if (genre.value && name.value && author.value && date.value) {
            const div = document.createElement("div")
            div.classList.add("hits-info")
            div.innerHTML = `<img src="./static/img/img.png">
                            <h2>Genre: ${genre.value}</h2>
                            <h2>Name: ${name.value}</h2>
                            <h2>Author: ${author.value}</h2>
                            <h3>Date: ${date.value}</h3>
                            <button class="save-btn">Save song</button>
                            <button class="like-btn">Like song</button>
                            <button class="delete-btn">Delete</button>`

            allHits.appendChild(div)

            genre.value = ""
            name.value = ""
            author.value = ""
            date.value = ""


            const infoButtons = div.querySelectorAll('button')
            infoButtons[0].addEventListener("click", saveSong)
            infoButtons[1].addEventListener("click", likeSong)
            infoButtons[2].addEventListener("click", deleteSong)
        }

    }



    function saveSong(e) {
        const div = e.target.parentElement
        console.log(div)
        div.removeChild(div.children[5])
        div.removeChild(div.children[5])


        savedHits.appendChild(div)

    }


    function likeSong(e) {
        let likes = totalLikes.innerHTML.split(" ")[2].split("<")[0]
        totalLikes.innerHTML = "<p>Total Likes: " + (Number(likes) + 1) + '</p><img src="./static/img/like-btn.jpg" alt="image-like">'

        e.target.style.background = "Gray"
        e.target.disabled = true;
    }


    function deleteSong(e) {
        const div = e.target.parentElement
        div.parentElement.removeChild(div)
    }


}