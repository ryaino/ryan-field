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
    <app-tools></app-tools>
    <hr>
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
