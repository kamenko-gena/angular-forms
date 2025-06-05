import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passportValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (!control || control.value === null) {
            return null;
        }
        const passport = control.value;
        return /^\d{4}\s\d{6}$/.test(passport)
            ? null
            : { invalidPassport: true };
    };
}
