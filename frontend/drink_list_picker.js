"use strict";



async function login_user() {
    let drink_holder = document.getElementById("drink_list_show");
    

    let response = await fetch(`menulist.json`);
    let obiekt = await response.json();
    for (let element of obiekt.coctails) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let name = document.createElement("a")
        name.textContent = element.name;
        name.className = "drink_name"
        div.className = "drink_element";
        img.className = "drink_img";
        img.src = element.link;
        div.append(img);
        div.append(name);
        drink_holder.append(div);
    }
}
login_user();