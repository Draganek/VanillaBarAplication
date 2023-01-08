export class About {
    #templateUrl = 'about/about.html';
    load(anchor) {
        $(anchor).load(this.#templateUrl);
    }
}