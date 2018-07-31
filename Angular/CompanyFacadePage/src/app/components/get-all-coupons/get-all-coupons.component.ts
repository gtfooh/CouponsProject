import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../common/Coupon';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-get-all-coupons',
  templateUrl: './get-all-coupons.component.html',
  styleUrls: ['./get-all-coupons.component.css']
})
export class GetAllCouponsComponent implements OnInit {

  public _coupons : Coupon[] = 
  [
   
  ]
  
  setIdToEdit(idToEdit : Number){
    this.service.idToEdit = idToEdit;
    this.router.navigateByUrl('/editcoupon')
  }


  getCoupons()
  {
    var self=this;
   this._http.get('/company-api/coupon')
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
