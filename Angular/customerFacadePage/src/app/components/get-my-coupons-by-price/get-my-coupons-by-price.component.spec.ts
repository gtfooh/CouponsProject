import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMyCouponsByPriceComponent } from './get-my-coupons-by-price.component';

describe('GetMyCouponsByPriceComponent', () => {
  let component: GetMyCouponsByPriceComponent;
  let fixture: ComponentFixture<GetMyCouponsByPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetMyCouponsByPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMyCouponsByPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
