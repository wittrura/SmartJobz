import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SkillService],
  bootstrap: [AppComponent]
})
export class AppModule { }
