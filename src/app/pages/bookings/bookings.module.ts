import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BookingsRoutingModule } from "./bookings-routing.module";
import { BookingsComponent } from "./bookings.component";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { CalendarModule } from "src/app/components/calendar/calendar.module";

@NgModule({
  declarations: [BookingsComponent],
  imports: [
    CommonModule,
    BookingsRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    CalendarModule
  ],
})
export class BookingsModule {}
