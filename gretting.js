const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greetings = document.querySelector(".js-greetings");

const USER_LOCALSTORAGE = "currentUser",
    SHOWING_CLASSNAME = "showing";

function saveName(userName) {
    localStorage.setItem(USER_LOCALSTORAGE, userName);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CLASSNAME);
    form.addEventListener("submit", handleSubmit)
}

function paintGreeting(userName) {
    form.classList.remove(SHOWING_CLASSNAME);
    greetings.classList.add(SHOWING_CLASSNAME);
    greetings.innerText = `Hello ${userName}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LOCALSTORAGE);
    if(currentUser === null){
        askForName()
    } else {
        paintGreeting(currentUser)
    }
}

function init() {
    loadName();
};

init();
