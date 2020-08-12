const body = document.querySelector("body");

const TOTAL_IMG_NUMBER = 6;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage")
    body.appendChild(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * TOTAL_IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();