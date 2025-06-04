import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
    TuiButtonModule,
    TuiErrorModule,
    TuiGroupModule,
    TuiRootModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TUI_VALIDATION_ERRORS,
    TuiAccordionModule,
    TuiDataListWrapperModule,
    TuiFieldErrorPipeModule,
    TuiInputDateModule,
    TuiInputModule,
    TuiInputPhoneModule,
    TuiSelectModule,
} from '@taiga-ui/kit';
import { TuiDay } from '@taiga-ui/cdk';
import { MaskitoModule } from '@maskito/angular';

const CURRENT_DATE = new Date();
const GENDERS = ['male', 'female'];
const PASSPORT_FILLER = 'XXXX XXXXXX';
type GendersType = typeof GENDERS;
type Gender = GendersType[number];

@Component({
    selector: 'app-client-info-form',
    standalone: true,
    imports: [
        RouterModule,
        TuiRootModule,
        TuiSelectModule,
        TuiDataListWrapperModule,
        ReactiveFormsModule,
        TuiButtonModule,
        TuiInputDateModule,
        TuiInputModule,
        TuiFieldErrorPipeModule,
        TuiErrorModule,
        TuiAccordionModule,
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
                    `Максимальная длинна — ${requiredLength}`,
                minlength: ({ requiredLength }: { requiredLength: string }) =>
                    `Минимальная длинна — ${requiredLength}`,
                email: 'Некорректный адрес почты',
                pattern: 'Неверный формат',
            },
        },
    ],
})
export class ClientInfoFormComponent {
    readonly maxEdgeDate = new TuiDay(
        CURRENT_DATE.getFullYear() - 18,
        CURRENT_DATE.getMonth(),
        CURRENT_DATE.getDay()
    );
    readonly gendersType = GENDERS;
    readonly passportFiller = PASSPORT_FILLER;
    readonly passportMask = {
        mask: [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
    };
    readonly clientDataFormGroup = new FormGroup({
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
        birthDate: new FormControl<TuiDay>(this.maxEdgeDate, {
            validators: [Validators.required],
        }),
        email: new FormControl<string>('', {
            validators: [Validators.required, Validators.email],
        }),
        phone: new FormControl<string>('', {
            validators: [Validators.required],
        }),
        passport: new FormControl<string>('', {
            validators: [
                Validators.required,
                Validators.minLength(11),
                Validators.pattern(/^[0-9\s]+$/),
            ],
        }),
    });

    clientEdgeValidator(control: FormControl): { [s: string]: boolean } | null {
        if (control.value === 'нет') {
            return { clientEdge: true };
        }
        return null;
    }

    submitForm(): void {
        console.log(this.clientDataFormGroup.getRawValue());
    }
}
