import { Component } from '@angular/core';
import { TuiAccordionModule } from '@taiga-ui/kit';
import { ClientInfoFormComponent } from './components/client-info-form/client-info-form.component';
import { TuiRootModule } from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiRootModule, TuiAccordionModule, ClientInfoFormComponent],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.less',
})
export class AppComponent {}
