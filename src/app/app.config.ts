import {ApplicationConfig, provideBrowserGlobalErrorListeners} from '@angular/core';
import {provideRouter, withComponentInputBinding, withInMemoryScrolling} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {API_URL} from './core/utils/tokens';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withInMemoryScrolling({scrollPositionRestoration: 'top'})
    ),
    provideHttpClient(),
    {
      provide: API_URL,
      useValue: environment.apiUrl,
    }
  ]
};

