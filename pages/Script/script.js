var swiper = new Swiper(".portfolio-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

var swiper = new Swiper(".biodata-swiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header div div ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(link => {
                link.classList.remove('act');
                document.querySelector('header div div ul li [href*=' + id +']').classList.add
                ('act');
            })
        }
    })
}