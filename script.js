import { drawImage } from './modules/index.js';

drawImage();

const generateButton = document.querySelector('.generate-button');
generateButton.addEventListener('click', drawImage);