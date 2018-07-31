import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMyCouponsByTypeComponent } from './get-my-coupons-by-type.component';

describe('GetMyCouponsByTypeComponent', () => {
  let component: GetMyCouponsByTypeComponent;
  let fixture: ComponentFixture<GetMyCouponsByTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetMyCouponsByTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMyCouponsByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
