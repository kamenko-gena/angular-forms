import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import {
    TuiButtonModule,
    TuiErrorModule,
    TuiGroupModule,
} from '@taiga-ui/core';
import {
    TUI_VALIDATION_ERRORS,
    TuiDataListWrapperModule,
    TuiFieldErrorPipeModule,
    TuiInputModule,
    TuiInputNumberModule,
    TuiSelectModule,
    TuiTextareaModule,
} from '@taiga-ui/kit';

const TRANSACTIONS = ['Transfer', 'Payment', 'Replenishment'];
type TransactionsType = typeof TRANSACTIONS;
type Transaction = TransactionsType[number];

const CURRENCIES = ['RUB', 'USD', 'EUR'];
type CurrencyType = typeof CURRENCIES;
type Currency = CurrencyType[number];

@Component({
    selector: 'app-transaction-info-form',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TuiGroupModule,
        TuiSelectModule,
        TuiDataListWrapperModule,
        TuiButtonModule,
        TuiInputModule,
        TuiInputNumberModule,
        TuiTextareaModule,
        TuiFieldErrorPipeModule,
        TuiErrorModule,
        AsyncPipe,
    ],
    templateUrl: './transaction-info-form.component.html',
    styleUrl: './transaction-info-form.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_VALIDATION_ERRORS,
            useValue: {
                required: 'Обязательное заполнение!',
                maxlength: ({ requiredLength }: { requiredLength: string }) =>
                    `Максимальная длинна — ${requiredLength}`,
                min: ({ min }: { min: string }) => `Минимальная сумма — ${min}`,
                pattern: 'Неверный формат!',
            },
        },
    ],
})
export class TransactionInfoFormComponent {
    readonly transactions = TRANSACTIONS;
    readonly currencies = CURRENCIES;
    readonly transactionFormGroup = new FormGroup({
        transactionType: new FormControl<Transaction>('', {
            validators: [Validators.required],
        }),
        amount: new FormControl<number>(1, {
            validators: [
                Validators.required,
                Validators.min(1),
                Validators.pattern(/^[0-9]+$/),
            ],
        }),
        currency: new FormControl<Currency>('RUB', {
            validators: [Validators.required],
        }),
        comment: new FormControl<string>('', {
            validators: [Validators.maxLength(200)],
        }),
    });
    submitForm(): void {
        console.log(this.transactionFormGroup.getRawValue());
    }
}
