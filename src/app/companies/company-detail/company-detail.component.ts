import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../company';

import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  @Input() company: Company;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
  }

  save(): void {
    this.companyService.updateCompany(this.company);
    this.company = null;
  }

}
