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

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  fetch(this.action, {
    method: 'POST',
    body: new FormData(this),
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      alert("Message sent successfully!");
      this.reset();  // Reset the form after submission
    } else {
      alert("Oops! There was a problem sending your message.");
    }
  });
});