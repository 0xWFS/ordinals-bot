import { TOrderInfoLink } from '@/types/app';
import Link from 'next/link';

export default function OrderInfoLink({ label, value, url }: TOrderInfoLink) {
  return (
    <p className="capitalize text-wrap">
      <span className="font-semibold">{label}:</span>{' '}
      <Link href={url} target="_blank" className="text-sm text-pretty">
        {value}
      </Link>
    </p>
  );
}
