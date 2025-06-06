import { Component } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import {
    FormArray,
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
    TuiInputDateModule,
    TuiInputModule,
    TuiSelectModule,
} from '@taiga-ui/kit';
import { TuiDay } from '@taiga-ui/cdk';
import { documentValidator } from 'src/app/validators/document.validator';

const DOCUMENTS = ['Пасспорт', 'СНИЛС', 'ИНН'];
type DocumentType = typeof DOCUMENTS;
type Document = DocumentType[number];

@Component({
    selector: 'app-document-info-form',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TuiButtonModule,
        TuiSelectModule,
        TuiDataListWrapperModule,
        TuiInputModule,
        TuiInputDateModule,
        TuiFieldErrorPipeModule,
        TuiErrorModule,
        TuiGroupModule,
        AsyncPipe,
    ],
    templateUrl: './document-info-form.component.html',
    styleUrl: './document-info-form.component.less',
    providers: [
        {
            provide: TUI_VALIDATION_ERRORS,
            useValue: {
                required: 'Обязательное заполнение!',
                invalidDocument:
                    'Длина номера документа должна быть равна длине типа документа',
            },
        },
    ],
})
export class DocumentInfoFormComponent {
    readonly documentsType = DOCUMENTS;
    documentFormArray: FormArray<FormGroup> = new FormArray<FormGroup>([]);

    addDocument(): void {
        const documentFormGroup = new FormGroup(
            {
                document: new FormControl<Document>('', {
                    validators: [Validators.required],
                }),
                documentNumber: new FormControl<string>('', {
                    validators: [Validators.required],
                }),
                issueDate: new FormControl<TuiDay>(TuiDay.currentLocal(), {
                    validators: [Validators.required],
                }),
            },
            { validators: [documentValidator()] }
        );
        this.documentFormArray.push(documentFormGroup);
    }

    removeForm(formIndex: number): void {
        this.documentFormArray.removeAt(formIndex);
    }

    submitForms(): void {
        if (this.documentFormArray.invalid) return;
        console.log(this.documentFormArray.getRawValue());
    }

    resetForms(): void {
        this.documentFormArray = new FormArray<FormGroup>([]);
    }
}
