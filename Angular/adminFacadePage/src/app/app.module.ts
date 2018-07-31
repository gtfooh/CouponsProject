import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CreateCompanyComponent } from './components/create-company/create-company.component';
import { GetAllCompaniesComponent } from './components/get-all-companies/get-all-companies.component';
import { RouterModule } from '@angular/router';
import { UpdateCompanyComponent } from './components/update-company/update-company.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { GetAllCustomersComponent } from './components/get-all-customers/get-all-customers.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component'; 
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { ShutdownComponent } from './components/shutdown/shutdown.component';
import { DataService } from './data.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common'


@NgModule({
  declarations: [
    AppComponent,
    CreateCompanyComponent,
    GetAllCompaniesComponent,
    UpdateCompanyComponent,
    CreateCustomerComponent,
    GetAllCustomersComponent,
    UpdateCustomerComponent,
    ShutdownComponent
  ],
  imports: [
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
  }),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path : 'createcompany' ,
        component: CreateCompanyComponent
      },
      {
        path: 'getallcompanies',
        component: GetAllCompaniesComponent
      },
      {
        path: 'updatecompany',
        component: UpdateCompanyComponent
      },
      {
        path : 'createcustomer' ,
        component: CreateCustomerComponent
      },
      {
        path: 'getallcustomers',
        component: GetAllCustomersComponent
      },
      {
        path: 'updatecustomer',
        component: UpdateCustomerComponent
      },
      {
        path: 'shutdown',
        component: ShutdownComponent
      }
    ])
  ],
  providers: [DataService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
