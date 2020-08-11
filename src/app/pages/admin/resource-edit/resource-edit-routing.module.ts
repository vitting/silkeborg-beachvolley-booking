import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ResourceEditComponent } from "./resource-edit.component";

const routes: Routes = [
  {
    path: "resource",
    component: ResourceEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResourceEditRoutingModule {}
