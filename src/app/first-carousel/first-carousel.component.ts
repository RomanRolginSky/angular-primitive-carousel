import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-carousel',
  templateUrl: './first-carousel.component.html',
  styleUrls: ['./first-carousel.component.css']
})
export class FirstCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  items = new Array(20).fill(undefined).map((value, index) => ({index, name: `Item ${index}`}));

}