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
  
  addEventListener("scroll", (event) => {
      let nav = $('nav');
      if(window.scrollY == 0) {
          nav.removeClass('sticky')
      } else {
          nav.addClass('sticky')
      } 
  })

  document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.naver_toogleBtn'); // 클래스 이름 수정
    const menu = document.querySelector('.main_nav');
  
    toggleBtn.addEventListener('click', function (event) {
      event.preventDefault(); // 기본 동작 막기
      console.log('Toggle Button Clicked');
      menu.classList.toggle('active');
      console.log('Menu Style:', window.getComputedStyle(menu).display);
    });
  });



  document.addEventListener("scroll", function () {
    var contents3 = document.getElementById("contents3");
  
    function handleScroll(element) {
      var position = element.getBoundingClientRect();
      if (position.top < window.innerHeight * 0.75 && position.bottom >= 0) {
        element.classList.add("showing");
      }
    }
  
    // 스크롤 이벤트 핸들링
    handleScroll(contents3);
  });


  document.addEventListener("scroll", function () {
    var contents7 = document.getElementById("contents7");
    var sections = document.querySelectorAll(".facilities section");
  
    function handleScroll(element) {
      var position = element.getBoundingClientRect();
      if (position.top < window.innerHeight * 0.8 && position.bottom >= 0) {
        element.classList.add("showing");
      }
    }
  
    // 스크롤 이벤트 핸들링
    handleScroll(contents7);
  
    sections.forEach(function (section) {
      handleScroll(section);
    });
  });