import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule, SETTINGS } from "@angular/fire/firestore";
import { AngularFireAnalyticsModule } from "@angular/fire/analytics";
import "moment/locale/da";
import { CalendarModule } from "./components/calendar/calendar.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAnalyticsModule,
    CalendarModule,
  ],
  providers: [
    // Connect to local firestore emulator in development
    {
      provide: SETTINGS,
      useValue: environment.production
        ? undefined
        : {
            host: "localhost:8083",
            ssl: false,
          },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
