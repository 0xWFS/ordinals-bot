import React from 'react';
import TokensInformation from '@/Components/General/TokensInformation';
import RendersOrdersList from '@/Components/General/RenderOrdersList';

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <TokensInformation />
      <RendersOrdersList />
    </div>
  );
}
