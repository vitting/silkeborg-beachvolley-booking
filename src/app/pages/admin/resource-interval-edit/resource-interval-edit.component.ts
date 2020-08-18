import { Component, OnInit } from "@angular/core";
import { MatRadioChange } from "@angular/material/radio";
import { TimeSelectorValue } from "src/app/components/time-selector/time-selector.component";

// export interface ResourceIntervalEditDialogResult {

// }

@Component({
  templateUrl: "./resource-interval-edit.component.html",
  styleUrls: ["./resource-interval-edit.component.scss"],
})
export class ResourceIntervalEditComponent implements OnInit {
  fromIntervalH = "08";
  fromIntervalM = "00";
  toIntervalH = "22";
  toIntervalM = "00";
  showTimePeriodeContainer = false;
  selectedPeriode = "allday";
  constructor() {}

  ngOnInit(): void {}

  action(action: string): void {

  }

  remove(): void {}

  periodeChange(event: MatRadioChange): void {
    this.showTimePeriodeContainer = event.value === "timeperiode";
  }

  intervalChange(value: TimeSelectorValue): void {
    console.log(value);

  }

  private formatNumber(value: number): string {
    if (value < 10) {
      return `0${value}`;
    }

    return value.toString();
  }
}
