import { Injectable } from '@angular/core';

import { Company } from './company';
import { COMPANIES } from '../mocks';

@Injectable()
export class CompanyService {

  getCompanies(): Promise<Company[]> {
    return Promise.resolve(COMPANIES);
  }

  // createCompany(company): Promise<Company> {
  //   return this.
  // }

}
