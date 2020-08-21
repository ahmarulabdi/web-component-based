class ImageFigure extends HTMLElement {
    constructor() {
        super();
        console.log('constructor image figure');
    }

    connectedCallback() {
        console.log('on connected');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`on attr ${name} changed from ${oldValue} into ${newValue}`);
    }

    adoptedCallback() {
        console.log('on adopted callback');
    }

    disconnectedCallback() {
        console.log('on disconnected callback');
    }
    // digunakan untuk mengamati perubahan nilai attribute caption
    /* kita bisa menetapkan lebih dari satu atribut yang diamati.
       dengan memisahkan nama atribut menggunakan koma. Contoh: */
    // return ["caption", "title", "src", ...]
    static get observedAttributes() {
        return ["caption"];
    }
}

customElements.define('image-figure', ImageFigure);