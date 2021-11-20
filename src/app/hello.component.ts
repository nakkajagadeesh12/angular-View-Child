import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { customDirective } from './hello.directive';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent {
  @Input() name: string;
  @ViewChild('ref') ref: ElementRef;
  @ViewChild(customDirective) custDire: customDirective;
  ngAfterViewInit() {
    console.log(this.ref.nativeElement);
    let ele = this.ref.nativeElement;
    ele.style.background = 'black';
    ele.style.color = 'white';
  }

  clickHere(col) {
    console.log(col);
    this.custDire.setColor(col);
  }
}
