const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const navSearch = document.getElementById("nav-search");

navSearch.addEventListener("click", (e) => {
  navSearch.classList.toggle("open");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content div", {
  duration: 1000,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".deals__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".about__card", {
  duration: 1000,
  interval: 500,
  delay: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
});
document.getElementById('orderButton').addEventListener('click', function() {
  // Open the order page in a new tab or window
  window.open('order.html', '_blank');
});
document.getElementById('orderButton1').addEventListener('click', function() {
  // Open the order page in a new tab or window
  window.open('order1.html', '_blank');
});
document.getElementById('orderButton2').addEventListener('click', function() {
  // Open the order page in a new tab or window
  window.open('order2.html', '_blank');
});
document.getElementById('orderButton3').addEventListener('click', function() {
  // Open the order page in a new tab or window
  window.open('order3.html', '_blank');
});
document.getElementById('orderButton4').addEventListener('click', function() {
  // Open the order page in a new tab or window
  window.open('order4.html', '_blank');
});
document.getElementsByClassName('buy-now').addEventListener('click', function() {
  // Open the order page in a new tab or window
  window.open('loginpage.html', '_blank');
});
document.getElementsByClassName('image-container').addEventListener('click', function() {
  // Open the order page in a new tab or window
  window.open('order1-shoes.html', '_blank');

})
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting in the traditional way

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simulate a successful form submission
  const responseMessage = document.getElementById('responseMessage');
  responseMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
  responseMessage.style.color = 'green';

  // Reset the form fields
  this.reset();
});

