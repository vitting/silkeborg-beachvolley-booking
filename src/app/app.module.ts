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
import { BookingFormModule } from "./components/booking-form/booking-form.module";
import { ResourcesModule } from "./pages/admin/resources/resources.module";
import { ResourceEditModule } from "./pages/admin/resource-edit/resource-edit.module";
import { BookingsModule } from "./pages/bookings/bookings.module";
import { BookingEditModule } from './pages/booking-edit/booking-edit.module';
import { ResourceIntervalEditModule } from './components/resource-interval-edit/resource-interval-edit.module';

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
    BookingFormModule,
    ResourcesModule,
    ResourceEditModule,
    BookingsModule,
    BookingEditModule,
    ResourceIntervalEditModule,
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
