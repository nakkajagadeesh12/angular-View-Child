import { Component, Input } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  @Input() name: string;
  @Input() age: number;
  @Input() occupation: string;
  constructor() {}
}
