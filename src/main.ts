import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';
import 'firebase';

if (environment.production) {
  enableProdMode();
}

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('workers/sw.js');
// }

platformBrowserDynamic().bootstrapModule(AppModule);
