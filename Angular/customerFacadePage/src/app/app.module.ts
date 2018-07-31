import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GetMyCouponsComponent } from './components/get-my-coupons/get-my-coupons.component';
import { GetMyCouponsByTypeComponent } from './components/get-my-coupons-by-type/get-my-coupons-by-type.component';
import { GetMyCouponsByPriceComponent } from './components/get-my-coupons-by-price/get-my-coupons-by-price.component';
import { GetAvailabeleCouponsComponent } from './components/get-availabele-coupons/get-availabele-coupons.component';
import { GetAvailabeleCouponsByTypeComponent } from './components/get-availabele-coupons-by-type/get-availabele-coupons-by-type.component';
import { GetAvailabeleCouponsByPriceComponent } from './components/get-availabele-coupons-by-price/get-availabele-coupons-by-price.component';
import { PurchaseCouponComponent } from './components/purchase-coupon/purchase-coupon.component';
import { DataService } from './data.service';
import swal from 'sweetalert2';
import { HashLocationStrategy, LocationStrategy } from '@angular/common'






@NgModule({
  declarations: [
    AppComponent,
    GetMyCouponsComponent,
    GetMyCouponsByTypeComponent,
    GetMyCouponsByPriceComponent,
    GetAvailabeleCouponsComponent,
    GetAvailabeleCouponsByTypeComponent,
    GetAvailabeleCouponsByPriceComponent,
    PurchaseCouponComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot ([
      {
        path: 'purchase',
        component: PurchaseCouponComponent
      },
      {
        path: 'getallcoupons',
        component: GetAvailabeleCouponsComponent
      },
      {
        path : 'getallbytype' ,
        component : GetAvailabeleCouponsByTypeComponent
      },
      {
        path : 'getallbyprice' ,
        component : GetAvailabeleCouponsByPriceComponent
      },
      {
        path: 'getmycoupons',
        component: GetMyCouponsComponent
      },
      {
        path : 'getmybytype' ,
        component : GetMyCouponsByTypeComponent
      },
      {
        path : 'getmybyprice' ,
        component : GetMyCouponsByPriceComponent
      }            
    ])
  ],
  providers: [DataService,  {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
