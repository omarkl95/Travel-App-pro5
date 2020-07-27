import 'babel-polyfill';
// import { getWeather } from "./getWeather.js";
// import { getPics } from "./pixabay.js";
// import { getCity } from "./geonames.js";
import { updateUI } from "./updateUI.js";


const printButton = document.querySelector("#print");
const deleteButton = document.querySelector("#delete");
const form =document.querySelector("#next");
const result = document.querySelector("#results");

var data = {};
document.addEventListener('DOMContentLoaded', function () {
  form.addEventListener('click', formHandler);

  printButton.addEventListener('click', function (e) {
    window.print();
  });
  
  deleteButton.addEventListener('click', function (e) {
    result.classList.add("hide");
  })


});


async function formHandler() {

  const city = document.getElementById('destination').value;
  await fetch(`http://localhost:8500/geoname?city=${city}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
  .then(res => res.json()) 
  .then(async res => {
    data.country = res.countryName;
    data.city = res.name;
    data.region = res.region;
    await getWeather(`http://localhost:8500/forecast?lat=${res.lat}&long=${res.lng}`)
  })
 .catch(err => {
    console.log(err)
  })
}

const getWeather = async (url) => {
  await fetch(url , {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
  .then(res => res.json()) 
  .then(async res => {
    data.temperature = res.data[0].temp;
    data.weatherDesc = res.data[0].weather.description;
  
  })
  .catch(err => {
    console.log(err)
  })
}


export const main = async () => {
  const destination = document.getElementById('destination').value;
  const start = document.getElementById('start').value;
  const end = document.getElementById('end').value;
  if(!start  && !end ){
    alert ('Missing values')
  } else {
    
    await formHandler();

    document.getElementById('leavingd').innerHTML = start;
  document.getElementById('returningd').innerHTML = end;
    updateUI(data);
  }
}




export {
  // getCity,
  // postData,
  // getWeather,
  // getImage,
}
