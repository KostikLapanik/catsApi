import { drawImage } from './modules/drawImage.js';

drawImage();

const generateButton = document.querySelector('.generate-button');
generateButton.addEventListener('click', drawImage);