//define our constants
const myKey = "";
const searchField = document.getElementById("input-box");

//listen to click events of the keyboard
const fireSearch = document.getElementById("submit-btn");
fireSearch.addEventListener("click", (e) => {
  console.log(searchField.value.toLowerCase());
  
  const URL = `https://geo.ipify.org/api/v1?apiKey={myKey}&ipAddress={searchField}`;
  
  //make an axios get request
  axios
    .get(URL)
    .then((res) => {})
    .error((err) => {
      console.log(err);
    });
});

//create a function that appends the main-area divs with search results.
