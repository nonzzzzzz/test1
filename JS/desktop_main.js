$(document).ready(function () {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });
});

  // 스크롤 이벤트
 

  $(document).ready(function () {
    $('.naver_toggleBtn').on('click', function () {
      $('#nav .main_nav').toggleClass('active');
    });
  
    $(window).on('scroll', function () {
      let nav = $('nav');
      if (window.scrollY === 0) {
        nav.removeClass('sticky');
      } else {
        nav.addClass('sticky');
      }
    });
  });


  
document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.querySelector('.naver_toogleBtn'); 
  const menu = document.querySelector('.main_nav');

  toggleBtn.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('Toggle Button Clicked');
    menu.classList.toggle('active');
    console.log('Menu Style:', window.getComputedStyle(menu).display);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var content2_1 = document.querySelector(".content2_1");
  var content2_2 = document.querySelector(".content2_2");
  var content2_3 = document.querySelector(".content2_3");

  function isElementInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  function handleScroll() {
      if (isElementInViewport(content2_1)) {
          content2_1.classList.add("show");
      }
      if (isElementInViewport(content2_2)) {
          content2_2.classList.add("show");
      }
      if (isElementInViewport(content2_3)) {
          content2_3.classList.add("show");
      }
  }

  window.addEventListener("scroll", handleScroll);

  handleScroll();
});

$(document).ready(function () {
  var currentIndex = 0;
  var wrapper = $("#mo_con6_wrapper");
  var totalSlides = $(".mo_con6_slide").length;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
  }

  function updateSlider() {
    var translateValue = -currentIndex * 100 + "%";
    wrapper.css("transform", "translateX(" + translateValue + ")");
  }

  // 이벤트 핸들러 등록
  $(".custom-button-next").on("click", nextSlide);
  $(".custom-button-prev").on("click", prevSlide);
});


//파인다이닝 슬라이드
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".contents4_slider");
  const prevButton = document.querySelector(".custom-button-prev");
  const nextButton = document.querySelector(".custom-button-next");

  let currentIndex = 0;

  function updateSlider() {
    const transformValue = -currentIndex * 100 + "%";
    slider.style.transform = "translateX(" + transformValue + ")";
  }

  function slideRight() {
    currentIndex = (currentIndex + 1) % slider.children.length;
    updateSlider();
  }

  function slideLeft() {
    currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
    updateSlider();
  }

  nextButton.addEventListener("click", slideRight);
  prevButton.addEventListener("click", slideLeft);

  setInterval(slideRight, 2000);
});

//인스타 모바일 슬라이드
document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector(".slider");
  const images = document.querySelectorAll("#contents7 img");
  let currentIndex = 0;

  function updateSlider() {
    const transformValue = -currentIndex * 100 + "%";
    slider.style.transform = "translateX(" + transformValue + ")";
  }

  function slideRight() {
    if (currentIndex < images.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlider();
  }

  function slideLeft() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = images.length - 1;
    }
    updateSlider();
  }

  setInterval(slideRight, 3000); // 3초마다 이미지 슬라이드

  // 페이지 로드 후 초기 슬라이드 설정
  updateSlider();
});