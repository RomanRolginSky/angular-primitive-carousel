import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { CarouselItemDirective } from "./carousel-item.directive";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CarouselComponent,
    CarouselItemDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
