import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

export interface TimeSelectorValue {
  hours: number;
  minutes: number;
}

@Component({
  selector: "app-time-selector",
  templateUrl: "./time-selector.component.html",
  styleUrls: ["./time-selector.component.scss"],
})
export class TimeSelectorComponent implements OnInit {
  @Input() label = "";
  @Input() hours = 0;
  @Input() minutes = 0;
  @Output() timeChange = new EventEmitter<TimeSelectorValue>();
  maxHours = 23;
  minHours = 0;
  maxMinutes = 59;
  minMinutes = 0;
  hoursToShow = "0";
  minutesToShow = "00";
  constructor() {}

  ngOnInit(): void {
    this.hoursToShow = this.hours.toString();
    this.formatValue(this.minutes);
  }

  hoursAction(action: string): void {
    if (action === "add") {
      if (this.hours + 1 <= this.maxHours) {
        this.hours++;
      } else {
        this.hours = this.minHours;
      }
    } else {
      if (this.hours - 1 >= this.minHours) {
        this.hours--;
      } else {
        this.hours = this.maxHours;
      }
    }

    this.hoursToShow = this.hours.toString();
    this.timeChange.emit({
      hours: this.hours,
      minutes: this.minutes,
    });
  }

  minutesAction(action: string): void {
    if (action === "add") {
      if (this.minutes + 1 <= this.maxMinutes) {
        this.minutes++;
      } else {
        this.minutes = this.minMinutes;
      }
    } else {
      if (this.minutes - 1 >= this.minMinutes) {
        this.minutes--;
      } else {
        this.minutes = this.maxMinutes;
      }
    }

    this.minutesToShow = this.formatValue(this.minutes);
    this.timeChange.emit({
      hours: this.hours,
      minutes: this.minutes,
    });
  }

  private formatValue(value: number): string {
    if (value >= 0 && value < 10) {
      return `0${value}`;
    } else {
      return `${value}`;
    }
  }
}
