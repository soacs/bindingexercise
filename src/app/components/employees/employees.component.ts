import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Array<string>;

    constructor() {}

  ngOnInit() {
    this.employees = ["john baker", "joanne stills", "john briggins", "steve   celino"];
  }

}
