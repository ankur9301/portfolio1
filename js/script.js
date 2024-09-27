// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })

    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Array of images
const images = [
    "images/hackathon.png",
    "images/civic_hackathon.jpg",
    "images/pit_convening.jpg",
    "images/nasa.jpeg"
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

// Event listeners for clicking on images
document.querySelectorAll('.highlight-image').forEach((image, index) => {
    image.addEventListener('click', () => {
        showLightbox(index);
    });
});

// Event listeners for the lightbox controls
close.addEventListener('click', hideLightbox);
next.addEventListener('click', showNextImage);
prev.addEventListener('click', showPrevImage);

window.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        hideLightbox();
    }
});

// Web3Forms script for handling form submission
document.getElementById("contact-form").addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent form submission

    const form = e.target;
    const formData = new FormData(form);

    try {
        // Send the form data to Web3Forms
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        if (response.ok) {
            // Create the thank-you message page
            document.body.innerHTML = `
                <div class="thank-you-message">
                    <h2>Thank You!</h2>
                    <p>Your message has been sent successfully.</p>
                    <button onclick="window.location.reload()">
                        Go Back
                    </button>
                </div>
            `;
        } else {
            alert("There was an issue submitting your form. Please try again.");
        }
    } catch (error) {
        alert("An error occurred. Please try again.");
    }
});
