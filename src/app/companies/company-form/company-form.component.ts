import { Component, OnInit } from '@angular/core';
import { Company } from '../company';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {
  model: Company;

  constructor() { }

  ngOnInit() {
    this.model = {
      id: 36,
      name: 'RigUp',
      notes: 'Oilfield services software'
    };
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
