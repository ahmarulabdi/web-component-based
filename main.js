let imageFigureElement = document.querySelector("image-figure");
     
// Jika tidak tersedia pada DOM maka dibuat secara sintaksis.
if (!imageFigureElement) {
 imageFigureElement = document.createElement("image-figure");
 document.body.appendChild(imageFigureElement);
}