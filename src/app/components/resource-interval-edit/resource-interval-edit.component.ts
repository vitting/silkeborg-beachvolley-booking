import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  templateUrl: "./resource-interval-edit.component.html",
  styleUrls: ["./resource-interval-edit.component.scss"],
})
export class ResourceIntervalEditComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ResourceIntervalEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  ngOnInit(): void {}
  action(): void {
    this.dialogRef.close();
  }
}
