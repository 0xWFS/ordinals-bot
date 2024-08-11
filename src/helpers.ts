import { KeyInformation, TOrder } from './types/app';

export const mapOrderToKeyInformation = (order: TOrder): KeyInformation => {
  return {
    transactionStatus: `${order.state || 'unknown'}`,
    amount: order.charge?.amount || 0,
    totalFees: order.fee || 0,
    createdAt: order.createdAt
      ? new Date(order.createdAt)
      : order.charge?.created_at
      ? new Date(order.charge.created_at * 1000)
      : null,
    fileInformation:
      order.files?.map((file: any) => ({
        name: file.name || 'Unknown',
        size: file.size || 0,
        type: file.type || 'Unknown',
        url: file.url || 'N/A',
      })) || [],
    receiveAddress: order.receiveAddress || 'N/A',
    paymentAddress: order.charge?.address || 'N/A',
    lightningInvoice: order.charge?.lightning_invoice
      ? {
          paymentRequest: order.charge.lightning_invoice.payreq || 'N/A',
          expiresAt: order.charge.lightning_invoice.expires_at
            ? new Date(order.charge.lightning_invoice.expires_at * 1000)
            : null,
        }
      : undefined,
    orderType: order.orderType || 'unknown',
    projectTag: order.projectTag || undefined,
    hostedCheckoutUrl: order.charge?.hosted_checkout_url || 'N/A',
    error: order.error || undefined,
  };
};

export const truncateString = (input: string): string => {
  if (input.length <= 9) {
    return input;
  }
  return input.slice(0, 9) + '...';
};
