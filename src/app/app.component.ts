import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./ui/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, NavbarComponent ],
  template: `
      @defer {
        <app-navbar></app-navbar>
        <router-outlet/>
      }
  `,
  styles: `
  `,
})
export class AppComponent {}
