import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Company } from './company';
import { COMPANIES } from '../mocks';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CompanyService {
  private companiesUrl = 'http://localhost:8000/api/companies'; // URL to web api

  constructor(private http: Http) { }

  getCompanies(): Promise<Company[]> {
    // return Promise.resolve(COMPANIES);
    return this.http.get(this.companiesUrl)
               .toPromise()
               .then(companies => companies.json().data as Company[])
               .catch(this.handleError);
  }

  // createCompany(company): Promise<Company> {
  //   return this.
  // }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
