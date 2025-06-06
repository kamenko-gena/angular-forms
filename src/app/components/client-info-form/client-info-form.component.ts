import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
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
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TUI_VALIDATION_ERRORS,
    TuiDataListWrapperModule,
    TuiFieldErrorPipeModule,
    TuiInputDateModule,
    TuiInputModule,
    TuiInputPhoneModule,
    TuiSelectModule,
} from '@taiga-ui/kit';
import { TuiDay } from '@taiga-ui/cdk';
import { MaskitoModule } from '@maskito/angular';
import { ageValidator } from 'src/app/validators/age.validator';
import { phoneNumberValidator } from 'src/app/validators/phone-number.validator';
import { passportValidator } from 'src/app/validators/passport.validator';

const CURRENT_DATE = new Date();
const GENDERS = ['Мужской', 'Женский'];
const PASSPORT_FILLER = 'XXXX XXXXXX';
type GendersType = typeof GENDERS;
type Gender = GendersType[number];

@Component({
    selector: 'app-client-info-form',
    standalone: true,
    imports: [
        TuiSelectModule,
        TuiDataListWrapperModule,
        ReactiveFormsModule,
        TuiButtonModule,
        TuiInputDateModule,
        TuiInputModule,
        TuiFieldErrorPipeModule,
        TuiErrorModule,
        TuiGroupModule,
        TuiInputPhoneModule,
        TuiTextfieldControllerModule,
        MaskitoModule,
        AsyncPipe,
    ],
    templateUrl: './client-info-form.component.html',
    styleUrl: './client-info-form.component.less',
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
                email: 'Некорректный адрес почты',
                pattern: 'Неверный формат',
                invalidAge: 'Возраст не менее 18 лет',
                invalidPhoneNumber: 'Неверный номер телефона',
                invalidPassport: 'Неверные паспортные данные',
            },
        },
    ],
})
export class ClientInfoFormComponent {
    readonly minValidDate = new TuiDay(
        CURRENT_DATE.getFullYear() - 18,
        CURRENT_DATE.getMonth(),
        CURRENT_DATE.getDay()
    );
    readonly gendersType = GENDERS;
    readonly passportFiller = PASSPORT_FILLER;
    readonly passportMask = {
        mask: [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
    };
    readonly clientInfoFormGroup = new FormGroup({
        firstName: new FormControl<string>('', {
            validators: [
                Validators.required,
                Validators.maxLength(50),
                Validators.minLength(2),
            ],
        }),
        lastName: new FormControl<string>('', {
            validators: [
                Validators.required,
                Validators.maxLength(50),
                Validators.minLength(2),
            ],
        }),
        middleName: new FormControl<string>('', {
            validators: [Validators.maxLength(50), Validators.minLength(2)],
        }),
        gender: new FormControl<Gender>('', {
            validators: [Validators.required],
        }),
        birthDate: new FormControl<TuiDay>(this.minValidDate, [
            Validators.required,
            ageValidator(),
        ]),
        email: new FormControl<string>('', {
            validators: [Validators.required, Validators.email],
        }),
        phone: new FormControl<string>('', [
            Validators.required,
            phoneNumberValidator(),
        ]),
        passport: new FormControl<string>('', {
            validators: [
                Validators.required,
                Validators.pattern(/^[0-9\s]+$/),
                passportValidator(),
            ],
        }),
    });
    submitForm(): void {
        if (this.clientInfoFormGroup.invalid) return;
        console.log(this.clientInfoFormGroup.getRawValue());
    }
    resetForm(): void {
        this.clientInfoFormGroup.reset();
    }
}
