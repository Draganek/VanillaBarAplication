import { About } from "../about/about.js";
import { Contact } from "../contact/contact.js";
import { DrinkList } from "../drink-list/drink-list.js";
import { Home } from "../home/home.js";
import { Login } from "../login/login.js";
import { News } from "../news/news.js";
import { Topnav } from "../topnav/topnav.js";

class Navigation {
    constructor() {
        this.loginView = new Login();
        this.homeView = new Home();
        this.newsView = new News();
        this.contactView = new Contact();
        this.aboutView = new About();
        this.drinkListView = new DrinkList();
        this.topnavView = new Topnav();
    }

    login() {
        this.loginView.load('main');
    }

    home() {
        this.homeView.load('main');
    }

    news() {
        this.newsView.load('main');
    }

    contact() {
        this.contactView.load('main');
    }

    about() {
        this.aboutView.load('main');
    }

    drinkList() {
        this.drinkListView.load('main');
    }

    topnav() {
        this.topnavView.load('header');
    }

}

const navigation = new Navigation();

export default navigation;