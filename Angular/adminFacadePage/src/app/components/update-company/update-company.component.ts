import { Component, OnInit } from '@angular/core';
import {Company} from '../../common/Company';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import swal from 'sweetalert2';
import { DataService } from '../../data.service';


@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  public idtoedit:Number = this._service.companyidtoshow;
  public company : Company = new Company();

  getCompany()
  {
    var url = '/admin-api/company/'+ this.idtoedit;
    var self=this;
   this._http.get(url)
   .map(
    function (companyResponse)
    {
      return companyResponse.json();
    }
   ).subscribe(
     function(company)
     {
        self.company = company;
     }
   )
  }


  public updateCompany()
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
        
    this._http.put('/admin-api/company',
    this.company).subscribe(function(response)
    {console.log(response);
      swal(
        'Updated!',
        'This company has been updated successfully.',
        'success'
      )
   });
      }
    })


  }

  public removeCompany()
  {

    swal({
      title: 'Are you sure?',
      text: "This company will be deleted permanently",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {
        
    this._http.patch('/admin-api/company',
    this.company).subscribe(function(response)
    {console.log(response);
   });

        swal(
          'Deleted!',
          'This company has been deleted.',
          'success'
        )
      }
    })

 }
  
  constructor( private _http : Http, private _service:DataService ) { }

  ngOnInit() {
    this.getCompany();
  }

}
