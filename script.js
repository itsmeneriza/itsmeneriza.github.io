console.log('Welcome to my website!');

const galleryImages = document.querySelector('.gallery-images');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const closeLightbox = document.querySelector('.close-lightbox');
const images = galleryImages.querySelectorAll('img');

let currentIndex = 0;
// HOME


// GALLERY
// Event listener to each image in the gallery
galleryImages.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        const imgSrc = e.target.src;
        currentIndex = Array.prototype.indexOf.call(images, e.target);
        lightboxImage.src = imgSrc;

        // Add sliding effect
        lightbox.style.transform = 'translateX(100%)';
        lightbox.style.transition = 'transform 0.5s ease-in-out';
        lightbox.style.display = 'flex';

        // Wait for the transition to finish before setting the transform to 0
        setTimeout(() => {
            lightbox.style.transform = 'translateX(0)';
        }, 500);
    }
});

// Event listener to the lightbox container (to navigate through images)
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        // Do nothing if the lightbox container is clicked
    } else if (e.target.classList.contains('lightbox-image')) {
        // Navigate to the next image when the right side is clicked
        if (e.offsetX > lightboxImage.offsetWidth / 2) {
            currentIndex = (currentIndex + 1) % images.length;
            lightboxImage.src = images[currentIndex].src;
        }
        // Navigate to the previous image when the left side is clicked
        else {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            lightboxImage.src = images[currentIndex].src;
        }
    }
});

// Event listener to the close button
closeLightbox.addEventListener('click', () => {
    lightbox.style.transform = 'translateX(100%)';
    lightbox.style.transition = 'transform 0.5s ease-in-out';

    // Transition to finish before hiding the lightbox
    setTimeout(() => {
        lightbox.style.display = 'none';
    }, 500);
});