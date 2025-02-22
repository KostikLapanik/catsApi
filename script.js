import { fetchCatData } from './modules/fetchData.js'
import { drawImage } from './modules/fetchData.js';

let catUrl = localStorage.getItem('catImageUrl');

if (catUrl) {
    drawImage(catUrl);
}

const generateButton = document.querySelector('.generate-button');
generateButton.addEventListener('click', fetchCatData)