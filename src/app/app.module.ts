import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { CarouselItemDirective } from "./carousel/carousel-item.directive";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FirstCarouselComponent } from "./first-carousel/first-carousel.component";
import { SecondCarouselComponent } from "./second-carousel/second-carousel.component";
import { ThirdCarouselComponent } from "./third-carousel/third-carousel.component";

const routes: Routes = [
  { path: "first", component: FirstCarouselComponent },
  { path: "second", component: SecondCarouselComponent },
  { path: "third", component: ThirdCarouselComponent },
  { path: "", pathMatch: "full", redirectTo: "first" }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    CarouselComponent,
    CarouselItemDirective,
    FirstCarouselComponent,
    SecondCarouselComponent,
    ThirdCarouselComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
