import { Component } from '@angular/core';
import { TuiAccordionModule } from '@taiga-ui/kit';
import { ClientInfoFormComponent } from './components/client-info-form/client-info-form.component';
import { TuiRootModule } from '@taiga-ui/core';
import { ClientAdressFormComponent } from './components/client-adress-form/client-adress-form.component';

@Component({
    standalone: true,
    imports: [
        TuiRootModule,
        TuiAccordionModule,
        ClientInfoFormComponent,
        ClientAdressFormComponent,
    ],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.less',
})
export class AppComponent {}
