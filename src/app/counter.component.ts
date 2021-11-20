import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  count: number;
  constructor() {
    this.count = 0;
  }

  increase() {
    this.count = this.count + 1;
  }
}
