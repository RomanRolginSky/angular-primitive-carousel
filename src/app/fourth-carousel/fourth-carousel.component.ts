import { Component } from '@angular/core';

import SwiperCore, { A11y, Navigation, Scrollbar, SwiperOptions } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Scrollbar, A11y]);

@Component({
  selector: 'app-fourth-carousel',
  templateUrl: './fourth-carousel.component.html',
  styleUrls: ['./fourth-carousel.component.scss']
})
export class FourthCarouselComponent {
  items = new Array(20)
    .fill(undefined)
    .map((value, index) => ({index, name: `Item ${index}`}));

  responsiveSwiperOptions: SwiperOptions['breakpoints'] = {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3.5,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      spaceBetween: 40
    },
    800: {
      slidesPerView: 'auto',
    }
  };

  onSwiper(swiper1: unknown) {
    console.log(swiper1);
  }

  onSlideChange() {
    console.log('slide change');
  }

  // var swiper = new Swiper(".swiper-container", {
  //   // cssMode: true,
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev"
  //   },
  //   slidesPerView: 3.5,
  //   slidesPerGroup: 3,
  //   spaceBetween: 30,
  //   mousewheel: true
  //   // centeredSlides: true
  //   // keyboard: true,
  // });
}
