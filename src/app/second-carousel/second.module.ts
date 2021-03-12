import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SecondCarouselComponent } from './second-carousel.component';
import { NguCarouselModule } from '@ngu/carousel';


@NgModule({
  declarations: [
    SecondCarouselComponent
  ],
  imports: [
    CommonModule,
    NguCarouselModule,
    RouterModule.forChild([{path: '', component: SecondCarouselComponent}])
  ]
})
export class SecondModule {
}
