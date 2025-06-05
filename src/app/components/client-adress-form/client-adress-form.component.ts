import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import {
    TUI_VALIDATION_ERRORS,
    TuiDataListWrapperModule,
    TuiFieldErrorPipeModule,
    TuiInputModule,
    TuiSelectModule,
} from '@taiga-ui/kit';
import {
    TuiButtonModule,
    TuiErrorModule,
    TuiGroupModule,
} from '@taiga-ui/core';

const COUNTRIES = [
    'Беларусь',
    'Россия',
    'Швеция',
    'Швейцария',
    'Норвегия',
    'Финляндия',
    'Канада',
    'Дания',
    'Италия',
];
type CountriesName = typeof COUNTRIES;
type Country = CountriesName[number];

@Component({
    selector: 'app-client-adress-form',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TuiGroupModule,
        TuiSelectModule,
        TuiDataListWrapperModule,
        TuiButtonModule,
        TuiInputModule,
        TuiFieldErrorPipeModule,
        TuiErrorModule,
        AsyncPipe,
    ],
    templateUrl: './client-adress-form.component.html',
    styleUrl: './client-adress-form.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_VALIDATION_ERRORS,
            useValue: {
                required: 'Обязательное заполнение!',
                minlength: ({ requiredLength }: { requiredLength: string }) =>
                    `Минимальная длинна — ${requiredLength}`,
                pattern: 'Неверный формат!',
            },
        },
    ],
})
export class ClientAdressFormComponent {
    readonly countries = COUNTRIES;
    readonly clientAdressFormGroup = new FormGroup({
        country: new FormControl<Country>('', {
            validators: [Validators.required],
        }),
        region: new FormControl<string>('', {
            validators: [Validators.required, Validators.minLength(3)],
        }),
        city: new FormControl<string>('', {
            validators: [Validators.required, Validators.minLength(3)],
        }),
        street: new FormControl<string>('', {
            validators: [Validators.required, Validators.minLength(3)],
        }),
        house: new FormControl<string>('', {
            validators: [Validators.required, Validators.minLength(1)],
        }),
        apartment: new FormControl<string>('', {
            validators: [Validators.pattern(/^[0-9]+$/)],
        }),
        postalCode: new FormControl<string>('', {
            validators: [
                Validators.required,
                Validators.pattern(/^[0-9]+$/),
                Validators.minLength(6),
            ],
        }),
    });
    submitForm(): void {
        console.log(this.clientAdressFormGroup.getRawValue());
    }
}
