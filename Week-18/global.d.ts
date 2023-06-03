export interface IUser {
  email: string;
  password: string;
}

export interface IAsset {
  user: string;
  assets: number;
  equity: number;
  fixedIncome: number;
  alternatives: number;
}

export interface IFinance {
  user: string;
  income: number;
  expenses: number;
  savings: number;
  month: string;
  year: number;
}

export interface IInvoice {
  user: string;
  invoice: Buffer;
}

export interface IAuthPayload {
  userId: string;
}
