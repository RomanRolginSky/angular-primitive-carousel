import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThirdCarouselComponent } from './third-carousel.component';



@NgModule({
  declarations: [
    ThirdCarouselComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: ThirdCarouselComponent}])
  ]
})
export class ThirdModule { }
