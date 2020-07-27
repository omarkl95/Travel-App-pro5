// const pixakey = "key=17470172-9a2581dc72945643159f2604b";
// const pixabay = "https://pixabay.com/api/?";

//GET image data from Pixabay
const getImage = async (pixabayUrl,pixabayApiKey,city) => {
    //set variable to hold fetch calls return
    const res = await fetch(pixabayUrl + pixabayApiKey + "&q=" + city + '&image_type=photo');
    try {
        //retrieve data in json format
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}





export {
getImage}