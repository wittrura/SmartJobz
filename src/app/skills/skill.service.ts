import { Injectable } from '@angular/core';

import { Skill } from './skill';
import { SKILLS } from '../mocks';

@Injectable()
export class SkillService {

  getSkills(): Promise<Skill[]> {
    return Promise.resolve(SKILLS);
  }

}
