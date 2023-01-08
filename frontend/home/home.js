export class Home {
    #templateUrl = 'home/home.html';
    load(anchor) {
        $(anchor).load(this.#templateUrl);
    }
}