document.addEventListener('DOMContentLoaded', (event) => {
  window.addEventListener('scroll', () => {
      const heroSection = document.querySelector('.hero-section');
      const scrollDistance = window.pageYOffset || document.documentElement.scrollTop;
      const threshold = window.innerHeight / 1.5; 

    
      let imageOpacity = 1 - scrollDistance / threshold;
      imageOpacity = Math.max(imageOpacity, 0);

      
      let backgroundOpacity = scrollDistance / threshold - 1;
      backgroundOpacity = Math.min(Math.max(backgroundOpacity, 0), 1);

    
      document.querySelector('.hero-background').style.opacity = imageOpacity;
      document.querySelector('.hero-section::after').style.setProperty('opacity', backgroundOpacity);
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.navigation_items');
  const closeBtn = document.querySelector('.close-btn');
  const navLinks = document.querySelectorAll('.header__link');

  hamburger.addEventListener('click', function () {
      navMenu.classList.toggle('active');
  });

  closeBtn.addEventListener('click', function () {
      navMenu.classList.remove('active');
  });

  navLinks.forEach(link => {
      link.addEventListener('click', function () {
          navMenu.classList.remove('active');
      });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const rightImage = document.getElementById('right-image');
  const parallaxContainer = document.querySelector('.parallax-container');

  window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;
      const offsetTop = parallaxContainer.getBoundingClientRect().top + scrollPosition;
      const rate = (scrollPosition - offsetTop) * 0.5;

      rightImage.style.transform = `translate3d(0px, ${rate}px, 0px)`;
  });
});






const scrollers = document.querySelectorAll(".scroller");


if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", "true");

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

  
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", "true");
      scrollerInner.appendChild(duplicatedItem);
    });
  });
} 








