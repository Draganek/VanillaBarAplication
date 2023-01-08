export class News {
    #templateUrl = 'news/news.html';
    load(anchor) {
        $(anchor).load(this.#templateUrl);
    }
}