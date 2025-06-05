export interface ClientInfoInteface {
    firstName: string;
    lastName: string;
    middleName?: string;
    gender: 'Мужчина' | 'Женщина';
    birthDate: Date;
    email: string;
    phone: string;
    passport: string;
}
