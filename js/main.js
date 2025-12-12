// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click', e=>{
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth'});
  });
});

// Contact form handler
document.getElementById('contact-form').addEventListener('submit', e=>{
  e.preventDefault();
  alert('Thanks! Your message has been sent.');
  e.target.reset();
});
