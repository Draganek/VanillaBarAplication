import navigation from "../scripts/navigation.js";

const TABS = [
    'home',
    'news',
    'contact',
    'about',
    'drink-list'
]

export class Topnav {
    #templateUrl = 'topnav/topnav.html';
    load(anchor) {
        $(anchor).load(this.#templateUrl, () => this.setup_navigation());
    }

    setup_navigation() {
        $('.topnav a').on('click', (e) => {
            this.activatePage(e.target.id);
        });
        $('#home').on('click', () => navigation.home());
        $('#news').on('click', () => navigation.news());
        $('#contact').on('click', () => navigation.contact());
        $('#about').on('click', () => navigation.about());
        $('#drink-list').on('click', () => navigation.drinkList());
    }

    activatePage(pageToActivate) {
        for (const tab of TABS) {
            if (tab === pageToActivate) {
                document.getElementById(tab).classList.value = 'active';
            } else {
                document.getElementById(tab).classList.value = 'hover';
            }
        }
    }
}