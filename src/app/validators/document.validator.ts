import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function documentValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (!control || control.getRawValue() === null) {
            return null;
        }

        const document = control.value.document;
        const documentNumber = control.value.documentNumber;
        return documentNumber.length !== document.length
            ? { invalidDocument: true }
            : null;
    };
}
