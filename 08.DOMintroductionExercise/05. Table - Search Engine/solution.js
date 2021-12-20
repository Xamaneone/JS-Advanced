function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let inputText = document.getElementById('searchField').value.toLowerCase()

      let tableElements = Array.from(document.querySelectorAll('tbody tr'))

      tableElements.forEach((el) => {
         if ((el.textContent).toLowerCase().includes(inputText)) {
            el.classList.add("select");
         } else {
            el.classList.remove("select")
         }
      })


   }
}