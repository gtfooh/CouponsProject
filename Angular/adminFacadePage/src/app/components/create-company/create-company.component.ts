import { Component, OnInit } from '@angular/core';
import {Company} from '../../common/Company';
import { Http } from '@angular/http';
import swal from 'sweetalert2';


@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  public company : Company = new Company ();
  public exception : Error = new Error();
  
  constructor( private _http : Http) {   }

  ngOnInit() {
  }

  public addCompany()
  {
    swal({
      title: 'Are you sure you wnat to create this company?',
      text: "You can't cancel this process",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    }).then((result) => {
      if (result.value) {
        this._http.post('/admin-api/company',
        this.company).subscribe(
          function(response){
            swal(
              'Successs',
              'Company created succesfully',
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

}
