import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NumberSelectorComponent } from "./number-selector.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [NumberSelectorComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [NumberSelectorComponent],
})
export class NumberSelectorModule {}
