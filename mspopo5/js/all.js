$(document).ready(function () {
    $('.smun').click(function (e) { 
        e.preventDefault();
        $('.menu').toggleClass('open');
        $('.phonestyle').toggleClass('op');
    });
});

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    }
});

var swiper = new Swiper('.swiper-container2', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    }
});



var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});

var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    thumbs: {
      swiper: galleryThumbs
    }
});