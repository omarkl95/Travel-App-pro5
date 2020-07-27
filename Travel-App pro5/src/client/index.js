import {main} from './js/formHandler';
import { getWeather } from './js/getWeather'
import { getImage } from './js/pixabay'
import { getCity } from './js/geonames'
import './styles/main.scss';

document.getElementById('next').addEventListener('click', main)



export { main,getWeather,getImage,getCity };