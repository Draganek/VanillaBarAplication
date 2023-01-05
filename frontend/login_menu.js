"use strict";

const LoginStatuses = {
    IN_PROGRESS: 'Logowanie',
    MISSING_INPUT: 'Uzupełnij pola logowania',
    INVALID_DATA: 'Błędne dane',
    EASTER_EGG: 'Chłop co wpisał admin admin xdddd'
}

let login_button = document.getElementById("submit_button");
let user_login2 = document.getElementById("user_login");
let user_password2 = document.getElementById("user_password");
let login_status = document.getElementById("login_info");

login_button.addEventListener("click", () => login_user(user_login, user_password));

async function login_user(login, password) {
    let response = await fetch(`users.json`);
    let object = await response.json();
    if (login.value === "admin" && password.value === "admin") {
        login_status.value = LoginStatuses.EASTER_EGG;
        return;
    }
    if (login.value === "" || password.value === "") {
        login_status.value = LoginStatuses.MISSING_INPUT;
        return;
    }
    for (let check of object.account) {
        if (check.login !== login.value) {
            login_status.value = LoginStatuses.INVALID_DATA;
            continue;
        }
        if (check.password !== password.value) {
            continue;
        }
        login_status.value = LoginStatuses.IN_PROGRESS;
        setTimeout(() => {
            document.getElementById("home_page").style.display = 'block';
            document.getElementById("backstage").style.display = 'block';
            document.getElementById("login_page").style.display = 'none';
        }, 1000)
    }
}
