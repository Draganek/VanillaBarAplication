"use strict";
export class DrinkList {
    #templateUrl = 'drink-list/drink-list.html';
    load(anchor) {
        $(anchor).load(this.#templateUrl, async () => {
            await this.all_drink_choices();
        });
    }
    async all_drink_choices() {
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
        let response = await fetch('drink-list/menulist.json');
        let obiekt = await response.json();
        for (let element of obiekt.cocktails) {
            let div = document.createElement("div");
            let img = document.createElement("img");
            let name = document.createElement("a")
            name.textContent = element.name;
            name.className = "drink_name"
            div.className = "drink_element";
            img.className = "drink_img";
            img.src = element.link;
            div.addEventListener("click", () => this.drink_choice(name.textContent));
            div.append(img);
            div.append(name);
            drink_holder.append(div);
        }
    }

    async drink_choice() {
        let drink_list_page = document.getElementById("drink_list_page");
        let created_list = document.getElementById("drink_list_show");
        drink_list_page.removeChild(created_list);
        let div = document.createElement("div");
        div.className = "drink_window";
    }
}
