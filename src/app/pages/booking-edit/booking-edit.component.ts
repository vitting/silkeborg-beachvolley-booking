import { Component, OnInit } from "@angular/core";
import {
  MatChipListChange,
  MatChipSelectionChange,
} from "@angular/material/chips";

interface BookingTime {
  text: string;
  selected: boolean;
}

@Component({
  templateUrl: "./booking-edit.component.html",
  styleUrls: ["./booking-edit.component.scss"],
})
export class BookingEditComponent implements OnInit {
  bookingTimes: BookingTime[] = [
    {
      selected: false,
      text: "Kl. 08.00-10.00",
    },
    {
      selected: false,
      text: "Kl. 10.00-12.00",
    },
    {
      selected: false,
      text: "Kl. 12.00-14.00",
    },
    {
      selected: false,
      text: "Kl. 14.00-16.00",
    },
    {
      selected: false,
      text: "Kl. 16.00-18.00",
    },
    {
      selected: false,
      text: "Kl. 18.00-20.00",
    },
    {
      selected: false,
      text: "Kl. 20.00-22.00",
    },
    {
      selected: false,
      text: "Kl. 22.00-24.00",
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  bookingTimeChange(item: BookingTime): void {
    for (const time of this.bookingTimes) {
      if (item !== time) {
        time.selected = false;
      }
    }

    item.selected = !item.selected;
  }
}
