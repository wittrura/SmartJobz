import { Skill } from './skills/skill';
import { Company } from './companies/company';
import { Role } from './roles/role';

export const SKILLS: Skill[] = [
  {id: 1, name: 'Angular'},
  {id: 2, name: 'HTML'},
  {id: 3, name: 'CSS'},
  {id: 4, name: 'Bootstrap'},
  {id: 5, name: 'Node.js'},
];

export const COMPANIES: Company[] = [
  {id: 6, name: 'HomeAway', notes: 'Recently announced new CTO, $10MM total funded'},
  {id: 7, name: 'Main Street Hub', notes: 'Based in Austin'},
  {id: 8, name: 'Duo Security', notes: 'Secruity firm'},
  {id: 9, name: 'Conde Nast', notes: 'Dan DeGreef - engineer'},
  {id: 10, name: 'BigCommerce', notes: 'Values work-life balance'},
];

export const ROLES: Role[] = [
  {id: 1, name: 'Full-Stack Engineer'},
  {id: 2, name: 'Backend Engineer'},
  {id: 3, name: 'QA Tester'},
  {id: 4, name: 'Customer Solutions Engineer'}
];
