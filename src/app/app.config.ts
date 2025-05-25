import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
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
    provideClientHydration(),
    provideContent(withMarkdownRenderer(), withPrismHighlighter()),
    MarkedSetupService,
    {
      provide: ContentRenderer,
      useClass: MarkdownContentRendererService,
    },
  ],
};
