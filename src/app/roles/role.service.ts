import { Injectable } from '@angular/core';

import { Role } from './role';
import { ROLES } from '../mocks';

@Injectable()
export class RoleService {

  getRoles(): Promise<Role[]> {
    return Promise.resolve(ROLES);
  }

}
