import { TSection } from '@/types/app';

export default function OrderInfoSection({ children }: TSection) {
  return <div className="flex flex-col gap-2">{children}</div>
}
