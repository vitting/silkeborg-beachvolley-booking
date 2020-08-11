import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceIntervalEditComponent } from './resource-interval-edit.component';

describe('ResourceIntervalEditComponent', () => {
  let component: ResourceIntervalEditComponent;
  let fixture: ComponentFixture<ResourceIntervalEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceIntervalEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceIntervalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
