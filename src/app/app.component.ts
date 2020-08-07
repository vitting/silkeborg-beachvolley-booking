import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  date = new Date(2020, 8, 1);
  title = "silkeborg-beachvolley-booking";
}
