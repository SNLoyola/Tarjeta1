let currentImageIndex = 0;
const images = document.querySelectorAll('.image-slider img');
const totalImages = images.length;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

function nextImage(event) {
    event.stopPropagation();
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    showImage(currentImageIndex);
}

function prevImage(event) {
    event.stopPropagation();
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    showImage(currentImageIndex);
}

function autoRotateImages() {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    showImage(currentImageIndex);
}

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        card.classList.toggle('active');
    });
});

setInterval(autoRotateImages, 10000); // Cambia la imagen cada 10 segundos

showImage(currentImageIndex); // Muestra la primera imagen al cargar la página
