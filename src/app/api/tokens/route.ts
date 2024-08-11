import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tokens = searchParams.get('tickers')?.split(',') || [];

  try {
    const tokenData = await Promise.all(
      tokens.map(async (ticker) => {
        const response = await fetch(
          `https://api.ordinalsbot.com/opi/v1/brc20/ticker_info?ticker=${ticker}`,
          {
            headers: {
              'x-api-key': process.env.NEXT_PUBLIC_ORDINALS_API, // API key
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch token data for ${ticker}`);
        }

        const { result: data } = await response.json();
        const maxSupplyInTokens =
          parseFloat(data.max_supply) / Math.pow(10, data.decimals);
        const remainingSupplyInTokens =
          parseFloat(data.remaining_supply) / Math.pow(10, data.decimals);

        return {
          name: ticker,
          max_supply: maxSupplyInTokens,
          remaining_supply: remainingSupplyInTokens,
        };
      })
    );

    return NextResponse.json(tokenData);
  } catch (error) {
    console.error('Failed to fetch token data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch token data' },
      { status: 500 }
    );
  }
}
