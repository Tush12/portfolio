document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Message sent successfully!');
});

window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  if (window.scrollY === 0) {
    header.style.top = '0';
  } else {
    header.style.top = '-50px';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Animate on scroll
  const elements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  });

  elements.forEach(el => observer.observe(el));
});
