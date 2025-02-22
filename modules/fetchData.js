import { API_TOKEN } from './constants.js';
import { URL } from './constants.js';
import { startLoading } from './loading.js'
import { stopLoading } from './loading.js';

const container = document.querySelector('.container');

export async function fetchCatData() {
    const headers = new Headers({
        "Content-Type": "application/json",
        "x-api-key": API_TOKEN
    });

    const requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };

    try {
        const responce = await fetch(URL, requestOptions);

        if (!responce.ok) {
            throw new Error('Responce error')
        }

        const result = await responce.json();

        if (!result) {
            throw new Error('Error in getting responce.text()')
        }

        let catUrl = await result[0].url;

        if (!catUrl) {
            throw new Error('Error in getting catUrl')
        }

        localStorage.setItem('catImageUrl', catUrl)
        drawImage(catUrl)

    } catch (error) {
        console.error(error)
    }
}

export async function drawImage(url) {
    let oldCatImage = document.querySelector('.cat-image');

    if (oldCatImage) {
        startLoading();
        oldCatImage.remove();
    }

    let newCatImage = document.createElement('img');
    newCatImage.src = url;
    newCatImage.classList.add('cat-image');

    await new Promise((resolve, reject) => {
        newCatImage.onload = resolve;
        newCatImage.onerror = reject;
    })
        .catch(error => console.error(error))

    stopLoading();
    container.prepend(newCatImage);
}