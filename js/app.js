// onclick function
const searchClick = () => {
    const inputField = document.getElementById("input-field").value;
    document.getElementById("input-field").value = "";
    createDynamicUrl(inputField);
}
// Convar url with async await
const fetchUrl = async urls => {
    const res = await fetch(urls);
    const data = await res.json();
    console.log(data);
    console.log(data.docs);
}
//javascript
// Create Dynamic url
const createDynamicUrl = value => {
    url = `https://openlibrary.org/search.json?q=${value}`
    fetchUrl(url);
}