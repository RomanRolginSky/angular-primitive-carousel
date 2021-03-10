import { Directive, ElementRef, EventEmitter, NgZone, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map, filter } from 'rxjs/operators';

@Directive({
  selector: '[appScrollLeftListener]',
  exportAs: 'scrollLeftListener',
})
export class ScrollLeftListenerDirective implements OnInit {
  isScrolled$ = new EventEmitter<boolean>();

  constructor(private element: ElementRef<HTMLElement>, private zone: NgZone) {}

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      fromEvent(this.element.nativeElement, 'scroll')
        .pipe(
          debounceTime(10),
          map(event => event.target as HTMLElement),
          filter(v => v !== null && v !== undefined),
          map(target => target.scrollLeft),
          map(scrollLeft => scrollLeft > 0),
        )
        .subscribe(isScrolledLeft => {
          this.zone.run(() => {
            this.isScrolled$.emit(isScrolledLeft);
          });
        });
    });
  }
}
