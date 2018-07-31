import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../common/Coupon';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-get-coupons-by-price',
  templateUrl: './get-coupons-by-price.component.html',
  styleUrls: ['./get-coupons-by-price.component.css']
})
export class GetCouponsByPriceComponent implements OnInit {

  public priceToGet:number;
  public _coupons : Coupon[] = 
  [

  ]


  setIdToEdit(idToEdit : Number){
    this.service.idToEdit = idToEdit;
    this.router.navigateByUrl('/editcoupon')
  }

  getCouponsByPrice()
  {
    var url = '/company-api/coupon/by-price/'+ this.priceToGet
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


  constructor(private router : Router ,private _http : Http , private service : DataService) { }

  ngOnInit() {
  }

}
 