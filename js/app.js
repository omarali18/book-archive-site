
// Function for spinner
const toggleSpinner = direction => {
    document.getElementById(id = "spinner").style.display = direction;
}
// Clear all div
const allClear = () => {
    document.getElementById("input-field").value = "";
    document.getElementById("error").textContent = "";
    document.getElementById("display-result").textContent = "";
}
// onclick function
const searchClick = () => {
    toggleSpinner("block")
    const inputField = document.getElementById("input-field").value;
    allClear()
    if (inputField.length === 0) {
        document.getElementById("error").innerHTML = `
        <p class="bg-danger p-2 text-center rounded text-white">Please write a book name</p>
        `;
        toggleSpinner("none")
        return;
    }
    createDynamicUrl(inputField);
}
// Convar url with async await
const fetchUrl = async urls => {
    const res = await fetch(urls);
    const data = await res.json();
    console.log(data);
    console.log(data.numFound);
    displayBooks(data.docs, data.numFound);
}
//javascript
// Create Dynamic url
const createDynamicUrl = value => {
    url = `https://openlibrary.org/search.json?q=${value}`
    fetchUrl(url);
}

// Displays data loaded from the API
const displayBooks = (books, searchResult) => {
    console.log(books.length, searchResult);
    if (books.length === 0) {
        document.getElementById("error").innerHTML = `
        <p class="bg-danger p-2 text-center rounded text-white">Result not found...</p>
        `;
        toggleSpinner("none")
    }
    const resultContainer = document.getElementById("display-result");
    books.forEach(book => {
        console.log(book);
        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML = `
        <div class="card h-100">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <h5 class="card-title">Author : ${book.author_name ? book.author_name : ""}</h5>
                <h5 class="card-title">Publisher : ${book.publisher ? book.publisher : ""}</h5>
                <h5 class="card-title">First publish : ${book.first_publish_year ? book.publish_year[0] : ""}</h5>
            </div>
        </div>
        `;
        resultContainer.appendChild(div)

    })
    toggleSpinner("none")

}