//WeatherBit url
const weather = 'https://api.weatherbit.io/v2.0/forecast/daily?'
const weatherkey = '&key=8d2a57b192304c73bf359fa76f82bc40';

//GET weather data from weatherBit
const getWeather = async (lat, lng, date) => {
    //set variable to hold fetch calls return
    const res = await fetch(weather + "lat=" + lat + "&lon=" + lng + weatherkey);
    try {
        //retrieve data in json format
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export{
    getWeather
}
