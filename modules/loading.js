export function startLoading() {
    const container = document.querySelector('.container');

    let newLoader = document.createElement('div');
    newLoader.classList.add('dot-spinner');

    for (let i = 0; i < 8; i++) {
        let newSpinnerDot = document.createElement('div');
        newSpinnerDot.classList.add('dot-spinner__dot');
        newLoader.append(newSpinnerDot);
    }

    container.prepend(newLoader)
}

export function stopLoading() {
    let oldLoader = document.querySelector('.dot-spinner')

    if (!oldLoader) {
        return
    }

    oldLoader.remove();
}
