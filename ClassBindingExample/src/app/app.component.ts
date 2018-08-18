import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClassBindingExample';

  currentClass = {};

  setBlue(): void {
    this.currentClass = {
      'blue': true
    }
  }

  setRed(): void {
    this.currentClass = {
      'red': true
    }
  }

  setGreen(): void {
    this.currentClass = {
      'green': true
    }
  }
}
