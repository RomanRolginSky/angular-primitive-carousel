import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
// import * as Glider from 'glider-js';

declare const Glider: any;
// tslint:disable-next-line:no-namespace
declare namespace Glider {}

@Component({
  selector: 'app-third-carousel',
  templateUrl: './third-carousel.component.html',
  styleUrls: ['./third-carousel.component.css']
})
export class ThirdCarouselComponent implements AfterViewInit, OnDestroy {

  @ViewChild('carousel', {static: true, read: ElementRef}) carousel!: ElementRef<HTMLElement>;
  items = new Array(20)
    .fill(undefined)
    .map((value, index) => ({index, name: `Item ${index}`}));

  private glider!: any;

  ngAfterViewInit(): void {
    this.init();
    // fromEvent(this.carousel.nativeElement, 'scroll').pipe(
    //   throttleTime(300, undefined, { leading: true, trailing: true }),
    // ).subscribe(() => this.glider && this.glider.updateControls());
  }

  private init(): void {
    if (this.glider) {
      return;
    }
    this.glider = new Glider(this.carousel.nativeElement, {
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

  ngOnDestroy(): void {
    if (this.glider) {
      this.glider.destroy();
    }
  }
}
