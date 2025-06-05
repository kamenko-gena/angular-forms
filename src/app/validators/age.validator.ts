import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function ageValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (!control || control.value === null) {
            return null;
        }
        const inputDateYear = control.value.year;
        const currentYear = new Date().getFullYear();
        return currentYear - inputDateYear < 18 ? { invalidAge: true } : null;
    };
}
