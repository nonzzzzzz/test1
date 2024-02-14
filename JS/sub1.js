$(document).ready(function () {
    var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
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


  
  $(document).ready(function () {
    // 기존 Swiper 코드는 그대로 유지
  
    // ScrollMagic 설정
    var controller = new ScrollMagic.Controller();
  
    // 각 섹션에 대한 애니메이션 트리거
    $(".room1, .room2, .room3, .room4").each(function () {
      var scene = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.8, // 스크롤 위치에서 트리거를 발생시킬 위치
      })
        .setClassToggle(this, "showing") // 트리거가 발생하면 해당 섹션에 클래스 추가
        .addTo(controller);
    });
  });