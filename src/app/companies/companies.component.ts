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
  selectedCompany: Company;
  isAddingNewCompany = false;

  constructor(private companyService: CompanyService) { }

  getCompanies(): void {
    this.companyService.getCompanies().then(companies => this.companies = companies);
  }

  ngOnInit() {
    this.getCompanies();
  }

  onSelect(company): void {
    if (this.selectedCompany === company) {
      this.selectedCompany = null;
    } else {
      this.selectedCompany = company;
    }
  }

  onClickNewCompany(): void {
    this.selectedCompany = null;
    this.isAddingNewCompany = !this.isAddingNewCompany;
  }

  // need to define function with arrow function to bind context when passing
  // to child company-form component
  createCompany = (company: Company) => {
    this.companies.push(company);
    this.selectedCompany = null;
    this.isAddingNewCompany = false;
  }
}
