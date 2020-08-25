import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsToApproveComponent } from './bookings-to-approve.component';

describe('BookingsToApproveComponent', () => {
  let component: BookingsToApproveComponent;
  let fixture: ComponentFixture<BookingsToApproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingsToApproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsToApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
