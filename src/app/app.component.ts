import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Skill } from './skills/skill';

import { SkillService } from './skills/skill.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SkillService]
})

export class AppComponent implements OnInit {
  title = 'app works!';

  skills: Skill[];
  public isCollapsed = true;

  constructor(private skillService: SkillService) { }

  getSkills(): void {
    this.skills = this.skillService.getSkills();
  }

  ngOnInit(): void {
    this.getSkills();
  }

}
