export function setToLocalStorage(keyName, keyValue){
    localStorage.setItem(keyName, JSON.stringify(keyValue));
}

export function getFromLocalStorage(keyName){
    const result = localStorage.getItem(keyName);
    const parsedResult = JSON.parse(result) || null;
    return parsedResult
}