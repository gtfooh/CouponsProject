import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Customer} from '../../common/Customer';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent implements OnInit {

  public _customers : Customer[] = 
  [
   
  ]
  
  
  getCustomers()
  {
    var self=this;
   this._http.get('/admin-api/customer')
   .map(
    function (customersResponse)
    {
      return customersResponse.json();
    }
   ).subscribe(
     function(customers)
     {
       for(let c of customers)
       {
         console.log(c);
       }
        self._customers = customers;
     }
   )
  }

  updateCustomer(idfromhtml:Number)
  {
    this._service.customeridtoshow = idfromhtml;
    this._router.navigateByUrl("/updatecustomer")
  }
  
  constructor(private _http : Http, private _service:DataService, private _router:Router) { }

  ngOnInit() {
  }

}
