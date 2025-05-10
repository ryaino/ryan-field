import { Component, signal } from '@angular/core';
import { HeroComponent } from "../ui/hero/hero.component";

@Component( {
  selector: 'app-home',
  standalone: true,
  template: `
    <app-hero></app-hero>
  `,
  styles: `
  `,
  imports: [
    HeroComponent
  ]
})
export default class HomeComponent {
  count = signal(0);

  increment() {
    this.count.update((count) => count + 1);
  }
}
