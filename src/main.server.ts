import 'zone.js/node';
import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { provideServerRendering } from '@angular/ssr';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

export function bootstrap(context: BootstrapContext) {
  return bootstrapApplication(AppComponent, {
    ...appConfig,
    providers: [
      ...(appConfig.providers ?? []),
      provideServerRendering(),
    ],
  }, context);
}

export default bootstrap;
