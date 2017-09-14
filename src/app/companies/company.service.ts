import { Injectable } from '@angular/core';

import { Company } from './company';
import { COMPANIES } from '../mocks';

@Injectable()
export class CompanyService {

  getCompanies(): Promise<Company[]> {
    return Promise.resolve(COMPANIES);
  }

  create(name: string): Promise<Company> {
    let newCompany: Company;
    newCompany = {id: 10, name: name, notes: ''};
    return Promise.resolve(newCompany);
  }

}
