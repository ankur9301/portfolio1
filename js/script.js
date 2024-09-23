// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {


    // sticky header


    // remove toggle icon and navbar when click navbar links (scroll)


    // animation footer on scroll
    // font-family: 'Ramabhadra', sans-serif;

    // @import url('https://fonts.googleapis.com/css2?family=Ramabhadra&display=swap');

}

// Array of images
const images = [
    "images/hackathon.png",
    "images/civic_hackathon.jpg",
    "images/pit_convening.jpg"
];

// Select elements
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const close = document.querySelector('.close');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let currentIndex = 0;

// Function to show lightbox
function showLightbox(index) {
    currentIndex = index;
    lightbox.style.display = 'flex';
    lightboxImage.src = images[currentIndex];
}

// Function to hide lightbox
function hideLightbox() {
    lightbox.style.display = 'none';
}

// Function to show next image
function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImage.src = images[currentIndex];
}

// Function to show previous image
function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImage.src = images[currentIndex];
}

// Event listeners
document.querySelectorAll('.highlight-box a').forEach((photo, index) => {
    photo.addEventListener('click', (e) => {
        e.preventDefault();
        showLightbox(index);
    });
});

close.addEventListener('click', hideLightbox);
next.addEventListener('click', showNextImage);
prev.addEventListener('click', showPrevImage);

window.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        hideLightbox();
    }
});




// Function to handle active state
function setActiveNavLink() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    let currentSectionId = "";

    // Loop through each section to determine which is in view
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Check if the section is in the current view
        if (pageYOffset >= sectionTop - 50 && pageYOffset < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute("id");
        }
    });

    // Update the active link based on the current section
    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === currentSectionId) {
            link.classList.add("active");
        }
    });
}

// Call the function when the page is scrolled
window.addEventListener("scroll", setActiveNavLink);
