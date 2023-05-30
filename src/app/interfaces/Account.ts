export interface Account {
  accountId?: number;
  accountType?: string;
  accountNumber?: string;
  maskedAccountNumber?: string;
  routingNumber?: string;
  hideAccount?: boolean;
  accountBalance?: string;
}
