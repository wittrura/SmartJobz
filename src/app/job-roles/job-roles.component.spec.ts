import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobRolesComponent } from './job-roles.component';

describe('JobRolesComponent', () => {
  let component: JobRolesComponent;
  let fixture: ComponentFixture<JobRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
