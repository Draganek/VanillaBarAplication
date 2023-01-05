"use strict";

async function allDrinkChoices() {
    let drink_list_page = document.getElementById("drink_list_page");
    let created_list = document.getElementById("drink_list_show");
    try {
        drink_list_page.removeChild(created_list);
    } catch { }
    let div_holder = document.createElement("div");
    div_holder.className = "drink_label";
    div_holder.id = "drink_list_show";
    drink_list_page.append(div_holder);
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
        div.addEventListener("click", () => drinkChoice(name.textContent, "drinklist", "drink_list_page", "cocktailShowPage"));
        div.append(img);
        div.append(name);
        drink_holder.append(div);
    }
}

async function drinkChoice(drinkName, menuBar, previousView, cocktailView){
    document.getElementById(menuBar).classList.value = "hover";
    document.getElementById(previousView).style.display='none';
    document.getElementById(cocktailView).style.display='block';

    let drink_list_page = document.getElementById("drink_list_page");
    let created_list = document.getElementById("drink_list_show");
    drink_list_page.removeChild(created_list);
    let div = document.createElement("div");
    div.className = "drink_window";
}
