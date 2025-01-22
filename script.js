// // document.addEventListener("DOMContentLoaded", () => {
// //     const popup = document.getElementById("popup");
// //     const closeButton = document.getElementById("closeButton");

// //     // Show the popup on page load
// //     popup.style.display = "block";
// //     document.body.classList.add("popup-active");

// //     // Close the popup when clicking the close button
// //     closeButton.addEventListener("click", () => {
// //         popup.style.display = "none";
// //         document.body.classList.remove("popup-active");
// //     });
// // });

// document.addEventListener("DOMContentLoaded", () => {
//     const burger = document.querySelector(".burger");
//     const navLinks = document.querySelector(".nav-links");

//     const toggleNav = () => {
//         burger.classList.toggle("active");
//         navLinks.classList.toggle("active");

//         if (navLinks.classList.contains("active")) {
//             navLinks.style.display = "flex";
//             requestAnimationFrame(() => {
//                 navLinks.style.opacity = "1";
//             });
//         } else {
//             navLinks.style.opacity = "0";
//             setTimeout(() => {
//                 navLinks.style.display = "none";
//             }, 300); // Match this with your CSS transition duration
//         }
//     };

//     burger.addEventListener("click", toggleNav);

//     navLinks.addEventListener("click", (event) => {
//         if (event.target.tagName === "A") {
//             toggleNav();
//         }
//     });
// });



document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu functionality
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('active');
    });

    // Testimonials slider
    new Swiper('.testimonials-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
});

