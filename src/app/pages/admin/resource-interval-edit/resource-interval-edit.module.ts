import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ResourceIntervalEditComponent } from "./resource-interval-edit.component";
import { MatDialogModule } from "@angular/material/dialog";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatChipsModule } from "@angular/material/chips";
import { TimeSelectorModule } from "../../../components/time-selector/time-selector.module";
import { ResourceIntervalEditRoutingModule } from "./resource-interval-edit-routing.module";

@NgModule({
  declarations: [ResourceIntervalEditComponent],
  imports: [
    CommonModule,
    ResourceIntervalEditRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatChipsModule,
    MatDialogModule,
    TimeSelectorModule,
  ],
})
export class ResourceIntervalEditModule {}
