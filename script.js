// script.js
function toggleNav() {
    var sideNav = document.getElementById("mySidenav");
    sideNav.style.width = sideNav.style.width === "250px" ? "0" : "250px";
}
function handleScroll() {
    const welcomeSection = document.getElementById('welcome-section');
    const isWelcomeSectionVisible = welcomeSection.getBoundingClientRect().top < window.innerHeight / 2;

    if (isWelcomeSectionVisible) {
      welcomeSection.style.opacity = '1';
      welcomeSection.style.transform = 'translateY(0)';
      // Remove the event listener once the animation is triggered
      window.removeEventListener('scroll', handleScroll);
    }
  }

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);

  // Initial check on page load
  handleScroll();

  let currentIndex = 0;

  function updateSlider() {
    const translateValue = -currentIndex * 100;
    document.querySelector('.slideshow').style.transform = `translateX(${translateValue}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % document.querySelectorAll('.slide').length;
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + document.querySelectorAll('.slide').length) % document.querySelectorAll('.slide').length;
    updateSlider();
  }

  setInterval(nextSlide, 4000); // Change slide every 4 seconds

  updateSlider(); // Initial update
  var myIndex = 0;
  carousel();

  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
      myIndex = 1
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 5000);
  }