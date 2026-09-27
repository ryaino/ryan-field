import { Component } from '@angular/core';

@Component({
  selector: 'app-needles',
  standalone: true,
  imports: [],
  template: `
    <header class="centered-column gap-4">
      <h2 class="bold">Needles</h2>
      <p class="text-center">
        Needles is my cat and companion. She follows me everywhere around the
        house and always demands to sit on my lap whether I'm at my desk working
        or relaxing on the couch. This page is just a place for me to share some
        of my favourite pictures of her.
      </p>
    </header>

    <section class="gallery">
      @for (image of images; track image) {
        <div class="image-container">
          <img class="rounded-3 rad-shadow" [src]="image" alt="" />
        </div>
      }
    </section>
  `,
  styles: [
    `
      .image-container {
        height: var(--size-fluid-9);
        flex-grow: 1;

        img {
          max-height: 100%;
          min-width: 100%;
          object-fit: cover;
          vertical-align: bottom;
        }
      }

      .gallery {
        margin-top: var(--size-fluid-4);
        display: flex;
        flex-wrap: wrap;
        gap: var(--size-2);
      }
    `,
  ],
})
export default class NeedlesPageComponent {
  baseUrl = import.meta.env.BASE_URL;
  totalImages = 6;
  images: string[] = [];

  constructor() {
    for (let i = 1; i <= this.totalImages; i++) {
      this.images.push(`${this.baseUrl}assets/needles/needles-${i}.jpg`);
    }
  }
}
