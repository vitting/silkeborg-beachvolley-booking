import { Component, OnInit } from "@angular/core";
import * as moment from "moment";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.scss"],
})
export class CalendarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const date = new Date(2020, 7, 1); // Zero based
    console.log(moment(date).daysInMonth()); // Zero based
    console.log(Array.from(Array(moment(date).daysInMonth()).keys())); // Zero based
    console.log(moment(date).format("E")); // Not Zero based
    console.log(moment("2020-09-01").format("E")); // Not Zero based
    console.log(moment("2020-09-01").day()); // Sunday zero

  }
}
