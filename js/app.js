
// Function for spinner
const toggleSpinner = direction => {
    document.getElementById(id = "spinner").style.display = direction;
}
// Clear all div
const allClear = () => {
    document.getElementById("input-field").value = "";
    document.getElementById("error").textContent = "";
    document.getElementById("search-count").textContent = "";
    document.getElementById("display-result").textContent = "";
}
// onclick function
const searchClick = () => {
    toggleSpinner("block")
    const inputField = document.getElementById("input-field").value;
    allClear()
    if (inputField.length === 0) {
        document.getElementById("error").innerHTML = `
        <p class="bg-white p-2 text-center rounded text-danger fw-bold fs-2">Please write a book name</p>
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
    if (books.length === 0) {
        document.getElementById("error").innerHTML = `
        <p class="bg-white p-2 text-center rounded text-danger fw-bold fs-2">Result not found...</p>
        `;
        toggleSpinner("none")
    }
    const resultContainer = document.getElementById("display-result");
    document.getElementById("search-count").innerHTML = `
    <p>${searchResult}/${books.length}</p>
    `;
    books.forEach(book => {
        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML = `
        <div class="card h-100">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Book Name : <span class="value-color">${book.title}</span></h5>
                <h5 class="card-title">Author : <span class="value-color">${book.author_name ? book.author_name : ""}</span></h5>
                <h5 class="card-title">Publisher : <span class="value-color">${book.publisher ? book.publisher[0] : ""}</span></h5>
                <h5 class="card-title">First publish : <span class="value-color">${book.first_publish_year ? book.publish_year[0] : ""}</span> </h5>
            </div>
        </div>
        `;
        resultContainer.appendChild(div)

    })
    toggleSpinner("none")

}