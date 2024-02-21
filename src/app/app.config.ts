import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { LucideAngularModule, Home, Search, Library, Pin, ChevronLeft, ChevronRight, Play, Heart, Shuffle, SkipBack, SkipForward, Repeat, Mic2, ListTodo, AlignJustify, Laptop2, Volume2, Maximize2, Plus, ArrowRight, AudioLines, Volume1 } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        importProvidersFrom(
            LucideAngularModule.pick({
                Home,
                Search,
                Library,
                Pin,
                ChevronLeft,
                ChevronRight,
                Play,
                Heart,
                Shuffle,
                SkipBack,
                SkipForward,
                Repeat,
                Mic2,
				AlignJustify,
				Laptop2,
				Volume1,
				Volume2,
				Maximize2,
                Plus,
                ArrowRight,
                AudioLines 
            }),
        ),
    ],
};
