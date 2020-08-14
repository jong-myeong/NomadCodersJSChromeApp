const userNameForm = document.querySelector(".js-form"),
    inputName = userNameForm.querySelector("input"),
    greetings = document.querySelector(".js-greetings");

// local storage에 저장한 사용자 이름 초기화
// & 사용자 이름을 받으면 안 보이게 하기 위한 변수 초기화
const USER_LOCALSTORAGE = "currentUser",
    SHOWING_CLASSNAME = "showing";

// 사용자 이름 저장 함수
function saveName(userName) {
    localStorage.setItem(USER_LOCALSTORAGE, userName);
}

// 입력 받은 사용자 이름을 저장하고 화면에 보이게 하는 함수
function handleSubmit(event) {
    event.preventDefault();
    const userNameValue = inputName.value;
    paintGreeting(userNameValue);
    saveName(userNameValue);
}

// Hello와 사용자 이름을 보여주기 위해 showing 클래스를 더하는 함수
function askForName() {
    userNameForm.classList.add(SHOWING_CLASSNAME);
    userNameForm.addEventListener("submit", handleSubmit)
}

// 사용자 이름을 받는 form을 제거하고
// 'Hello 사용자 이름' 을 출력하는 함수
function showGreeting(userName) {
    userNameForm.classList.remove(SHOWING_CLASSNAME);
    greetings.classList.add(SHOWING_CLASSNAME);
    greetings.innerText = `Hello ${userName}`;
}

// 사용자 이름을 받은 적 없으면 이름을 물어보는 함수 실행
// local storage에 사용자 이름이 있으면 환영 문자 출력 함수 실행
function loadName() {
    const currentUser = localStorage.getItem(USER_LOCALSTORAGE);
    if(currentUser === null){
        askForName()
    } else {
        showGreeting(currentUser)
    }
}

function init() {
    loadName();
};

init();
