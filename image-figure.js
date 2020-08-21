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
}

customElements.define('image-figure', ImageFigure);