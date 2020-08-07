import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CalendarComponent } from "./calendar.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [CalendarComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [CalendarComponent],
})
export class CalendarModule {}
