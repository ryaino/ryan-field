import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet ],
  template: `
      @defer {
          <router-outlet/>
      }
  `,
  styles: `
  `,
})
export class AppComponent {}
