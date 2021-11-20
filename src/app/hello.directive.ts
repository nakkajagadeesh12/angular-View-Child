import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[custDir]',
})
export class customDirective {
  constructor(private ele: ElementRef) {}
  ngAfterViewChild() {
    this.ele.nativeElement.style.color = 'red';
  }

  setColor(col) {
    this.ele.nativeElement.style.color = col;
  }
}
