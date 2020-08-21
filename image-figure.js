class ImageFigure extends HTMLElement {
    constructor() {
        super();
        console.log('constructor image figure');
    }

    connectedCallback() {
        console.log('on connected');
        this.render();
    }

    render() {
        this.src = this.getAttribute("src") || null;
        this.alt = this.getAttribute("alt") || null;
        this.caption = this.getAttribute("caption") || null;
        
        this.innerHTML = `
            <figure>
            <img src="${this.src}"
                alt="${this.alt}">
            <figcaption>${this.caption}</figcaption>
            </figure>
        `;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`on attr ${name} changed from ${oldValue} into ${newValue}`);
        this[name] = newValue;
        this.render();
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