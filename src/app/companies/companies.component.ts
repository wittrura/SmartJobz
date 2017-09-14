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
  isInEditMode: boolean;
  editedCompany: Company;

  constructor(private companyService: CompanyService) { }

  getCompanies(): void {
    this.companyService.getCompanies().then(companies => this.companies = companies);
  }

  ngOnInit() {
    this.getCompanies();
    this.isInEditMode = false;
  }

  addCompany(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.companyService.create(name)
      .then(company => {
        this.companies.push(company);
      });
  }

  toggleEdit(company: Company): void {
    if (this.isInEditMode && this.editedCompany === company) {
      this.isInEditMode = false;
      this.editedCompany = null;
      return;
    } else {
      this.isInEditMode = true;
      this.editedCompany = company;
      console.log(this.isInEditMode);
      console.log(this.editedCompany);
    }
  }

  saveEdits(company: Company): void {
    // change company name from <p> to <input> with name placeholder
    // change notes from <p> to <input> with notes placeholder
    return;
  }

  deleteCompany(company: Company): void {
    return;
  }

}
