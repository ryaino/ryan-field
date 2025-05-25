import { Component } from '@angular/core';
import { ProjectsHeaderComponent } from './components/projects-header/projects-header.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <app-projects-header></app-projects-header>
    <hr />
    <app-projects-list></app-projects-list>
  `,
  styles: ``,
  imports: [ProjectsHeaderComponent, ProjectsListComponent],
})
export default class ProjectsPage {}
