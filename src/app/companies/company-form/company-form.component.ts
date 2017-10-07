import { Component, OnInit, Input } from '@angular/core';

import { CompanyService } from '../company.service';

import { Company } from '../company';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {
  newCompany: Company;

  @Input()
  createHandler: Function;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.newCompany = {
      name: '',
      notes: ''
    };
  }

  // updates data via service and then calls handler passed from parent
  onSubmit(company: Company): void {
    company.name = company.name.trim();
    if (!company.name) {
      return;
    }
    this.companyService.createCompany(company)
      .then((newCompany) => {
        this.createHandler(newCompany);
      });
    this.newCompany = {
      name: '',
      notes: ''
    };
  }
}
