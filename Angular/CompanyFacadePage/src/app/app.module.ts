import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CreateCouponComponent } from './components/create-coupon/create-coupon.component';
import { GetAllCouponsComponent } from './components/get-all-coupons/get-all-coupons.component';
import { EditCouponsComponent } from './components/edit-coupons/edit-coupons.component';
import { GetCouponsByTypeComponent } from './components/get-coupons-by-type/get-coupons-by-type.component';
import { GetCouponsByDateComponent } from './components/get-coupons-by-date/get-coupons-by-date.component';
import { GetCouponsByPriceComponent } from './components/get-coupons-by-price/get-coupons-by-price.component';
import { DataService } from './data.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common'



@NgModule({
  declarations: [
    AppComponent,
    CreateCouponComponent,

    GetAllCouponsComponent,
    EditCouponsComponent,
    GetCouponsByTypeComponent,
    GetCouponsByDateComponent,
    GetCouponsByPriceComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot ([
      {
        path: 'create',
        component: CreateCouponComponent
      },
      {
        path: 'getallcoupons',
        component: GetAllCouponsComponent
      },
      {
        path: 'editcoupon', 
        component: EditCouponsComponent
      },
      {
        path : 'getbytype' ,
        component : GetCouponsByTypeComponent
      },
      {
        path : 'getbydate' ,
        component : GetCouponsByDateComponent
      },
      {
        path : 'getbyprice' ,
        component : GetCouponsByPriceComponent
      }      
    ])
  ],
  providers: [DataService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
