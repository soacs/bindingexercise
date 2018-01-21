import {Component}      from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {

  companyName: string;

  constructor() {
    setTimeout(() => {
      this.companyName = "SOA Consulting Services";
    }, 2000);
  }
}
