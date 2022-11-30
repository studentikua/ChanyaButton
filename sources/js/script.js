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


  function activeImg(event) {
    let target = event.target;
    console.log(target.getAttribute('data-img'))

    $('.cb-about__img').removeClass('active');
    if (target.classList.contains('cb-about__trigger')) {
      $(`.cb-about__img-${target.getAttribute('data-img')}`).addClass('active');
    }
  }

  $('.cb-about').click((event) => {
    activeImg(event)
  });


  $('.cb-about__trigger').hover(
    function(event) {
      activeImg(event)
    }, function() {
      $('.cb-about__img').removeClass('active');
    }
  );

})(jQuery);
