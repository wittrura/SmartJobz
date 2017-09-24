import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DisplayFilterComponent } from './display-filter/display-filter.component';

import { SkillsComponent } from './skills/skills.component';
import { SkillService } from './skills/skill.service';

import { RolesComponent } from './roles/roles.component';
import { RoleService } from './roles/role.service';

import { CompaniesComponent } from './companies/companies.component';
import { CompanyService } from './companies/company.service';
import { CompanyDetailComponent } from './companies/company-detail/company-detail.component';
import { CompanyFormComponent } from './companies/company-form/company-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    DisplayFilterComponent,
    SkillsComponent,
    RolesComponent,
    CompaniesComponent,
    CompanyDetailComponent,
    CompanyFormComponent,
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: 'skills',
        component: SkillsComponent
      },
      {
        path: 'roles',
        component: RolesComponent
      },
      {
        path: 'companies',
        component: CompaniesComponent
      }
      // {
      //   path: '',
      //   redirectTo: '/skills',
      //   pathMatch: ''
      // }
    ]),
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    SkillService,
    CompanyService,
    RoleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
