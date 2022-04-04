// Navigation Bar Effect On Scroll
window.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})

// Service Section -Model
const serviceModels = document.querySelectorAll(".service-model");
const learnMoreBtns = document.querySelectorAll(".learn-more-btn");
const modelCloseBtns = document.querySelectorAll(".model-close-btn");

var model = function(modelClick){
  serviceModels[modelClick].classList.add("active");
}

learnMoreBtns.forEach((learnMoreBtn, i) => {
  learnMoreBtn.addEventListener("click", () => {
    model(i);
  })
})

modelCloseBtns.forEach((modelCloseBtn) => {
  modelCloseBtn.addEventListener("click", () => {
    serviceModels.forEach((modalView) => {
      modalView.classList.remove("active");
    });
  });
}); 

// Portfolio Section -model
const portfolioModels = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModel = function(modelClick){
  portfolioModels[modelClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
  imgCard.addEventListener("click", () => {
    portfolioModel(i);
  })
})

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
  portfolioCloseBtn.addEventListener("click", () => {
    portfolioModels.forEach((portfolioModalView) => {
      portfolioModalView.classList.remove("active");
    });
  });
});

// Our Clients -Swiper
var swiper = new Swiper(".client-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
  scrollTopBtn.classList.toggle("active", window.scrollY > 500);
})

scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// Navigation menu items active on page scroll

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    let SectionHeight = current.offsetHeight;
    let SectionTop = current.offsetTop - 50;
    let id = current.getAttribute("id");

    if(scrollY > SectionTop && scrollY <= SectionTop + SectionHeight){
      document.querySelector(".nav-itemsa[href*=" + id +"]").classList.add("active");
    }
    else {
      document.querySelector(".nav-itemsa[href*=" + id +"]").classList.remove("active");
    }
  });
})

// Website dark / Light theme
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeBtn.classList.toggle("sun");

  localStorage.setItem("saved-theme", getCurrentTheme());
  localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
  document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
  themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

// Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
})

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
})

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
      navigation.classList.remove("active");
    })
})

// Scroll Revel Animation
// Common revel options to create revel animations
ScrollReveal({ 
  // reset: true,
  distance: '60px',
  duration: 2500, 
  delay: 100
});

// Target elements, and specify to create revel animations
ScrollReveal().reveal('.home .info h2, .section-title-one, section-title-two', {delay: 500, origin: 'left'});
ScrollReveal().reveal('.home .info p, .about-info .btn', {delay: 600, origin: 'right'});
ScrollReveal().reveal('.home .info .btn', {delay: 700, origin: 'bottom'});
ScrollReveal().reveal('.home-img, .about-img', {delay: 500, origin: 'bottom'});
ScrollReveal().reveal('.about, .description, .contact-right', {delay: 600, origin: 'right'});
ScrollReveal().reveal('.about, .professional-list li', {delay: 500, origin: 'right', interval:200});
ScrollReveal().reveal('.skills-description, .service-description, .contact-card, .client-swiper, .contact-left h2', {delay: 700, origin: 'left'});
ScrollReveal().reveal('.experinence-card, .service-card, .education,.portfolio .img-card', {delay: 800, origin: 'bottom', intervel: 200});
ScrollReveal().reveal('.footer .group', {delay: 500, origin: 'top', intervel: 200 });