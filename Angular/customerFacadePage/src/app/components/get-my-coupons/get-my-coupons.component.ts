import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../common/Coupon';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-get-my-coupons',
  templateUrl: './get-my-coupons.component.html',
  styleUrls: ['./get-my-coupons.component.css']
})
export class GetMyCouponsComponent implements OnInit {
  public _coupons : Coupon[] = 
  [
   
  ]
 

  getCoupons()
  {
    var self=this;
   this._http.get('/customer-api/coupon')
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
