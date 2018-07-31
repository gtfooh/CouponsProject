import { Injectable } from '@angular/core';
import { Coupon } from './common/Coupon';
import { Customer } from './common/Customer'
import { Company } from './common/Company'
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {


public customeridtoshow:Number;
public companyidtoshow:Number;
public customer:Customer = new Customer();
public company:Company = new Company();



  constructor( private _http : Http ) { }

}
 