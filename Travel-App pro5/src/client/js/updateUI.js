// import { getWeather } from "./getWeather.js";
// import { getImage } from "./pixabay.js";
import 'babel-polyfill';
import { formHandler } from "./formHandler";

const pixabayUrl = 'https://pixabay.com/api/?key=';
const pixabayApiKey = '17470172-9a2581dc72945643159f2604b';
const printButton = document.querySelector("#print");
const deleteButton = document.querySelector("#delete");
const form =document.querySelector("#next");
const result = document.querySelector("#results");

document.addEventListener('DOMContentLoaded', function () {

  printButton.addEventListener('click', function (e) {
    window.print();
  });
  
  deleteButton.addEventListener('click', function (e) {
    result.classList.add("hide");
  })


});
 const updateUI = async (data) => {
    const request = await fetch(pixabayUrl + pixabayApiKey + "&q=" + data.country + '&image_type=photo');
      result.classList.remove("hide");


    // result.classList.remove("hide");
    try {
        const pixabayImg = await request.json();

    document.getElementById('img').setAttribute('src', pixabayImg.hits[0].webformatURL);
    document.getElementById('countryplace').innerHTML = data.country;
    document.getElementById('place').innerHTML = data.city;
    document.getElementById('weatherplace').innerHTML = data.temperature;
    document.getElementById('description').innerHTML = data.weatherDesc;
    }
    catch (error) {
      console.log("error", error);
    }
  }


export {
    updateUI
}