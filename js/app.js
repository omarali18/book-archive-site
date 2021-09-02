
// Function for spinner
const showSpinner = direction => {
    document.getElementById(id = "spinner").style.display = direction;
}

// onclick function
const searchClick = () => {
    showSpinner("block")
    const inputField = document.getElementById("input-field").value;
    document.getElementById("input-field").value = "";
    document.getElementById("error").textContent = "";
    if (inputField.length === 0) {
        document.getElementById("error").innerHTML = `
        <p class="bg-danger p-2 text-center rounded text-white">Please write a book name</p>
        `;
        showSpinner("none")
        return;
    }
    createDynamicUrl(inputField);
}
// Convar url with async await
const fetchUrl = async urls => {
    const res = await fetch(urls);
    const data = await res.json();
    console.log(data);
    displayBooks(data.docs);
}
//javascript
// Create Dynamic url
const createDynamicUrl = value => {
    url = `https://openlibrary.org/search.json?q=${value}`
    fetchUrl(url);
}

// Displays data loaded from the API
const displayBooks = books => {
    if (books.length === 0) {
        document.getElementById("error").innerHTML = `
        <p class="bg-danger p-2 text-center rounded text-white">Result not found...</p>
        `;
        showSpinner("none")
    }
    console.log(books);
    console.log(books.length);
    const resultContainer = document.getElementById("display-result");

}