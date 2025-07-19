import { Component, OnInit } from '@angular/core';
import { ProjectAttributes } from './models/project.attributes.model';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { Meta } from '@angular/platform-browser';
import { AsyncPipe } from '@angular/common';
import { NgIcon, provideIcons } from "@ng-icons/core";
import { bootstrapGithub, bootstrapGlobe } from "@ng-icons/bootstrap-icons";


@Component({
  selector: 'app-project-details',
  viewProviders: [provideIcons( { bootstrapGithub, bootstrapGlobe } )],
  imports: [MarkdownComponent, AsyncPipe, NgIcon ],
  standalone: true,
  template: `

  @if (post | async; as post) {
    <h2>{{ post.attributes.title }}</h2>
    <span class="links">
      <ng-icon name="bootstrapGithub"/>
      <a class="m" [href]="post.attributes.repository"> Repository </a>

      @if(post.attributes.link) {
        <ng-icon name="bootstrapGlobe"/>
        <a [href]="post.attributes.repository"> Live Link </a>
      }
    </span>
    <analog-markdown [content]="post.content" />
    <hr>
  }`,

  styles: `
    :host {
      display: flex;
      flex-direction: column;
      gap: var(--size-4);
      margin: auto;
      max-width: max-content;
    }
  `,
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
          content: `https://localhost:5173/projects/${x.slug}`,
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
