import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAvailabeleCouponsByTypeComponent } from './get-availabele-coupons-by-type.component';

describe('GetAvailabeleCouponsByTypeComponent', () => {
  let component: GetAvailabeleCouponsByTypeComponent;
  let fixture: ComponentFixture<GetAvailabeleCouponsByTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAvailabeleCouponsByTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAvailabeleCouponsByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
