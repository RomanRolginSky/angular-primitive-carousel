import { AfterViewInit, Directive, Component, ElementRef } from "@angular/core";

@Component({
  selector: "carousel"
  templateUrl: './carousel.component.html',
})
export class CarouselDirective implements AfterViewInit {
  constructor(private elementRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    console.log(this.elementRef);
  }
}
