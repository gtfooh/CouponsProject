import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../common/Coupon';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { DataService } from '../../data.service'


@Component({
  selector: 'app-get-availabele-coupons-by-type',
  templateUrl: './get-availabele-coupons-by-type.component.html',
  styleUrls: ['./get-availabele-coupons-by-type.component.css']
})
export class GetAvailabeleCouponsByTypeComponent implements OnInit {

  public typeToGet : Text;
  public _coupons : Coupon[] = 
  [

  ]

  setIdToBuy(idfromhtml : Number){
    this.service.idtoshow = idfromhtml;
    this.router.navigateByUrl('/purchase');
  }

  getCoupons()
  {
    var url = '/customer-api/coupon/available/by-type/' + this.typeToGet;
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

  constructor(private router:Router , private _http : Http , private service : DataService) { }

  ngOnInit() {
  }

}
