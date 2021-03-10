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
  @Input()
  scrollItemsCount = 3;

  availableToScroll = of({ left: false, right: false });
  constructor(private elementRef: ElementRef) {}

  private itemWidth: number | undefined;

  ngOnInit() {}

  ngAfterViewInit() {
    this.availableToScroll = fromEvent(
      this.customScrollableBlock,
      "scroll"
    ).pipe(
      map(event => event.target as HTMLElement),
      startWith(this.customScrollableBlock ?? this.elementRef.nativeElement),
      map(scrolledElement => {
        return {
          left: scrolledElement.scrollLeft > 0,
          right:
            scrolledElement.scrollLeft + scrolledElement.offsetWidth <
            scrolledElement.scrollWidth
        };
      })
    );
  }

  registerItem(item: ElementRef) {
    this.itemWidth = item.nativeElement.offsetWidth;
  }

  goLeft() {
    this.scrollBy(-1 * this.scrollItemsCount);
  }

  goRight() {
    this.scrollBy(this.scrollItemsCount);
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
