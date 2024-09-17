let currentImageIndex = 0;
const images = [
    '../images/image1.jpg',
    '../images/image2.jpg',
    '../images/image3.jpg',
    '../images/image4.jpg',
    '../images/image5.jpg',
    '../images/image6.jpg'
];

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = images[currentImageIndex];
    lightbox.style.display = 'block';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function prevImage() {
    currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
    document.getElementById('lightbox-image').src = images[currentImageIndex];
}

function nextImage() {
    currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
    document.getElementById('lightbox-image').src = images[currentImageIndex];
}

// Add keyboard navigation
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
        prevImage();
    } else if (event.key === 'ArrowRight') {
        nextImage();
    } else if (event.key === 'Escape') {
        closeLightbox();
    }
});
