/* Smooth Scroll ------------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:"smooth"});
  });
});

/* Contact Form --------------------------------------------- */
const form = document.getElementById("contact-form");
const msg = document.getElementById("successMsg");

form.addEventListener("submit", e=>{
  e.preventDefault();
  msg.style.display = "block";
  form.reset();
  setTimeout(()=> msg.style.display = "none", 3000);
});

/* Testimonial Slider ---------------------------------------- */
const slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i){
  slides.forEach(s=>s.classList.remove("active"));
  slides[i].classList.add("active");
}

document.querySelector(".next").addEventListener("click", ()=>{
  index = (index + 1) % slides.length;
  showSlide(index);
});

document.querySelector(".prev").addEventListener("click", ()=>{
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

/* Light/Dark Theme Toggle ----------------------------------- */
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

themeToggle.addEventListener("click", ()=>{
  const current = html.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";
  html.setAttribute("data-theme", next);
  themeToggle.textContent = next === "light" ? "🌙" : "☀️";
});
