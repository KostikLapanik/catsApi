import { getFromLocalStorage, setToLocalStorage } from './index.js';

const container = document.querySelector('.container');
const closeButton = document.querySelector('.close-button');

const catNameElem = document.querySelector('#cat-name');
const catDescriptionElem = document.querySelector('#cat-description');
const catLifeSpanElem = document.querySelector('#cat-life-span');
const catWikipediaLink = document.querySelector('#cat-wikipedia-link');

export function setCatInfo(catInfo, catImage){
    const isContainerActive = getFromLocalStorage('isContainerActive');
    
    if(isContainerActive){
        container.classList.add('active');
    }

    const breeds = catInfo.breeds[0];
    const catName = breeds.name;
    const catDescription = breeds.description;
    const catLifeSpan = breeds.life_span;
    const catWikipediaUrl = breeds.wikipedia_url;

    catNameElem.innerText = catName;
    catDescriptionElem.innerText = catDescription;
    catLifeSpanElem.innerText = catLifeSpan;
    catWikipediaLink.href = catWikipediaUrl;

    catImage.addEventListener('dblclick', () => {
        container.classList.add('active');
        setToLocalStorage('isContainerActive', true);
    })

    closeButton.addEventListener('click', () => {
        container.classList.remove('active');
        setToLocalStorage('isContainerActive', false);
    })
}