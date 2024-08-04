export interface IAccount {
  date: any;
  name: string;
  email: string;
  status: string;
}

export interface IAccountResponse {
  success: boolean;
  message: string;
  data: {
    data: ISingleAccount[];
    total: number;
  };
}

export interface ISingleAccountResponse {
  success: boolean;
  message: string;
  data: ISingleAccount;
}

export interface ISingleAccount {
  id: number;
  firstName: string;
  lastName: string;
  companyName: string;
  companyAddress: string;
  phone: string;
  alternatePhone: string;
  RCNumber: string;
  postalCode: number;
  email: string;
  CACDoc: string;
  isActive: boolean;
  isVerified: boolean;
  createdAt: string;
}
