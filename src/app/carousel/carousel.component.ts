import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild
} from "@angular/core";
import { fromEvent, of } from "rxjs";
import { map, startWith, throttleTime } from "rxjs/operators";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"]
})
export class CarouselComponent implements AfterViewInit {
  @ViewChild("scrollableBlock", { read: ElementRef, static: true })
  private scrollableBlock: ElementRef;

  @Input()
  customScrollableBlock: HTMLElement;
  @Input()
  scrollItemsCount: number | 'auto' = 'auto';
  @Input()
  itemsMargin = 16;

  availableToScroll = of({ left: false, right: false });
  constructor(private elementRef: ElementRef) {}

  private itemWidth: number | undefined;

  ngAfterViewInit() {
    this.availableToScroll = fromEvent(
      this.customScrollableBlock,
      "scroll"
    ).pipe(
      throttleTime(100, undefined, { leading: true, trailing: true }),
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
    console.log(this.itemWidth);
  }

  goLeft() {
    this.scroll('left');
  }

  goRight() {
    this.scroll('right');
  }

  private scroll(scrollDirection: 'left' | 'right'): void {
    if (this.itemWidth) {
      const element =
        this.customScrollableBlock || this.scrollableBlock.nativeElement;
        // TODO how to calc scroll width in auto mode
      const visibleItems = Math.floor(element.offsetWidth / this.itemWidth);
      console.log(visibleItems);
      const marginBetweenVisibleItems = (visibleItems * this.itemsMargin);
      const scrollXDelta = (this.scrollItemsCount !== 'auto' ? this.scrollItemsCount : visibleItems) * this.itemWidth + marginBetweenVisibleItems;
      console.log(scrollXDelta);
      const scrollByX = (scrollDirection === 'left' ? -1 : 1) * scrollXDelta;
      try {
        element.scrollBy({ left: scrollByX, behavior: "smooth" });
      } catch (_e) {
        element.scrollBy(scrollByX, 0);
      }
    }
  }
}
