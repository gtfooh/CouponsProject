import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../common/Coupon';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-get-my-coupons-by-type',
  templateUrl: './get-my-coupons-by-type.component.html',
  styleUrls: ['./get-my-coupons-by-type.component.css']
})


export class GetMyCouponsByTypeComponent implements OnInit {


  public typeToGet:string;
  public _coupons : Coupon[] = 
  [

  ]
 


  getCouponsByType()
  {
    var url = '/customer-api/coupon/by-type/'+ this.typeToGet
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

  constructor(private _http:Http) { }
 
  ngOnInit() {
  }

}
