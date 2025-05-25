import { Component } from '@angular/core';
import { injectContentFiles } from '@analogjs/content';
import { RouterLink } from '@angular/router';
import { NgForOf, NgOptimizedImage } from '@angular/common';
import { ProjectAttributes } from '../../models/project.attributes.model';

@Component({
  selector: 'app-projects-list',
  imports: [RouterLink, NgForOf, NgOptimizedImage],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss',
})
export class ProjectsListComponent {
  readonly posts = injectContentFiles<ProjectAttributes>((contentFile) =>
    contentFile.filename.includes('/src/content/projects/'),
  );
}
