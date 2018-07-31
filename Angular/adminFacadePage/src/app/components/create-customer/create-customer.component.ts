import { Component, OnInit } from '@angular/core';
import { Customer } from '../../common/Customer';
import { Http } from '@angular/http';
import swal from 'sweetalert2';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  public customer : Customer = new Customer ();



  public addCustomer()
  {
    swal({
      title: 'Are you sure you wnat to create this customer?',
      text: "You can't cancel this process",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    }).then((result) => {
      if (result.value) {
        this._http.post('/admin-api/customer',
        this.customer).subscribe(
          function(response){
            swal(
              'Success',
              'Customer created successfully',
              'success'
            )
        },
        function(error){
          swal(
            'Failed!',
            'creation failed.',
            'error'
          )
        }
      );
        
      }
    })
  }


  constructor( private _http : Http ) {   }

  ngOnInit() {
  }

}
