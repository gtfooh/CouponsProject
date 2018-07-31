import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-shutdown',
  templateUrl: './shutdown.component.html',
  styleUrls: ['./shutdown.component.css']
})
export class ShutdownComponent implements OnInit {
  
  
  constructor( private _http : Http) {   }
  
  public shutDown()
  {
    this._http.get('/admin-api/shutdown').subscribe(function(response)
    {console.log(response);
   });
  }

  public goBack(){
    window.history.back();
  }

  ngOnInit() {
  }

}
