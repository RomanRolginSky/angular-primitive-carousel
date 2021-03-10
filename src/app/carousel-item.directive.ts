import { AfterViewInit, Directive, ElementRef, Optional } from "@angular/core";
import { CarouselComponent } from "./carousel/carousel.component";

@Directive({
  selector: "[appCarouselItem]"
})
export class CarouselItemDirective implements AfterViewInit {
  constructor(
    @Optional() private carousel: CarouselComponent,
    private elementRef: ElementRef
  ) {}

  ngAfterViewInit() {
    if (this.carousel) {
      this.carousel.registerItem(this.elementRef);
    }
  }
}
