import { Component, OnInit } from '@angular/core';

import { RoleService } from './role.service';
import { Role } from './role';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  roles: Role[];

  constructor(private roleService: RoleService) { }

  getRoles(): void {
    this.roleService.getRoles().then(roles => this.roles = roles);
  }

  ngOnInit() {
    this.getRoles();
  }

}
