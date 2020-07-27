// configuring env
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const express = require('express');
const app = express();
require('babel-polyfill');
const path = require('path');
const userName= 'omar_k';
const weatherkey = '8d2a57b192304c73bf359fa76f82bc40';
const geonames = 'http://api.geonames.org/searchJSON?maxRows=10&operator=OR&q=';
const weather = 'https://api.weatherbit.io/v2.0/forecast/daily?lat=';
const restCountries='https://restcountries.eu/rest/v2/alpha/col'
// const data = {};
const data = [];





app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));
app.use(bodyParser.urlencoded({extended: true,}));

app.get('/', function(req, res) {
  res.sendFile(path.resolve('dist/index.html'))
})

//  test route
app.get('/save', function(req, res) {
  res.json({
    status : 200
  })
})

// const darkSky = async (key, lat, long, time) => {
//   const url = `'https://api.darksky.net/forecast/'${key}/${lat},${long},${time}`;

//   return await axios.get(url).then(response => {
//     return response.data.daily.data[0];
//   });
// };
// app.get('/darkSky', (req, res) => {
//   const time = req.query.time;
//   const lat = req.query.latitude;
//   const long = req.query.longitude;

//  darkSky(process.env.key, lat, long, time).then(response => {
//     res.end(JSON.stringify(response));
//   });
// });

app.get('/forecast', (req, res) => {
  const url = `${weather}${req.query.lat}&lon=${req.query.long}&key=${process.env.weatherkey}`;
  axios.get(url).then(resp => {
    res.end(JSON.stringify(resp.data));
  })
  
})





app.get('/geoname', (req, res) => {
  const url = `${geonames}${req.query.city}&name=${req.query.city}&username=${process.env.username='omar_k'}`;
  axios.get(url).then(resp => {
    res.end(JSON.stringify(resp.data.geonames[0]));
  })

})



// app.get('/restCountry', (req, res) => {
//   const url = `https://restcountries.eu/rest/v2/alpha/col`;
//   axios.get(url).then(resp => {
//     res.end(JSON.stringify(resp.data.rest[0]));
//   })

// })
app.listen(8500, () => {
  console.log('Server up on port 8500');
});


module.exports = app;