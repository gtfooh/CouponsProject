import { Injectable } from '@angular/core';
import { Coupon } from './common/Coupon';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {


public idtoshow:Number;
public coupon:Coupon = new Coupon();



  constructor( private _http : Http ) { }

}
