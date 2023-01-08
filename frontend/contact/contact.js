export class Contact {
    #templateUrl = 'contact/contact.html';
    load(anchor) {
        $(anchor).load(this.#templateUrl);
    }
}