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
    TuiFieldErrorPipeModule,
    TuiInputModule,
} from '@taiga-ui/kit';

@Component({
    selector: 'app-bank-details-form',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TuiGroupModule,
        TuiButtonModule,
        TuiInputModule,
        TuiFieldErrorPipeModule,
        TuiErrorModule,
        AsyncPipe,
    ],
    templateUrl: './bank-details-form.component.html',
    styleUrl: './bank-details-form.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_VALIDATION_ERRORS,
            useValue: {
                required: 'Обязательное заполнение!',
                maxlength: ({ requiredLength }: { requiredLength: string }) =>
                    `Максимальная длина — ${requiredLength}`,
                minlength: ({ requiredLength }: { requiredLength: string }) =>
                    `Минимальная длина — ${requiredLength}`,
                pattern: 'Неверный формат',
            },
        },
    ],
})
export class BankDetailsFormComponent {
    readonly bankFormGroup = new FormGroup({
        accountNumber: new FormControl<string>('', {
            validators: [
                Validators.required,
                Validators.maxLength(20),
                Validators.pattern(/^[0-9]+$/),
            ],
        }),
        bic: new FormControl<string>('', {
            validators: [
                Validators.required,
                Validators.maxLength(9),
                Validators.pattern(/^[0-9]+$/),
            ],
        }),
        bankName: new FormControl<string>('', {
            validators: [Validators.required, Validators.minLength(3)],
        }),
        correspondentAccount: new FormControl<string>('', {
            validators: [
                Validators.required,
                Validators.maxLength(20),
                Validators.pattern(/^[0-9]+$/),
            ],
        }),
    });
    submitForm(): void {
        if (this.bankFormGroup.invalid) return;
        console.log(this.bankFormGroup.getRawValue());
    }
    resetForm(): void {
        this.bankFormGroup.reset();
    }
}
