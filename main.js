let users = []

function register() {
    let fname_input = document.getElementById('fname-input').value

    let email_input = document.getElementById('email-input').value
    let password_input = document.getElementById('password-input').value
    let user = {
        fname: fname_input,

        email: email_input,
        password: password_input

    }
    users.push(user)
    localStorage.setItem("users", JSON.stringify(users))
    document.getElementById('fname-input').value = ''

    document.getElementById('email-input').value = ''
    document.getElementById('password-input').value = ''
}

function checkInputValue(value1, value2) {
    if (value1 == value2) {
        return true
    }
    return false
}

function login() {
    let email_input = document.getElementById('email-input').value
    let password_input = document.getElementById('password-input').value
    let userStorage = JSON.parse(localStorage.getItem('users'))
    for (let i = 0; i < userStorage.length; i++) {
        if (checkInputValue(email_input, userStorage[i].email)) {
            if (checkInputValue(password_input, userStorage[i].password)) {
                alert('login sucessfully!')
                return
            } else {
                alert('Wrong password!')
                return
            }
        } else {
            alert('User is not existed!')
            return
        }
    }
}
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

const swiperEl = document.querySelector("swiper-container");
swiperEl.addEventListener("autoplaytimeleft", (e) => {
    const [swiper, time, progress] = e.detail;
    progressCircle.style.setProperty("--progress", 1 - progress);
    progressContent.textContent = `${Math.ceil(time / 1000)}s`;
});