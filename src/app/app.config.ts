import { provideAnimations } from '@angular/platform-browser/animations';

import {
    ApplicationConfig,
    importProvidersFrom,
    provideZoneChangeDetection,
} from '@angular/core';
import { TuiRootModule } from '@taiga-ui/core';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimations(),
        provideZoneChangeDetection({ eventCoalescing: true }),
        importProvidersFrom([TuiRootModule]),
        provideHttpClient(),
    ],
};
