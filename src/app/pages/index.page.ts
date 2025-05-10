import { Component, signal } from '@angular/core';
import { HeroComponent } from "../ui/hero/hero.component";

@Component( {
  selector: 'app-home',
  standalone: true,
  template: `
    <app-hero></app-hero>
  `,
  styles: `
    .logo {
      will-change: filter;
    }

    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }

    .read-the-docs > * {
      color: #fff;
    }

    @media (prefers-color-scheme: light) {
      .read-the-docs > * {
        color: #213547;
      }
    }
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
