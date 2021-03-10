import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from "@angular/core";
import { fromEvent, Observable, of } from "rxjs";
import { map, startWith } from "rxjs/operators";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"]
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @ViewChild("scrollableBlock", { read: ElementRef, static: true })
  private scrollableBlock: ElementRef;

  @Input()
  customScrollableBlock: HTMLElement;

  availableToScroll = of({ left: false, right: false });
  constructor(private elementRef: ElementRef) {}

  private itemWidth: number | undefined;

  ngOnInit() {}

  ngAfterViewInit() {
    this.availableToScroll = fromEvent(
      this.customScrollableBlock,
      "scroll"
    ).pipe(
      startWith(undefined),
      map(() => ({
        left: this.customScrollableBlock.scrollLeft > 0,
        right:
          this.customScrollableBlock.scrollLeft +
            this.customScrollableBlock.offsetWidth <
          this.customScrollableBlock.scrollWidth
      }))
    );
  }

  registerItem(item: ElementRef) {
    this.itemWidth = item.nativeElement.offsetWidth;
  }

  goLeft() {
    this.scrollBy(-3);
  }

  goRight() {
    this.scrollBy(3);
  }

  private scrollBy(scrollDirection: number): void {
    if (this.itemWidth) {
      const element =
        this.customScrollableBlock || this.scrollableBlock.nativeElement;
      const scrollByX = scrollDirection * this.itemWidth - 32;
      try {
        element.scrollBy({ left: scrollByX, behavior: "smooth" });
      } catch (_e) {
        element.scrollBy(scrollByX, 0);
      }
    }
  }
}
