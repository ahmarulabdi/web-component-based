let imageFigureElement = document.querySelector("image-figure");

// Jika tidak tersedia pada DOM maka dibuat secara sintaksis.
if (!imageFigureElement) {
    imageFigureElement = document.createElement("image-figure");
    imageFigureElement.setAttribute("src", "kodingit-logo.png");
    imageFigureElement.setAttribute("alt", "Koding IT logo");
    imageFigureElement.setAttribute("caption", "Huruf g dalam logo kodingit");
    document.body.appendChild(imageFigureElement);
}

// mengubah/manambahkan nilai attribute caption.
setTimeout(() => {
    imageFigureElement.setAttribute("caption", "Gambar 1");
}, 1000);