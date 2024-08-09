import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();

  //Updates the DOM with the cities
  if (cities) {
    cities.forEach((key) => {
      addCityToDOM(key.id, key.city, key.description, key.image);
    });
  }
}

//Implementation of fetch call
async function fetchCities() {

  try {
console.log(config.backendEndpoint)
    const response = await fetch(`${config.backendEndpoint}/cities`);
  
    const data = await response.json();

    console.log(data);

    return data;

  } catch (error) {

    return null 
  }
}


  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data



//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM
  // Get the container element where you want to add the city details
  let card = document.getElementById("data");
  let content = document.createElement("div");
  content.className = "col-6 col-md-4 col-lg-3 mb-4";
  content.innerHTML =  `
  <a href="pages/adventures/?city=${id}" id="${id}">
    <div class="tile">
      <div class="tile-text text-center">
        <h5>${city}</h5>
        <p>${description}</p>
      </div>
    <img class="img-responsive" src="${image}">
    </div>
  </a>
  `;
    card.appendChild(content); 

}

export { init, fetchCities, addCityToDOM };
