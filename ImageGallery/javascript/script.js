let currentIndex = 1;
const images = [
  '../images/image1.jpg',
  '../images/image2.jpg',
  '../images/image3.jpg',
  '../images/image4.jpg',
  '../images/image5.jpg'
];
let slideShowInterval;
let isPlaying = true;

// Show image and update active thumbnail
function showImage(index) {
  const galleryImage = document.getElementById("gallery-image");
  galleryImage.src = images[index - 1];

  const thumbnails = document.querySelectorAll(".thumbnail");
  thumbnails.forEach((thumbnail, idx) => {
    if (index - 1 === idx) {
      thumbnail.classList.add("active-thumbnail");
    } else {
      thumbnail.classList.remove("active-thumbnail");
    }
  });
}

// Navigate images
function nextImage() {
  currentIndex = (currentIndex < images.length) ? currentIndex + 1 : 1;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex > 1) ? currentIndex - 1 : images.length;
  showImage(currentIndex);
}

function currentImage(index) {
  currentIndex = index;
  showImage(currentIndex);
}

// Full-screen modal
function openModal() {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-content");
  modalImage.src = images[currentIndex - 1];
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Automatic slideshow
function startSlideshow() {
  slideShowInterval = setInterval(nextImage, 3000);
}

function stopSlideshow() {
  clearInterval(slideShowInterval);
}

function toggleSlideshow() {
  const playPauseBtn = document.getElementById("play-pause-btn");
  if (isPlaying) {
    stopSlideshow();
    playPauseBtn.textContent = "Play Slideshow";
  } else {
    startSlideshow();
    playPauseBtn.textContent = "Pause Slideshow";
  }
  isPlaying = !isPlaying;
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
  if (event.key === "ArrowLeft") {
    prevImage();
  } else if (event.key === "ArrowRight") {
    nextImage();
  }
});

// Initialize the gallery and start the slideshow
showImage(currentIndex);
startSlideshow();
