import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  AfterViewInit,
} from "@angular/core";
import * as moment from "moment";

export interface CalendarDay {
  day: number;
  active: boolean;
  currentDay: boolean;
  date: Date | null;
}

export type locale = "en" | "da";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.scss"],
})
export class CalendarComponent implements OnInit, AfterViewInit {
  @Input() dayBgColor: string;
  @Input() dayTodayBgColor: string;
  @Input() dayHoverBgColor: string;
  @Input() dayDisabledBgColor: string;
  @Input() dayTextColor: string;
  @Input() dayNameTextColor: string;
  @Input() monthYearTextColor: string;
  @Input() selectedDate: Date = new Date(Date.now());
  @Input() locale: locale = "da";
  @Output() dayClick = new EventEmitter<CalendarDay>();
  @Output() monthChange = new EventEmitter<Date>();
  currentSelectedMonth = null;
  dayNames: string[] = [];
  days: CalendarDay[] = [];
  title: string;
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    moment.locale(this.locale);
    this.currentSelectedMonth = this.selectedDate;

    this.generateDayNames();
    this.renderCalendar(this.currentSelectedMonth);
  }

  ngAfterViewInit(): void {
    if (this.dayBgColor) {
      (this.elementRef.nativeElement as HTMLElement).style.setProperty(
        "--day-bgcolor-active",
        this.dayBgColor
      );
    }

    if (this.dayTodayBgColor) {
      (this.elementRef.nativeElement as HTMLElement).style.setProperty(
        "--day-bgcolor-today",
        this.dayTodayBgColor
      );
    }

    if (this.dayHoverBgColor) {
      (this.elementRef.nativeElement as HTMLElement).style.setProperty(
        "--day-bgcolor-hover",
        this.dayHoverBgColor
      );
    }

    if (this.dayDisabledBgColor) {
      (this.elementRef.nativeElement as HTMLElement).style.setProperty(
        "--day-bgcolor-disabled",
        this.dayDisabledBgColor
      );
    }

    if (this.dayTextColor) {
      (this.elementRef.nativeElement as HTMLElement).style.setProperty(
        "--day-color",
        this.dayTextColor
      );
    }

    if (this.dayNameTextColor) {
      (this.elementRef.nativeElement as HTMLElement).style.setProperty(
        "--dayname-color",
        this.dayNameTextColor
      );
    }

    if (this.monthYearTextColor) {
      (this.elementRef.nativeElement as HTMLElement).style.setProperty(
        "--monthyear-color",
        this.monthYearTextColor
      );
    }
  }

  onChangeMonth(action: string): void {
    if (action === "prev") {
      this.currentSelectedMonth = moment(this.currentSelectedMonth)
        .add(-1, "month")
        .toDate();
    } else {
      this.currentSelectedMonth = moment(this.currentSelectedMonth)
        .add(1, "month")
        .toDate();
    }

    this.monthChange.emit(this.currentSelectedMonth);
    this.renderCalendar(this.currentSelectedMonth);
  }

  onDayClick(day: CalendarDay): void {
    if (day.active) {
      this.dayClick.emit(day);
    }
  }

  generateCalendarDates(year: number, month: number): void {
    const currentMonth = moment(new Date(year, month, 1)); // Zero based
    const daysInCurrentMonth = currentMonth.daysInMonth();

    const currentDays = this.generateCurrentDays(daysInCurrentMonth);
    const previousDays = this.generatePreviousDays(currentMonth);
    const nextDays = this.generateNextDays(
      previousDays.length,
      currentDays.length,
      42
    );

    this.days = previousDays.concat(currentDays.concat(nextDays));
  }

  private renderCalendar(date: Date): void {
    const monthName = moment(date).format("MMMM");
    const year = moment(date).year();
    this.title = `${monthName} ${year}`;
    this.generateCalendarDates(date.getFullYear(), date.getMonth());
  }

  private generateDayNames(): void {
    const weekDaysFromMoment = moment.weekdaysShort();
    for (let index = 1; index < weekDaysFromMoment.length; index++) {
      const day = weekDaysFromMoment[index];
      this.dayNames.push(day);
    }

    this.dayNames.push(weekDaysFromMoment[0]);
  }

  private generateCurrentDays(daysInMonth: number): CalendarDay[] {
    const days: CalendarDay[] = [];
    const currentMonth = moment().month();
    const selectedMonth = moment(this.currentSelectedMonth).month();
    const selectedYear = moment(this.currentSelectedMonth).year();
    const currentDay = moment().date();

    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        active: true,
        currentDay: currentMonth === selectedMonth && currentDay === day,
        day,
        date: new Date(selectedYear, selectedMonth, day),
      });
    }

    return days;
  }

  private generatePreviousDays(currentMonth: moment.Moment): CalendarDay[] {
    const days: CalendarDay[] = [];
    const previousMonth = currentMonth.clone().subtract(1, "month"); // Zero based
    const daysInPreviousMonth = previousMonth.daysInMonth();
    let startDayInMonth = currentMonth.day();

    // 0 = sunday = shift to 7
    if (startDayInMonth === 0) {
      startDayInMonth = 7;
    }

    startDayInMonth--;

    const startDayInPreviousMonth = daysInPreviousMonth - startDayInMonth;

    if (startDayInMonth !== 0) {
      for (
        let day = startDayInPreviousMonth + 1;
        day <= daysInPreviousMonth;
        day++
      ) {
        days.push({
          active: false,
          currentDay: false,
          day,
          date: null,
        });
      }
    }

    return days;
  }

  private generateNextDays(
    daysInPreviousMonth: number,
    daysInCurrentMonth: number,
    totalDays: number
  ): CalendarDay[] {
    const days: CalendarDay[] = [];
    const numberOfDaysToGenerate =
      totalDays - (daysInCurrentMonth + daysInPreviousMonth);

    for (let day = 1; day <= numberOfDaysToGenerate; day++) {
      days.push({
        active: false,
        currentDay: false,
        day,
        date: null,
      });
    }

    return days;
  }
}
