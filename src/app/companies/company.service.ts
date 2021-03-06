import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Company } from './company';
// import { COMPANIES } from '../mocks';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CompanyService {
  private companiesUrl = 'http://localhost:8000/api/companies'; // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getCompanies(): Promise<Company[]> {
    // return Promise.resolve(COMPANIES);
    return this.http.get(this.companiesUrl)
               .toPromise()
               .then(companies => companies.json().data as Company[])
               .catch(this.handleError);
  }

  updateCompany(company: Company): Promise<Company> {
    const url = this.companiesUrl + `/${company.id}`;
    return this.http.patch(url, JSON.stringify(company), {headers: this.headers})
               .toPromise()
               .then(() => company)
               .catch(this.handleError);
  }

  createCompany(company: Company): Promise<Company> {
    return this.http.post(this.companiesUrl, JSON.stringify(company), {headers: this.headers})
               .toPromise()
               .then((newCompany) => newCompany.json().data as Company)
               .catch(this.handleError);
  }

  deleteCompany(id: number): Promise<void> {
    const url = this.companiesUrl + `/${id}`;
    return this.http.delete(url, {headers: this.headers})
               .toPromise()
               .then(() => null)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
