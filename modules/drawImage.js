import { startLoading } from './index.js'
import { stopLoading } from './index.js';
import { fetchCatImage } from './index.js';
import { setToLocalStorage } from './index.js';
import { getFromLocalStorage } from './index.js';
import { LOCAL_STORAGE_CAT_INFO_NAME } from './constants.js';

const catWrapper = document.querySelector('.cat-image-wrapper');
const container = document.querySelector('.container');
const closeButton = document.querySelector('.close-button');

let catInfo;
let oldCatImage;

const catNameElem = document.querySelector('#cat-name');
const catDescriptionElem = document.querySelector('#cat-description');
const catLifeSpanElem = document.querySelector('#cat-life-span');
const catWikipediaLink = document.querySelector('#cat-wikipedia-link');

export async function drawImage() {
    oldCatImage = document.querySelector('.cat-image');

    startLoading();

    if (oldCatImage) {
        oldCatImage.remove();
        catInfo = await fetchCatImage();
    } else {
        catInfo = getFromLocalStorage(LOCAL_STORAGE_CAT_INFO_NAME) || await fetchCatImage();
    }

    setToLocalStorage(LOCAL_STORAGE_CAT_INFO_NAME, catInfo);

    let catUrl = catInfo.url;

    let newCatImage = document.createElement('img');
    newCatImage.src = catUrl
    newCatImage.classList.add('cat-image');

    stopLoading();
    catWrapper.append(newCatImage);

    const breeds = catInfo.breeds[0];
    const catName = breeds.name;
    const catDescription = breeds.description;
    const catLifeSpan = breeds.life_span;
    const catWikipediaUrl = breeds.wikipedia_url;

    catNameElem.innerText = catName;
    catDescriptionElem.innerText = catDescription;
    catLifeSpanElem.innerText = catLifeSpan;
    catWikipediaLink.href = catWikipediaUrl;

    newCatImage.addEventListener('dblclick', () => {
        container.classList.add('active');
    })

    closeButton.addEventListener('click', () => {
        container.classList.remove('active');
    })
}