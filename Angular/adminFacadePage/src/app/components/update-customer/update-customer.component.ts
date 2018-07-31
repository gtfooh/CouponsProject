import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Customer } from '../../common/Customer';
import 'rxjs/add/operator/map';
import swal from 'sweetalert2';
import { DataService } from '../../data.service';


@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  public idtoedit:Number = this._service.customeridtoshow;
  public customer : Customer = new Customer();
  
  getCustomer()
  {
    var url = '/admin-api/customer/'+ this.idtoedit;
    var self=this;
   this._http.get(url)
   .map(
    function (customerResponse)
    {
      return customerResponse.json();
    }
   ).subscribe(
     function(customer)
     {
        self.customer = customer;``
     }
   )
  }

  public updateCustomer()
  {
    
    swal({
      title: 'Are you sure?',
      text: "These changes will be saved permanently",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {

        this._http.put('/admin-api/customer',
        this.customer).subscribe(function(response)
        {console.log(response);
          swal(
            'Updated!',
            'This customer has been updated successfully.',
            'success'
          )
       });
          
      }
    })
  }

  public removeCustomer()
  {

    swal({
      title: 'Are you sure?',
      text: "This customer will be deleted permanently",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {

        this._http.patch('/admin-api/customer',
        this.customer).subscribe(function(response)
        {console.log(response);
       });
           swal(
          'Deleted!',
          'This customer has been deleted.',
          'success'
        )
      }
    })


  }

  constructor( private _http : Http , private _service:DataService) { }

  ngOnInit() {
    this.getCustomer();
  }

}
