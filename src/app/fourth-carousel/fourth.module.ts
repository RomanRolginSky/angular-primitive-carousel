import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FourthCarouselComponent } from './fourth-carousel.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: FourthCarouselComponent}])
  ]
})
export class FourthModule { }
