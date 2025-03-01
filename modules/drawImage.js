import { startLoading, stopLoading } from './index.js'
import { fetchCatImage } from './index.js';
import { setToLocalStorage, getFromLocalStorage } from './index.js';
import { LOCAL_STORAGE_CAT_INFO_NAME } from './constants.js';
import { setCatInfo } from './index.js';

const catWrapper = document.querySelector('.cat-image-wrapper');

let catInfo;
let oldCatImage;

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

    setCatInfo(catInfo, newCatImage);
}