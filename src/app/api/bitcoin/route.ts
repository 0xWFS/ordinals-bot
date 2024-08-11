import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const [priceRes, blockRes] = await Promise.all([
      fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'
      ),
      fetch('https://blockchain.info/q/getblockcount'),
    ]);

    const priceData = await priceRes.json();
    const blockHeightData = await blockRes.text();

    const data = {
      bitcoinPrice: priceData.bitcoin.usd,
      blockHeight: Number(blockHeightData),
      lastUpdated: new Date().toISOString(),
    };

    return NextResponse.json(data);
  } catch (error) {
    console.error('Failed to fetch Bitcoin data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Bitcoin data' },
      { status: 500 }
    );
  }
}
