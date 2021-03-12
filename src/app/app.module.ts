import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItemDirective } from './carousel/carousel-item.directive';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FirstCarouselComponent } from './first-carousel/first-carousel.component';
import { SecondCarouselComponent } from './second-carousel/second-carousel.component';
import { ThirdCarouselComponent } from './third-carousel/third-carousel.component';
import { NguCarouselModule } from '@ngu/carousel';
import { FourthCarouselComponent } from './fourth-carousel/fourth-carousel.component';
import { SwiperModule } from 'swiper/angular';

const routes: Routes = [
  { path: 'first', loadChildren: () => import('./first-carousel/first.module').then(m => m.FirstModule) },
  { path: 'second', loadChildren: () => import('./second-carousel/second.module').then(m => m.SecondModule) },
  { path: 'third', loadChildren: () => import('./third-carousel/third.module').then(m => m.ThirdModule) },
  { path: 'fourth', loadChildren: () => import('./fourth-carousel/fourth.module').then(m => m.FourthModule) },
  { path: '', pathMatch: 'full', redirectTo: 'first' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NguCarouselModule,
    SwiperModule,
  ],
  declarations: [
    AppComponent,
    CarouselComponent,
    CarouselItemDirective,
    FirstCarouselComponent,
    SecondCarouselComponent,
    ThirdCarouselComponent,
    FourthCarouselComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
