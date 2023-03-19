import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { AngularformsModule } from './app/angularforms/angularforms.module';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  // .catch(err => console.error(err));
  // platformBrowserDynamic().bootstrapModule(AngularformsModule)
  // .catch(err => console.error(err));
