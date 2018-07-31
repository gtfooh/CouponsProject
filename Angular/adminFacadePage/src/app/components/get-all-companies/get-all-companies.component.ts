import { Component, OnInit } from '@angular/core';
import {Company} from '../../common/Company';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-companies',
  templateUrl: './get-all-companies.component.html',
  styleUrls: ['./get-all-companies.component.css']
})
export class GetAllCompaniesComponent implements OnInit {

  public _companies : Company[] = 
  [
   
  ]

 
  getCompanies()
  {
    var self=this;
   this._http.get('/admin-api/company')
   .map(
    function (companiesResponse)
    {
      return companiesResponse.json();
    }
   ).subscribe(
     function(companies)
     {
       for(let c of companies)
       {
         console.log(c);
       }
        self._companies = companies;
     }
   ) 
  }

  updateCompany(idfromurl:Number)
  {
    this._servcie.companyidtoshow = idfromurl;
    this.router.navigateByUrl('/updatecompany')
  }
  
  constructor(private _http : Http, private _servcie:DataService, private router:Router) {
  }
  ngOnInit() {
  }
}
