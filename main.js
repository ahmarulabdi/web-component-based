let imageFigureElement = document.querySelector("image-figure");

// Jika tidak tersedia pada DOM maka dibuat secara sintaksis.
if (!imageFigureElement) {
    imageFigureElement = document.createElement("image-figure");
    imageFigureElement.setAttribute("src", "https://i.imgur.com/iJq78XH.jpg");
    imageFigureElement.setAttribute("alt", "Dicoding Logo");
    imageFigureElement.setAttribute("caption", "Huruf g dalam logo Dicoding");
    document.body.appendChild(imageFigureElement);
}

// mengubah/manambahkan nilai attribute caption.
setTimeout(() => {
    imageFigureElement.setAttribute("caption", "Gambar 1");
}, 1000);


// menghapus imageFigureElement dari DOM
setTimeout(() => {
    imageFigureElement.remove();
}, 3000);