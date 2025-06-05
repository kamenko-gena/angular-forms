export interface TransactionInfoInterface {
    transactionType: 'Перевод' | 'Оплата' | 'Пополнение';
    amount: number;
    currency: 'RUB' | 'USD' | 'EUR';
    comment?: string;
}
