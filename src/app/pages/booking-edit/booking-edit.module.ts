import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BookingEditRoutingModule } from "./booking-edit-routing.module";
import { BookingEditComponent } from "./booking-edit.component";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatChipsModule } from "@angular/material/chips";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [BookingEditComponent],
  imports: [
    CommonModule,
    BookingEditRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
})
export class BookingEditModule {}
