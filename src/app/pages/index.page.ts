import { Component } from '@angular/core';
import { HeroComponent } from "../ui/hero/hero.component";
import { ResponsibilitiesComponent } from "../ui/responsibilities/responsibilities.component";
import { ToolsComponent } from "../ui/tools/tools.component";

@Component( {
  selector: 'app-home',
  standalone: true,
  template: `
      <app-hero></app-hero>
      <hr>
      <app-responsibilities></app-responsibilities>
      <hr>
      @defer (on viewport){
        <app-tools></app-tools>
        <hr>
      } @placeholder {
        <section class="flex-column align-items-center gap-8">
          <h2 class="weight-6 text-center">What I Have Experience Using</h2>
        </section>
      }
  `,
  styles: `
  `,
  imports: [
    HeroComponent,
    ResponsibilitiesComponent,
    ToolsComponent
  ]
})
export default class HomeComponent {

}
