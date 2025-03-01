import { API_TOKEN } from './constants.js';
import { URL } from './constants.js';

const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": API_TOKEN
});

const requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};

export async function fetchCatImage() {
    try {
        const responce = await fetch(URL, requestOptions);

        if (!responce.ok) {
            throw new Error('Responce error')
        }

        const result = await responce.json();

        if (!result) {
            throw new Error('Error in getting responce.json()!')
        }

        const catInfo = result[0];

        if(!catInfo){
            throw new Error('Error in catInfo!');
        }

        return catInfo
    } catch (error) {
        console.error(error)
    }
}