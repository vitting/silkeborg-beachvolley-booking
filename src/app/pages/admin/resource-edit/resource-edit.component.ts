import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  templateUrl: "./resource-edit.component.html",
  styleUrls: ["./resource-edit.component.scss"],
})
export class ResourceEditComponent implements OnInit {
  resourceForm = this.fb.group({
    name: [""],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    console.log(this.location.getState());
  }

  onSubmit(): void {}

  editInterval(day: number): void {
    this.router.navigateByUrl("/resourceinterval", {
      state: { data: { id: 4234234, text: "something about something" } },
    });
  }
}
