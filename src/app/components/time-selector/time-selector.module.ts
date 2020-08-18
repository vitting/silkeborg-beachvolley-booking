import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TimeSelectorComponent } from "./time-selector.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [TimeSelectorComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, ],
  exports: [TimeSelectorComponent],
})
export class TimeSelectorModule {}
