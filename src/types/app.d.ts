export interface TOrderFile {
  name: string;
  size: number;
  type: string;
  url: string;
  completed?: boolean;
  inscriptionId?: string;
  processing?: boolean;
  s3Key?: string;
  sent?: string;
  status?: string;
  tx?: {
    inscription: string;
    reveal: string;
    totalFees: number;
    updatedAt: number;
  };
}

export interface TOrderCharge {
  address: string;
  amount: number;
  auto_settle?: boolean;
  chain_invoice?: {
    address: string;
  };
  created_at: number;
  currency: string;
  desc_hash?: boolean;
  description: string;
  fiat_value: number;
  hosted_checkout_url: string;
  id: string;
  lightning_invoice?: {
    expires_at: number;
    payreq: string;
  };
  source_fiat_value: number;
  status: string;
  ttl?: number;
  uri?: string;
  callback_url?: string;
}

export interface TOrder {
  additionalFeeCharged: number;
  baseFee: number;
  chainFee: number;
  charge: TOrderCharge;
  completed?: boolean;
  createdAt: number;
  fee: number;
  files?: TOrderFile[];
  id: string;
  inscribedCount?: number;
  lowPostage: boolean;
  orderType: string;
  paid?: boolean;
  postage: number;
  processing?: boolean;
  projectTag?: string;
  receiveAddress: string;
  referral?: string;
  serviceFee: number;
  state: string;
  status: string;
  rareSats?: string;
  rareSatsFee?: number;
  error?: string;
}

export interface KeyInformation {
  transactionStatus: string;
  amount: number;
  totalFees: number;
  createdAt: Date | null;
  fileInformation: {
    name: string;
    size: number;
    type: string;
    url: string;
  }[];
  receiveAddress: string;
  paymentAddress: string;
  lightningInvoice?: {
    paymentRequest: string;
    expiresAt: Date | null;
  };
  orderType: string;
  projectTag?: string;
  hostedCheckoutUrl: string;
  error?: string;
}

export interface TSection {
  children: ReactNode;
}

export interface TOrderInfoLink {
  label: string;
  value: string;
  url: string;
}

export interface TOrderInfo {
  label: string;
  value: string;
}
