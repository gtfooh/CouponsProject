import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../common/Coupon';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-get-my-coupons-by-price',
  templateUrl: './get-my-coupons-by-price.component.html',
  styleUrls: ['./get-my-coupons-by-price.component.css']
})
export class GetMyCouponsByPriceComponent implements OnInit {

  public priceToGet:number;
  public _coupons : Coupon[] = 
  [

  ]


  getCouponsByPrice()
  {
    var url = '/customer-api/coupon/by-price/'+ this.priceToGet
    var self = this;
   this._http.get(url)
   .map(
    function (couponsResponse)
    {
      return couponsResponse.json();
    }
   ).subscribe(
     function(coupons)
     {
       for(let c of coupons)
       {
         console.log(c);
       }
        self._coupons = coupons;
     }
   )
  }

  
  constructor(private _http : Http) { }

  ngOnInit() {
  }


}
