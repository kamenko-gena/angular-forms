import { Component, ViewChild } from '@angular/core';
import { TuiAccordionModule } from '@taiga-ui/kit';
import { ClientInfoFormComponent } from './components/client-info-form/client-info-form.component';
import { TuiButtonModule, TuiRootModule } from '@taiga-ui/core';
import { ClientAdressFormComponent } from './components/client-adress-form/client-adress-form.component';
import { BankDetailsFormComponent } from './components/bank-details-form/bank-details-form.component';
import { TransactionInfoFormComponent } from './components/transaction-info-form/transaction-info-form.component';
import { DocumentInfoFormComponent } from './components/document-info-form/document-info-form.component';

@Component({
    standalone: true,
    imports: [
        TuiRootModule,
        TuiButtonModule,
        TuiAccordionModule,
        ClientInfoFormComponent,
        ClientAdressFormComponent,
        BankDetailsFormComponent,
        TransactionInfoFormComponent,
        DocumentInfoFormComponent,
    ],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.less',
})
export class AppComponent {
    @ViewChild('clientInfoForm') clientInfoForm!: ClientInfoFormComponent;
    @ViewChild('clientAdressForm') clientAdressForm!: ClientAdressFormComponent;
    @ViewChild('bankDetailsForm') bankDetailsForm!: BankDetailsFormComponent;
    @ViewChild('transactionInfoForm')
    transactionInfoForm!: TransactionInfoFormComponent;
    @ViewChild('documentInfoForm') documentInfoForm!: DocumentInfoFormComponent;

    sendForms(): void {
        console.log('Отправка');
        console.table(this.clientInfoForm.clientInfoFormGroup.getRawValue());
        console.table(
            this.clientAdressForm.clientAdressFormGroup.getRawValue()
        );
        console.log(this.validForms());
    }

    validForms(): boolean {
        if (this.clientAdressForm.clientAdressFormGroup.invalid) return false;
        if (this.clientInfoForm.clientInfoFormGroup.invalid) return false;
        if (this.bankDetailsForm.bankFormGroup.invalid) return false;
        if (this.transactionInfoForm.transactionFormGroup.invalid) return false;
        if (this.documentInfoForm.documentFormArray.invalid) return false;
        return true;
    }
}
