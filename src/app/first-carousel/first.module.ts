import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirstCarouselComponent } from './first-carousel.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { CarouselItemDirective } from '../carousel/carousel-item.directive';



@NgModule({
  declarations: [
    CarouselComponent,
    CarouselItemDirective,
    FirstCarouselComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: FirstCarouselComponent}])
  ]
})
export class FirstModule { }
