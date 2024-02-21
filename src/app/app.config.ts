import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {LucideAngularModule, Home, Search, Library, Pin, ChevronLeft, ChevronRight, Play} from "lucide-angular";

export const appConfig: ApplicationConfig = {
  providers: [
		provideRouter(routes),
		importProvidersFrom(LucideAngularModule.pick({Home, Search, Library, Pin, ChevronLeft, ChevronRight, Play}))
	],
};
