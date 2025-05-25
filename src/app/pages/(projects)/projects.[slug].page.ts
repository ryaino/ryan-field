import { afterNextRender, Component } from '@angular/core';
import { ProjectAttributes } from './models/project.attributes.model';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-project-details',
  imports: [MarkdownComponent],
  standalone: true,
  template: ` <analog-markdown [content]="post$()?.content" /> `,
  styles: ``,
})
export default class ProjectDetailsPage {
  readonly post$ = toSignal(
    injectContent<ProjectAttributes>({
      param: 'slug',
      subdirectory: 'projects',
    }),
  );
}
