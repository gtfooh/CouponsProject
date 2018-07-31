import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAvailabeleCouponsComponent } from './get-availabele-coupons.component';

describe('GetAvailabeleCouponsComponent', () => {
  let component: GetAvailabeleCouponsComponent;
  let fixture: ComponentFixture<GetAvailabeleCouponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAvailabeleCouponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAvailabeleCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
