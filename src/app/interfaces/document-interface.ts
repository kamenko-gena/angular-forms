export interface DocumentInterface {
    documentType: 'passport' | 'snils' | 'inn';
    documentNumber: string;
    issueDate: Date;
}
