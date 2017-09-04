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
import { JobRolesComponent } from './job-roles/job-roles.component';
import { CompaniesComponent } from './companies/companies.component';

import { SkillService } from './skills/skill.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    DisplayFilterComponent,
    SkillsComponent,
    JobRolesComponent,
    CompaniesComponent,
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: 'skills',
        component: SkillsComponent
      },
      {
        path: 'roles',
        component: JobRolesComponent
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
  providers: [SkillService],
  bootstrap: [AppComponent]
})
export class AppModule { }
