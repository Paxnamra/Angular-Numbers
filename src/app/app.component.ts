import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  oddNums: number[] = [];
  evenNums: number[] = [];

  onStarEventLaunch(displayNumberOnLaunch: number) {
    displayNumberOnLaunch % 2 === 0
      ? this.evenNums.push(displayNumberOnLaunch)
      : this.oddNums.push(displayNumberOnLaunch);
  }
}
