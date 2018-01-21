import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './components/application/app.component';
import {EmployeesComponent} from './components/employees/employees.component';
import {CompanyComponent} from './components/company/company.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
