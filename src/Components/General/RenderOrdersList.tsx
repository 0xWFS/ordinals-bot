import { orders } from '@/constants';
import Link from 'next/link';

export default function RendersOrdersList() {
  return (
    <div className="flex flex-col items-center mt-10 gap-5">
      <h4>Select Your Order</h4>
      <div className="flex justify-center gap-5 flex-wrap">
        {orders.map((order) => {
          return (
            <Link
              href={`/orders/${order.orderNo}`}
              key={order.orderNo}
              className="w-28 h-28 bg-slate-200 drop-shadow-xl rounded-lg flex justify-center items-center"
            >
              <p className="uppercase">{order.label}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
