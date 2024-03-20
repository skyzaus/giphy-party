console.log("Let's get this party started!");

const GIFS = document.querySelector("#form");
const search = document.querySelector("#giphyinput");
const imgContainer = document.querySelector("#img-container");
const removeBtn = document.querySelector("#remove");

//function to submit when clicking search giphy
//make an event listener
GIFS.addEventListener("submit", async function (e) {
  e.preventDefault();
  //get the input value
  let searchTerm = search.value;
  //make axios request
  const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params:
      //get input val
      { q: searchTerm, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" },
  });

  createImg(res.data);
  search.value = "";
});

//HARD PART!
//function that finds a random image from the api results
function createImg(res) {
  //get data length
  let results = res.data.length;
  if (results) {
    let randomImg = Math.floor(Math.random() * results);

    let gifDiv = document.createElement("div");
    gifDiv.classList.add("col-4", "p-1");
    let img = document.createElement("img");
    img.setAttribute("src", res.data[randomImg].images.original.url);
    img.classList.add("w-100", "h-100");
    gifDiv.append(img);
    imgContainer.append(gifDiv);
  }
}
//remove button
removeBtn.addEventListener("click", function (e) {
  console.log(e.target);
  imgContainer.innerHTML = "";
});
