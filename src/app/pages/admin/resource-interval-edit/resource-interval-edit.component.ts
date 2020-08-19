import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { MatRadioChange } from "@angular/material/radio";
import { TimeSelectorValue } from "src/app/components/time-selector/time-selector.component";
import { MatSelectChange } from "@angular/material/select";
import { Moment } from "moment";
import * as moment from "moment";
import { Router } from "@angular/router";

export interface ResourceIntervalEditDialogResult {
  customInterval: boolean;
  intervals: ResourceInterval[];
}

export interface ResourceInterval {
  from: Date;
  to: Date;
}

interface SelectInterval {
  hours?: number;
  minutes?: number;
}

interface SelectValue {
  value: number;
  text: string;
}

@Component({
  templateUrl: "./resource-interval-edit.component.html",
  styleUrls: ["./resource-interval-edit.component.scss"],
})
export class ResourceIntervalEditComponent implements OnInit {
  showTimePeriodeContainer = false;
  selectedPeriode = "allday";
  fromIntervalHourValue = 8;
  fromIntervalMinutValue = 0;
  toIntervalHourValue = 22;
  toIntervalMinutValue = 0;
  hourSelectValue = 2;
  minutSelectValue = 0;
  results: ResourceInterval[] = [];
  hoursSelectValues: SelectValue[] = [
    { value: 0, text: "0 time" },
    { value: 1, text: "1 time" },
    { value: 2, text: "2 timer" },
    { value: 3, text: "3 timer" },
    { value: 4, text: "4 timer" },
    { value: 5, text: "5 timer" },
    { value: 6, text: "6 timer" },
    { value: 7, text: "7 timer" },
    { value: 8, text: "8 timer" },
    { value: 9, text: "9 timer" },
    { value: 10, text: "10 timer" },
  ];
  minutesSelectValues: SelectValue[] = [
    { value: 0, text: "0 minutter" },
    { value: 15, text: "15 minutter" },
    { value: 30, text: "30 minutter" },
    { value: 45, text: "45 minutter" },
  ];
  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {
    console.log(this.location.getState());
  }

  action(action: string): void {
    if (action === "save") {
      const result: ResourceIntervalEditDialogResult = {
        customInterval: this.selectedPeriode !== "allday",
        intervals: this.results,
      };
      this.router.navigateByUrl("/resource", { state: {data: result} });
      console.log(this.results);
    } else {
      this.router.navigateByUrl("/resource", { state: {data: null} });
    }
  }

  periodeChange(event: MatRadioChange): void {
    if (event.value === "timeperiode") {
      this.showTimePeriodeContainer = true;
      this.selectedPeriode = "timeperiode";
    } else {
      this.showTimePeriodeContainer = false;
      this.selectedPeriode = "allday";
    }
  }

  fromIntervalChange(value: TimeSelectorValue): void {
    this.fromIntervalHourValue = value.hours;
    this.fromIntervalMinutValue = value.minutes;
  }

  toIntervalChange(value: TimeSelectorValue): void {
    this.toIntervalHourValue = value.hours;
    this.toIntervalMinutValue = value.minutes;
  }

  hourSelectChange(event: MatSelectChange): void {
    this.hourSelectValue = event.value;
  }

  minutSelectChange(event: MatSelectChange): void {
    this.minutSelectValue = event.value;
  }

  generate(): void {
    this.results = [];
    const start = moment(
      new Date(
        2020,
        10,
        10,
        this.fromIntervalHourValue,
        this.fromIntervalMinutValue
      )
    );
    const end = moment(
      new Date(
        2020,
        10,
        10,
        this.toIntervalHourValue,
        this.toIntervalMinutValue
      )
    );
    const interval: SelectInterval = {};

    if (this.hourSelectValue) {
      interval.hours = this.hourSelectValue;
    }

    if (this.minutSelectValue) {
      interval.minutes = this.minutSelectValue;
    }

    this.generateInterval(start, end, interval);
    console.log(this.results);
  }

  formatInterval(item: ResourceInterval): string {
    return `${moment(item.from).format("H:mm")} - ${moment(item.to).format(
      "H:mm"
    )}`;
  }

  remove(index: number): void {
    this.results.splice(index, 1);
  }

  private generateInterval(
    startDate: Moment,
    endDate: Moment,
    interval: SelectInterval
  ): void {
    const value: ResourceInterval = { from: startDate.toDate(), to: null };
    const newDate = startDate.add(interval);
    if (newDate <= endDate) {
      value.to = newDate.toDate();
      this.results.push(value);
      this.generateInterval(newDate, endDate, interval);
    }
  }
}
