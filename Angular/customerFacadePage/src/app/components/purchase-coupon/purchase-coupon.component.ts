import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../common/Coupon';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DataService } from '../../data.service';
import swal from 'sweetalert2'


@Component({
  selector: 'app-purchase-coupon',
  templateUrl: './purchase-coupon.component.html',
  styleUrls: ['./purchase-coupon.component.css']
})
export class PurchaseCouponComponent implements OnInit {

  public idtoshow : Number = this.service.idtoshow;
  public coupon : Coupon = new Coupon();

  
  getCoupon()
  {
    var url = '/customer-api/coupon/'+ this.idtoshow;
    var self=this;
   this._http.get(url)
   .map(
    function (couponResponse)
    {
      return couponResponse.json();
    }
   ).subscribe(
     function(coupon)
     {
        self.coupon = coupon;
     }
   )
  }

  purchseCoupon(){
    swal({
      title: 'Are you sure you wnat to buy this coupon?',
      text: "You can't cancel purchases",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    }).then((result) => {
      if (result.value) {
        this._http.post('/customer-api/coupon',
        this.coupon).subscribe(
          function(response){
            swal(
              'Puchased!',
              'Purchase success.',
              'success'
            )
        },
        function(error){
          swal(
            'Failed!',
            'Purchase failed.',
            'error'
          )
        }
      );
        
      }
    })
  }


  constructor( private _http : Http , private service : DataService ) { }

  ngOnInit() {
    this.getCoupon()
  }


}
