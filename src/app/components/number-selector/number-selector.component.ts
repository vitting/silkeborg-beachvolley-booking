import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-number-selector",
  templateUrl: "./number-selector.component.html",
  styleUrls: ["./number-selector.component.scss"],
})
export class NumberSelectorComponent implements OnInit {
  @Input() value = 0;
  @Input() minValue = 0;
  @Input() maxValue = 99;
  @Input() zeroPrefix = true;
  @Output() valueChange = new EventEmitter<number>();
  valueToShow = "00";
  constructor() {}

  ngOnInit(): void {
    if (!this.zeroPrefix) {
      this.valueToShow = "0";
    }

    this.formatValue(this.value);
  }

  add(): void {
    if (this.value + 1 <= this.maxValue) {
      this.value++;
      this.formatValue(this.value);
      this.valueChange.emit(this.value);
    } else {
      this.value = this.minValue;
      this.formatValue(this.value);
      this.valueChange.emit(this.value);
    }
  }

  subtract(): void {
    if (this.value - 1 >= this.minValue) {
      this.value--;
      this.formatValue(this.value);
      this.valueChange.emit(this.value);
    } else {
      this.value = this.maxValue;
      this.formatValue(this.value);
      this.valueChange.emit(this.value);
    }
  }

  private formatValue(value: number): void {
    if (this.zeroPrefix) {
      if (value >= 0 && value < 10) {
        this.valueToShow = `0${value}`;
      } else {
        this.valueToShow = `${value}`;
      }
    } else {
      this.valueToShow = `${value}`;
    }
  }
}
