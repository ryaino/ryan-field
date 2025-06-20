import { Component, OnInit } from '@angular/core';
import { ProjectAttributes } from './models/project.attributes.model';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { Meta } from '@angular/platform-browser';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-details',
  imports: [MarkdownComponent, AsyncPipe, RouterLink],
  standalone: true,
  template: `
  <a routerLink="../">Back to Projects</a>
   @if (post | async; as post) {
    <analog-markdown [content]="post.content" />
  }`,

  styles: ``,
})
export default class ProjectDetailsPage implements OnInit {
  readonly post = injectContent<ProjectAttributes>({
    param: 'slug',
    subdirectory: 'projects',
  });

  constructor(private meta: Meta) { }

  ngOnInit(): void {
    this.post
      .forEach((x) => {
        this.meta.updateTag({
          name: `og:url`,
          content: `https://localhost:5173/projects/${x.attributes.slug}`,
        });
        this.meta.updateTag({
          name: `og:title`,
          content: `Ryan Field - Project | ${x.attributes.title}`,
        });
        this.meta.updateTag({
          name: `og:description`,
          content: `${x.attributes.description}`,
        });
        this.meta.updateTag({
          name: `twitter:title`,
          content: `Ryan Field - Project | ${x.attributes.title}`,
        });
      });
  }
}
