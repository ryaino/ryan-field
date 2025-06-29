import { Component } from '@angular/core';
import { injectContentFiles } from '@analogjs/content';
import { RouterLink } from '@angular/router';
import { ProjectAttributes } from '../../models/project.attributes.model';

@Component({
  selector: 'app-projects-list',
  imports: [RouterLink],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss',
})
export class ProjectsListComponent {
navigateTo() {
throw new Error('Method not implemented.');
}
  readonly posts = injectContentFiles<ProjectAttributes>((contentFile) =>
    contentFile.filename.includes('/src/content/projects/'),
  );
}
