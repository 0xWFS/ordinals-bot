'use client';
import React, { useState, useEffect } from 'react';
import { Tabs } from '../Tabs/Tabs';
import { tokens as initialTokens } from '@/constants';

export default function TokensInformation() {
  const [tickers, setTickers] = useState<string[]>(initialTokens);
  const [tokenData, setTokenData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newTicker, setNewTicker] = useState<string>('');

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

  const handleAddTicker = () => {
    if (newTicker && !tickers.includes(newTicker)) {
      setTickers((prev) => [...prev, newTicker.toLowerCase()]);
      setNewTicker('');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col items-center mt-5 gap-5">
      <div className="flex items-center gap-2 w-full justify-between">
        <input
          type="text"
          value={newTicker}
          onChange={(e) => setNewTicker(e.target.value)}
          placeholder="Enter token ticker"
          className="border border-gray-300 px-3 py-1 rounded-xl text-sm"
        />
        <button
          onClick={handleAddTicker}
          className="px-4 py-2 rounded-xl text-xs bg-slate-300"
        >
          Add Token
        </button>
      </div>

      <Tabs tabs={tokenData} />
    </div>
  );
}
