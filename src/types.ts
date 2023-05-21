export enum VaultStatus {
  Raising = "raising",
  Live = "live",
  Closed = "closed",
}

export interface IconProps {
  fill?: string;
  opacity?: number;
}

export type Investor = {
  address: string;
  avatar: string | null;
  createdAt: Date | null;
  name: string;
  verifications?: any[];
};

export type UserInvestment = {
  address: string;
  amount: number;
};
