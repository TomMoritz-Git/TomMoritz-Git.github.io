const options = {threshold: 0.8};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, options);

const hiddenElements = document.querySelectorAll('.experience-sec .card');
hiddenElements.forEach((el) => observer.observe(el));