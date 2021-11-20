import {
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { CounterComponent } from './counter.component';
import { customDirective } from './hello.directive';
import { ProfileComponent } from './profile.component';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent {
  @Input() name: string;
  @ViewChild('ref') ref: ElementRef;
  @ViewChild(customDirective) custDire: customDirective;
  @ViewChild(CounterComponent) counterComp: CounterComponent;
  @ViewChildren(ProfileComponent) profileList: QueryList<ProfileComponent>;
  ngAfterViewInit() {
    console.log(this.ref.nativeElement);
    let ele = this.ref.nativeElement;
    ele.style.background = 'black';
    ele.style.color = 'white';
    console.log(this.profileList.toArray());
  }

  clickHere(col) {
    console.log(col);
    this.custDire.setColor(col);
  }

  incHere() {
    this.counterComp.increase();
  }
}
