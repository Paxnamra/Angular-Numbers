import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"]
})
export class GameControlComponent implements OnInit {
  @Output() displayNumberOnLaunch = new EventEmitter<number>();
  startNum = 0;
  displayNum;

  constructor() {}

  ngOnInit() {}

  launchGame() {
    this.displayNum = setInterval(() => {
      this.displayNumberOnLaunch.emit(this.startNum + 1);
      this.startNum++;
    }, 1000);
  }
}
