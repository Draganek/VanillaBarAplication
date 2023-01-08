"use strict";
import navigation from "../scripts/navigation.js";

const LOGIN_STATUSES = {
    IN_PROGRESS: 'Logowanie',
    MISSING_INPUT: 'Uzupełnij pola logowania',
    INVALID_DATA: 'Błędne dane',
    EASTER_EGG: 'Chłop co wpisał admin admin xdddd'
}

export class Login {
    currentLoginStatus;
    #tempateUrl = 'login/login.html';

    load(anchor) {
        $(anchor).load(this.#tempateUrl, () => this.#setup());
    }

    #setup() {
        let login_button = document.getElementById("submit_button");
        login_button.addEventListener("click", async () => await this.login_user(user_login, user_password));
    }

    async login_user(login, password) {
        this.currentLoginStatus = document.getElementById("login_info");
        let response = await fetch('login/users.json');
        let object = await response.json();
        if (login.value === "admin" && password.value === "admin") {
            this.currentLoginStatus.value = LOGIN_STATUSES.EASTER_EGG;
            return;
        }
        if (login.value === "" || password.value === "") {
            this.currentLoginStatus.value = LOGIN_STATUSES.MISSING_INPUT;
            return;
        }
        for (let check of object.account) {
            if (check.login !== login.value) {
                this.currentLoginStatus.value = LOGIN_STATUSES.INVALID_DATA;
                continue;
            }
            if (check.password !== password.value) {
                continue;
            }
            this.currentLoginStatus.value = LOGIN_STATUSES.IN_PROGRESS;
            setTimeout(() => {
                this.login_success();
            }, 1000)
            return;
        }
    }

    login_success() {
        navigation.topnav();
        navigation.home();
    }
}
