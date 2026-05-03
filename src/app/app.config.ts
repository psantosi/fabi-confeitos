import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withInMemoryScrolling({scrollPositionRestoration: 'top', anchorScrolling: 'enabled'})),
    provideEnvironmentNgxMask(),
    provideHttpClient(),
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ]
};
