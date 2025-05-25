import { Component } from '@angular/core';
import { HeroComponent } from "../ui/hero/hero.component";
import { ResponsibilitiesComponent } from "../ui/responsibilities/responsibilities.component";
import { ToolsComponent } from "../ui/tools/tools.component";
import { FooterComponent } from "../ui/footer/footer.component";
import { RouteMeta } from "@analogjs/router";

export const routeMeta: RouteMeta = {
  meta: [
    {
      name: 'description',
      content: 'Description of the page',
    },
    {
      name: 'author',
      content: 'Analog Team',
    },
    {
      property: 'og:title',
      content: 'Title of the page',
    },
    {
      property: 'og:description',
      content: 'Some catchy description',
    }
  ],
};

@Component( {
  selector: 'app-home',
  standalone: true,
  template: `
    <app-hero></app-hero>
    <hr>
    <app-responsibilities></app-responsibilities>
    <hr>
    <app-tools></app-tools>
    <hr>
    <app-footer></app-footer>
    <hr>
  `,
  styles: `
  `,
  imports: [
    HeroComponent,
    ResponsibilitiesComponent,
    ToolsComponent,
    FooterComponent
  ]
})
export default class HomeComponent {

}
