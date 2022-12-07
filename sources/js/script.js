import './app/gutenberg';
import Swiper from 'swiper/swiper-bundle';
import {gsap} from "./app/gsap/gsap";
import {ScrollTrigger} from "./app/gsap/ScrollTrigger";
import {isEven, isjQuery, Coordinates, videoResize} from "./app/functions";
import fancybox from '@fancyapps/fancybox';


gsap.registerPlugin(ScrollTrigger);

function isTouchDevice() {
  return (('ontouchstart' in window) ||
     (navigator.maxTouchPoints > 0) ||
     (navigator.msMaxTouchPoints > 0));
}


function openFullscreen(selector) {
  const elem = document.querySelector(selector);

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

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

  $('[data-fancybox-full]').fancybox({
    afterLoad : function( instance, current ) {
      console.info( instance );
      openFullscreen('.fancybox-slide--video video');
    }
  });


  $('[data-remodal-id]').remodal({
      hashTracking: false
  });

  const carousel = new Swiper('.cb-carousel', {
    slidesPerView: "auto",
    // momentumBounceRatio: 50,
    // momentumRatio: 50,
    // momentumVelocityRatio: 50,
    speed: 1000,
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
    },
    on: {
      slideChange: function() {
          setTimeout(function () {
              carousel.params.mousewheel.releaseOnEdges = false;
          }, 500);
      },
      reachEnd: function() {
          setTimeout(function () {
              carousel.params.mousewheel.releaseOnEdges = true;
          }, 750);
      }
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
    console.log(target)

    $('.cb-about__img').removeClass('active');
    if (target.classList.contains('cb-about__trigger')) {
      $(`.cb-about__img-${target.getAttribute('data-img')}`).addClass('active');
    }
  }

  $('.cb-about').click((event) => {
    activeImg(event)
  });

  if (!isTouchDevice()) {
    $('.cb-about__img').css('pointer-events', 'none');
    $('.cb-about__trigger').hover(
      function(event) {
        activeImg(event)
      }, function() {
        $('.cb-about__img').removeClass('active');
      }
    );
  }


  if (document.querySelector('.player video')) {
    let videoElem = document.querySelector('.player video');
    let playButton = document.querySelector('.player .play');

    playButton.addEventListener("click", handlePlayButton, false);
    playVideo();

    async function playVideo() {
      try {
        await videoElem.play();
        playButton.classList.add("playing");
      } catch (err) {
        playButton.classList.remove("playing");
      }
    }

    function handlePlayButton() {
      if (videoElem.paused) {
        playVideo();
      } else {
        videoElem.pause();
        playButton.classList.remove("playing");
      }
    }
  }



})(jQuery);
