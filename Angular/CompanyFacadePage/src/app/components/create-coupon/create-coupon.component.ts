import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../common/Coupon'
import { Http } from '@angular/http';
import swal from 'sweetalert2'; 

@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.css']
})
export class CreateCouponComponent implements OnInit {

  public coupon : Coupon = new Coupon();
  public imagePath : String = "1";
  public verify : String = "1";
  constructor(private _http : Http  ) { }



  ngOnInit() {
  }

  public addCoupon()
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
        title: 'Are you sure you want to create this coupon?',
        text: "You can't cancel this action",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      }).then((result) => {
        if (result.value) {
          console.log(this.coupon)
          this._http.post('/company-api/coupon',this.coupon).subscribe(function(response)
      {
              swal(
                'Created!',
                'Coupon created successfully.',
                'success'
              )
          },
          function(error){
            swal(
              'Failed!',
              'Create coupon failed.',
              'error'
            )
          }
        );
          
        }
      })
      
      
    }
}
}
