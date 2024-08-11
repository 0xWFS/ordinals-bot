'use client';
import { timeInterval } from '@/constants';
import React, { useState, useEffect } from 'react';
import { OrderInfoSection, OrderInfoText } from '../Orders';

export default function BitcoinInfo() {
  const [bitcoinPrice, setBitcoinPrice] = useState<number | null>(null);
  const [blockHeight, setBlockHeight] = useState<number | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchBitcoinData = async () => {
    try {
      const res = await fetch('/api/bitcoin');
      const data = await res.json();

      setBitcoinPrice(data.bitcoinPrice);
      setBlockHeight(data.blockHeight);
      setLastUpdated(new Date(data.lastUpdated));
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch Bitcoin data:', error);
    }
  };

  useEffect(() => {
    fetchBitcoinData();

    const intervalId = setInterval(fetchBitcoinData, timeInterval);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-5">Current Bitcoin Data</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <OrderInfoSection>
          <OrderInfoText label="price" value={`${bitcoinPrice?.toFixed(2)}`} />
          <OrderInfoText label="block height" value={`${blockHeight}`} />
          <OrderInfoText
            label="price"
            value={`${lastUpdated?.toLocaleString()}`}
          />
        </OrderInfoSection>
      )}
    </div>
  );
}
