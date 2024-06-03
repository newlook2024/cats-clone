var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".after",
      prevEl: ".before",
    },
  });
  
  var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination1",
      clickable: true,
    },
    navigation: {
      nextEl: ".after1",
      prevEl: ".before1",
    },
    breakpoints: {
      768: {
        slidesPerView: 2.5,
      },
  
    }
  });
  
  