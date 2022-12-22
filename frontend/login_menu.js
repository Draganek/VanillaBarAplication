"use strict";

// ======================================== Logowanie do strony ======================================== //

let login_button = document.getElementById("submit_button");
let user_login2 = document.getElementById("user_login");
let user_password2 = document.getElementById("user_password");
let login_status = document.getElementById("login_info");

login_button.addEventListener("click", () => login_user(user_login,user_password));

async function login_user(login, password){
    let response = await fetch(`users.json`);
    let obiekt = await response.json();
        if (login.value === "admin" && password.value === "admin"){
            login_status.value = "Chłop co wpisał admin admin xdddd"
            return;
        }
        if (login.value === "" || password.value === ""){
            login_status.value = "Uzupełnij pola logowania"
            return;
        }
        for (let check of obiekt.account){
        
            if (check.login === login.value){
                if(check.password === password.value){
                    login_status.value = "Logowanie..."
                    setTimeout(() => {
                        document.getElementById("home_page").style.display='block';
                        document.getElementById("backstage").style.display='block';
                        document.getElementById("login_page").style.display='none';
                    },1000)
                    return;
                }
                login_status.value = "Błędne hasło"
                return;
            }
        }
        login_status.value = "Nie ma takiego użytkownika"
}