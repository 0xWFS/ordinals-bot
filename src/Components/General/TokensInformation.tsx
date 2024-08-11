'use client';
import React, { useState, useEffect } from 'react';
import { Tabs } from '../Tabs/Tabs';
import { tokens } from '@/constants';

const tickers = tokens;

export default function TokensInformation() {
  const [tokenData, setTokenData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTokenData = async () => {
    try {
      const res = await fetch(`/api/tokens?tickers=${tickers.join(',')}`);
      const data = await res.json();

      if (res.ok) {
        setTokenData(data);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('Failed to fetch token data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTokenData();
  }, [tickers]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col items-center mt-5 gap-5">
      <Tabs tabs={tokenData} />
    </div>
  );
}
