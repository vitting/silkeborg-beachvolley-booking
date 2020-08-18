import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ResourceIntervalEditComponent } from "./resource-interval-edit.component";

const routes: Routes = [
  {
    path: "resourceinterval",
    component: ResourceIntervalEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResourceIntervalEditRoutingModule {}
