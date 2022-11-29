import './app/gutenberg';
import Swiper from 'swiper/swiper-bundle';
import {gsap} from "./app/gsap/gsap";
import {ScrollTrigger} from "./app/gsap/ScrollTrigger";
import {isEven, isjQuery, Coordinates, videoResize} from "./app/functions";
import fancybox from '@fancyapps/fancybox';


gsap.registerPlugin(ScrollTrigger);


(function ($) {

  $('[data-fancybox]').fancybox({
    youtube : {
        controls : 0,
        showinfo : 0
    },
    vimeo : {
        color : 'f00'
    }
});

  $('[data-remodal-id]').remodal({
      hashTracking: false
  });

  new Swiper('.cb-carousel', {
    slidesPerView: "auto",
    spaceBetween: 20,
    freeMode: true,
    mousewheel: {
      releaseOnEdges: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 40
      },
    }
  });

  $('.btn-info').click(() => {
    $('.cb-info-modal').addClass('open');
  });

  $('.cb-info-modal__close').click(() => {
    $('.cb-info-modal').removeClass('open');
  });

  $('.cb-about').click((event) => {
    let target = event.target;
    console.log(target.getAttribute('data-img'))

    $('.cb-about__img').removeClass('active');
    if (target.classList.contains('cb-about__trigger')) {
      $(`.cb-about__img-${target.getAttribute('data-img')}`).addClass('active');
    }
    
  });

  // let parent = document.querySelector('.cb-about__inner');
  // let menuItem = parent.querySelectorAll('.cb-about__trigger');


  // parent.addEventListener('click', (event) => {
  //   // Отлавливаем элемент в родители на который мы нажали
  //   let target = event.target;
    
  //   // Проверяем тот ли это элемент который нам нужен
  //   if(target.classList.contains('menu__item')) {
  //     for(let i = 0; i < menuItem.length; i++) {
  //       // Убираем у других
  //       menuItem[i].classList.remove('active');
  //     }
  //     // Добавляем тому на который нажали
  //     target.classList.add('active');
  //   }
    
  // });

})(jQuery);
