import { BackToHome } from '@/Components/Navigation/BackHome';

import Divider from '@/Components/General/Divider';
import {
  OrderInfoLink,
  OrderInfoSection,
  OrderInfoText,
} from '@/components/Orders';
import { mapOrderToKeyInformation } from '@/helpers';

import { TOrder } from '@/types/app';
import { Metadata } from 'next';
import BitcoinInfo from '@/Components/General/BitcoinInfo';

async function getOrder(id: string): Promise<TOrder> {
  const res = await fetch(`https://api.ordinalsbot.com/order?id=${id}`);
  const order = await res.json();
  return order;
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  return {
    title: `Order ${params.id}`,
  };
}

export default async function Order({ params }: { params: { id: string } }) {
  const order = await getOrder(params.id);

  if (!order) {
    return (
      <div className="flex flex-col max-w-3xl mx-auto">
        <BackToHome />
        <h1>Order not found</h1>
        <p>No order with ID {params.id} was found.</p>
      </div>
    );
  }

  const keyInformation = mapOrderToKeyInformation(order);

  return (
    <div className="flex flex-col max-w-3xl mx-auto mb-20 px-5">
      <BackToHome />
      <div className="mt-10">
        <h1 className="text-xl font-bold">Order Information:</h1>
      </div>
      <Divider />
      <OrderInfoSection>
        <OrderInfoText
          label="created at:"
          value={keyInformation.createdAt?.toLocaleString() || 'N/A'}
        />
        <OrderInfoText
          label="status"
          value={keyInformation.transactionStatus}
        />
        <OrderInfoText label="order type" value={keyInformation.orderType} />
      </OrderInfoSection>
      <Divider />
      <OrderInfoSection>
        <OrderInfoText
          label="recipient address"
          value={keyInformation.receiveAddress}
        />
        <OrderInfoText
          label="payment address"
          value={keyInformation.paymentAddress}
        />
      </OrderInfoSection>
      <Divider />
      <OrderInfoSection>
        <OrderInfoText label="amount" value={`${keyInformation.amount} sats`} />
        <OrderInfoText
          label="total fees"
          value={`${keyInformation.totalFees} sats`}
        />
      </OrderInfoSection>
      {keyInformation.lightningInvoice && (
        <>
          <Divider />
          <OrderInfoSection>
            <OrderInfoText
              label="Lightning Payment Request"
              value={keyInformation.lightningInvoice.paymentRequest}
            />
            <OrderInfoText
              label="expires at"
              value={
                keyInformation.lightningInvoice.expiresAt?.toLocaleString() ||
                'N/A'
              }
            />
          </OrderInfoSection>
        </>
      )}
      {keyInformation.hostedCheckoutUrl !== 'N/A' && (
        <>
          <Divider />
          <OrderInfoLink
            label="Hosted Checkout URL"
            value="view here"
            url={keyInformation.hostedCheckoutUrl}
          />
        </>
      )}
      {keyInformation.projectTag && (
        <>
          <Divider />
          <OrderInfoSection>
            <OrderInfoText
              label="project tag"
              value={keyInformation.projectTag}
            />
          </OrderInfoSection>
        </>
      )}
      {keyInformation.error && (
        <>
          <Divider />
          <OrderInfoSection>
            <OrderInfoText label="error" value={keyInformation.error} />
          </OrderInfoSection>
        </>
      )}
      <Divider />
      <h2 className="font-semibold text-xl mb-2">Files</h2>
      {keyInformation.fileInformation.length > 0 ? (
        <>
          <ul>
            {keyInformation.fileInformation.map((file, index) => (
              <li key={index}>
                <OrderInfoText label="name" value={file.name} />
                <OrderInfoText label="size" value={`${file.size} kb`} />
                <OrderInfoText label="type" value={file.type} />
                <OrderInfoLink label="url" value="View Here" url={file.url} />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>No files associated with this order.</p>
      )}
      <Divider />
      <BitcoinInfo />
    </div>
  );
}
