import { Component } from "@angular/core";

@Component({
  selector: "app-first-carousel",
  templateUrl: "./first-carousel.component.html",
  styleUrls: ["./first-carousel.component.css"]
})
export class FirstCarouselComponent {
  items = new Array(20)
    .fill(undefined)
    .map((value, index) => ({ index, name: `Item ${index}` }));
}
