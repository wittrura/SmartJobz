import { Component, OnInit } from '@angular/core';

import { SkillService } from './skill.service';
import { Skill } from './skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[];

  constructor(private skillService: SkillService) { }

  getSkills(): void {
    this.skillService.getSkills().then(skills => this.skills = skills);
  }

  ngOnInit(): void {
    this.getSkills();
  }

}
