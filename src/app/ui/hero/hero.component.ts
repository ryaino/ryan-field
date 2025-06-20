import { Component, Inject, Injector } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { APP_BASE_HREF } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  baseHref = Inject(APP_BASE_HREF);
}
