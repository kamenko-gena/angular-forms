export interface ClientInfoInteface {
    firstName: string;
    lastName: string;
    middleName?: string;
    gender: 'Мужской' | 'Женский';
    birthDate: Date;
    email: string;
    phone: string;
    passport: string;
}
