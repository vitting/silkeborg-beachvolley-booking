import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BookingEditComponent } from "./booking-edit.component";

const routes: Routes = [{
  path: "booking",
  component: BookingEditComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingEditRoutingModule {}
