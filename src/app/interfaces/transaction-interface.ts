export interface TransactionInfoInterface {
    transactionType: 'transfer' | 'payment' | 'replenishment';
    amount: number;
    currency: 'RUB' | 'USD' | 'EUR';
    comment?: string;
}
