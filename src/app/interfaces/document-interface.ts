export interface DocumentInterface {
    documentType: 'Пасспорт' | 'СНИЛС' | 'ИНН';
    documentNumber: string;
    issueDate: Date;
}
