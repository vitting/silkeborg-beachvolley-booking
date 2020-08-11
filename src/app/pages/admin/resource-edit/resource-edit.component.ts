import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ResourceIntervalEditComponent } from "src/app/components/resource-interval-edit/resource-interval-edit.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  templateUrl: "./resource-edit.component.html",
  styleUrls: ["./resource-edit.component.scss"],
})
export class ResourceEditComponent implements OnInit {
  resourceForm = this.fb.group({
    name: [""]
  });

  constructor(private fb: FormBuilder, private dialog: MatDialog) {}

  ngOnInit(): void {}

  onSubmit(): void {


  }

  editInterval(): void {
    this.dialog.open(ResourceIntervalEditComponent);
  }
}
