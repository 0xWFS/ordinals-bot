import { TOrderInfo } from '@/types/app';

export default function OrderInfoText({ label, value }: TOrderInfo) {
  return (
    <p className="capitalize">
      <span className="font-semibold">{label}:</span>{' '}
      <span className="text-sm break-words">{value}</span>
    </p>
  );
}
