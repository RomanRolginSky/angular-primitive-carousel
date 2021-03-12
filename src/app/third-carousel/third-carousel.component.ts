import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
// import { fromEvent } from 'rxjs';
// import { throttleTime } from 'rxjs/operators';
// import * as Glider from 'glider-js';
// import * Glider from 'glider-js';

type Gliderjs = typeof import('glider-js');

@Component({
  selector: 'app-third-carousel',
  templateUrl: './third-carousel.component.html',
  styleUrls: ['./third-carousel.component.scss']
})
export class ThirdCarouselComponent implements AfterViewInit, OnDestroy {

  @ViewChild('carousel', {static: true, read: ElementRef}) carousel!: ElementRef<HTMLElement>;
  items = new Array(20)
    .fill(undefined)
    .map((value, index) => ({index, name: `Item ${index}`}));

  private glider!: any;

  ngAfterViewInit(): void {
    from(import(/* webpackChunkName: 'glider-js' */ 'glider-js'))
      .pipe(
        // @ts-ignore
        map(glider => glider.default))
      .subscribe((gliderInit) => {
        this.init(gliderInit);
      });
    // import(/*webpack-chunk*/'glider-js').then(module => module.default).then(gliderInit => {
    //   this.init(gliderInit);
    // });

    // this.init(gliderInit);
    // fromEvent(this.carousel.nativeElement, 'scroll').pipe(
    //   throttleTime(300, undefined, { leading: true, trailing: true }),
    // ).subscribe(() => this.glider && this.glider.updateControls());
  }

  ngOnDestroy(): void {
    if (this.glider) {
      this.glider.destroy();
    }
  }

  private init(gliderInit: any): void {
    if (this.glider) {
      return;
    }
    this.glider = new gliderInit(this.carousel.nativeElement, {
      // scrollLock: true,
      slidesToShow: 'auto',
      slidesToScroll: 3,
      itemWidth: 150,
      exactWidth: true,
      draggable: true,
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next',
      }
    });
  }
}
