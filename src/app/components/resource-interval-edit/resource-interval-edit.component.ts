import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatRadioChange } from "@angular/material/radio";

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
  private fromIntervalValueH = 8;
  private fromIntervalValueM = 0;
  private toIntervalValueH = 22;
  private toIntervalValueM = 0;
  constructor(
    public dialogRef: MatDialogRef<ResourceIntervalEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  ngOnInit(): void {}

  action(action: string): void {
    this.dialogRef.close();
  }

  remove(): void {}

  periodeChange(event: MatRadioChange): void {
    this.showTimePeriodeContainer = event.value === "timeperiode";
  }

  fromIntervalChange(value: number, type: string): void {
    if (type === "h") {
      this.fromIntervalValueH = value;
      this.fromIntervalH = this.formatNumber(value);
    } else {
      this.fromIntervalValueM = value;
      this.fromIntervalM = this.formatNumber(value);
    }
  }

  toIntervalChange(value: number, type: string): void {
    if (type === "h") {
      this.toIntervalValueH = value;
      this.toIntervalH = this.formatNumber(value);
    } else {
      this.toIntervalValueM = value;
      this.toIntervalM = this.formatNumber(value);
    }
  }

  private formatNumber(value: number): string {
    if (value < 10) {
      return `0${value}`;
    }

    return value.toString();
  }
}
