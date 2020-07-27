//Geonames url
// let geoURL = 'http://api.geonames.org/postalCodeSearchJSON?placename=';
const geonames = 'http://api.geonames.org/searchJSON?maxRows=10&operator=OR&q=';
const userName = '&username=omar_k';


//GET city data from Geonames
const getCity = async (city) => {
    //set variable to hold fetch calls return
    const res = await fetch(geonames + city + userName)
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
    getCity
}