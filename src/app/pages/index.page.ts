import { Component, signal } from '@angular/core';
import { HeroComponent } from "../ui/hero/hero.component";
import { ResponsibilitiesComponent } from "../ui/responsibilities/responsibilities.component";

@Component( {
  selector: 'app-home',
  standalone: true,
  template: `
      <app-hero></app-hero>
      <hr>
      <app-responsibilities></app-responsibilities>
      <hr>
  `,
  styles: `
  `,
  imports: [
    HeroComponent,
    ResponsibilitiesComponent
  ]
})
export default class HomeComponent {
  count = signal(0);

  increment() {
    this.count.update((count) => count + 1);
  }
}
