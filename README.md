# Next.js 14 Project with Bitcoin Data and BRC-20 Token Fetching

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)  

This app has the ability for the user to connect their BTC wallet, to fetch BTC blockchain data and BRC-20 token information using custom API routes.

## Table of Contents

- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
  - [Bitcoin Data](#bitcoin-data)
  - [BRC-20 Token Data](#brc-20-token-data)
- [Build](#build)
- [Deployment to Vercel](#deployment-to-vercel)
- [Technologies Used](#technologies-used)

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## API Endpoints

This project includes custom API routes for fetching Bitcoin data and BRC-20 token data.

Create a local .env file, add the `NEXT_PUBLIC_ORDINALS_API=your_ordinals_bot_api_key_here`
Restart your development server to apply the changes.

### Bitcoin Data
Endpoint: `/api/bitcoin`

Method: GET
Description: Fetches the current Bitcoin price and block height.
Response:
{
  "bitcoinPrice": 50000,
  "blockHeight": 680000,
  "lastUpdated": "2024-08-10T10:00:00Z"
}

### BRC-20 Token Data
Endpoint: `/api/tokens`

Method: GET

Query Parameters:
tickers: Comma-separated list of token tickers (e.g., ordi,ombi,merl).

Description: Fetches the BRC-20 token data for the specified tickers.

Example Response:
[
  {
    "name": "ordi",
    "max_supply": 21000000,
    "remaining_supply": 5000000
  },
  {
    "name": "pepe",
    "max_supply": 100000000,
    "remaining_supply": 70000000
  }
]

## Build

To create an optimized production build, run:
`npm run build`



## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Technologies Used
Next.js 14: React framework with server-side rendering and static site generation.
TypeScript: Superset of JavaScript that adds static types.
Tailwind CSS: Utility-first CSS framework for rapid UI development.
Vercel: Hosting and deployment platform for modern web projects.
Ordinals Bot API: Used to fetch BRC-20 token data.