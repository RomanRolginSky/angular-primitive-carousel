import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FourthCarouselComponent } from './fourth-carousel.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    FourthCarouselComponent
  ],
  imports: [
    SwiperModule,
    CommonModule,
    RouterModule.forChild([{path: '', component: FourthCarouselComponent}])
  ]
})
export class FourthModule { }
