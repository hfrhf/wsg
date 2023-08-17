
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
    bulletElement: "span",
    bulletClass: "swiper-pagination-bullet",
    bulletActiveClass: "swiper-pagination-bullet-active"
  },
  on: {
    slideChangeTransitionEnd: function () {
      // إزالة الصفة النشطة من جميع الشرائح وتعيينها للسلايد الوسطي
      var slides = document.querySelectorAll('.swiper-slide');
      slides.forEach(function(slide) {
        slide.classList.remove('active');
      });
      var middleSlideIndex = Math.floor((swiper.slides.length -1) / 2);
      swiper.slides[middleSlideIndex].classList.add('active');
    },
  },
  navigation: false
});

function updateSwiper() {
  if (window.innerWidth < 968) {
    swiper.params.slidesPerView = 1;
  } else if(window.innerWidth < 1200) {
    swiper.params.slidesPerView = 2;
  } else {
    swiper.params.slidesPerView = 3;
  }
  swiper.update();
  
}

window.addEventListener('load', updateSwiper);
window.addEventListener('resize', updateSwiper);


