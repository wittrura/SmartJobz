import { Component, OnInit } from '@angular/core';

import { CompanyService } from './company.service';
import { Company } from './company';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: Company[];

  constructor(private companyService: CompanyService) { }

  getCompanies(): void {
    this.companyService.getCompanies().then(companies => this.companies = companies);
  }

  ngOnInit() {
    this.getCompanies();
  }

  clickedCompany(company): void {
    console.log(company);
  }

}
