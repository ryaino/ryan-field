import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import {
  provideFileRouter,
  requestContextInterceptor,
  withDebugRoutes,
} from '@analogjs/router';
import { withInMemoryScrolling } from '@angular/router';
import {
  ContentRenderer,
  MarkdownContentRendererService,
  MarkedSetupService,
  provideContent,
  withMarkdownRenderer,
} from '@analogjs/content';
import { withPrismHighlighter } from '@analogjs/content/prism-highlighter';

export const appConfig: ApplicationConfig = {
  providers: [
    [{ provide: APP_BASE_HREF, useValue: '/ryan-field' }],
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideFileRouter(
      withDebugRoutes(),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
      }),
    ),
    provideHttpClient(
      withFetch(),
      withInterceptors([requestContextInterceptor]),
    ),
    provideContent(withMarkdownRenderer(), withPrismHighlighter()),
    MarkedSetupService,
    {
      provide: ContentRenderer,
      useClass: MarkdownContentRendererService,
    },
  ],
};
