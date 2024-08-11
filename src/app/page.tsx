import React from 'react';
import TokensInformation from '@/components/general/TokensInformation';
import RendersOrdersList from '@/components/general/RenderOrdersList';

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <TokensInformation />
      <RendersOrdersList />
    </div>
  );
}
