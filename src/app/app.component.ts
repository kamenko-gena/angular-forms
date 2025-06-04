import { Component } from '@angular/core';
import { TuiAccordionModule } from '@taiga-ui/kit';
import { ClientInfoFormComponent } from './components/client-info-form/client-info-form.component';
import { TuiRootModule } from '@taiga-ui/core';
import { ClientAdressFormComponent } from './components/client-adress-form/client-adress-form.component';
import { BankDetailsFormComponent } from './components/bank-details-form/bank-details-form.component';
import { TransactionInfoFormComponent } from './components/transaction-info-form/transaction-info-form.component';

@Component({
    standalone: true,
    imports: [
        TuiRootModule,
        TuiAccordionModule,
        ClientInfoFormComponent,
        ClientAdressFormComponent,
        BankDetailsFormComponent,
        TransactionInfoFormComponent,
    ],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.less',
})
export class AppComponent {}
