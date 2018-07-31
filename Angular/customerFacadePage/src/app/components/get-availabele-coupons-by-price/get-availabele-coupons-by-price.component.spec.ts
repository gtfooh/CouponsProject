import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAvailabeleCouponsByPriceComponent } from './get-availabele-coupons-by-price.component';

describe('GetAvailabeleCouponsByPriceComponent', () => {
  let component: GetAvailabeleCouponsByPriceComponent;
  let fixture: ComponentFixture<GetAvailabeleCouponsByPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAvailabeleCouponsByPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAvailabeleCouponsByPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
