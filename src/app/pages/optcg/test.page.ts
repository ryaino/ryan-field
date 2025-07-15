import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { injectLoad } from '@analogjs/router';
import { load } from './test.server';


@Component( {
  selector: 'app-test-page',
  standalone: true,
  template: `
    @for (product of data().products; track product.id) {
      {{product.name}}
    }
  `,
  styles: `
  `,
  imports: [

  ]
})
export default class TestPageComponent {
  data = toSignal(injectLoad<typeof load>(), { requireSync: true });
}
