import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function phoneNumberValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (!control || control.value === null) {
            return null;
        }
        const inputPhoneNumber = control.value;

        return /^\+7\d{10}$/.test(inputPhoneNumber)
            ? null
            : { invalidPhoneNumber: true };
    };
}
