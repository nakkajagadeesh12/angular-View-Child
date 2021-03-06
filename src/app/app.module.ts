import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { customDirective } from './hello.directive';
import { CounterComponent } from './counter.component';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CounterComponent,
    customDirective,
    ProfileComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
