import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../common/Coupon';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DataService } from '../../data.service';
import swal from 'sweetalert2';



@Component({
  selector: 'app-edit-coupons',
  templateUrl: './edit-coupons.component.html',
  styleUrls: ['./edit-coupons.component.css']
})
export class EditCouponsComponent implements OnInit {

  public idtoedit:Number = this.service.idToEdit;
  public coupon : Coupon = new Coupon();


  getCoupon()
  {
    var url = '/company-api/coupon/'+ this.idtoedit;
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

  
  public updateCoupon()
  {
    if (this.coupon.title == null || this.coupon.type == null ||this.coupon.startDate == null || this.coupon.endDate == null ||this.coupon.amount == null || this.coupon.price == null) {
      swal(
        'Error',
        'You must enter all the required details',  
        'error'
      )
    }
    else {
      swal({
        title: 'Are you sure you wnat to update this coupon?',
        text: "You can't cancel this action",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      }).then((result) => {
        if (result.value) {
          this._http.put('/company-api/coupon',
      this.coupon).subscribe(function(response) 
      {
              swal(
                'Updated!',
                'Coupon updated successfully.',
                'success'
              )
          },
          function(error){
            swal(
              'Failed!',
              'Update coupon failed.',
              'error'
            )
          }
        );  
        }
      })
    }
}
  
  public removeCoupon()
  {
    swal({
      title: 'Are you sure you wnat to delete this coupon?',
      text: "You can't cancel this action",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    }).then((result) => {
      if (result.value) {
        this._http.patch('/company-api/coupon',
    this.coupon).subscribe(function(response) 
    {
            swal(
              'Updated!',
              'Coupon deleted successfully.',
              'success'
            )
        },
         function(error){
          swal(
            'Failed!',
            'Delete coupon failed.',
            'error'
          )
        }
      );
      }
    }) 
  }
    
  constructor(private _http : Http, private service : DataService) { }

  ngOnInit() {
     this.getCoupon();
  }

}
