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

## Deployment to Vercel

The easiest way to deploy your Next.js app is to use Vercel. Follow these steps:

#### Login to Vercel:

If you haven't already, log in to your Vercel account.

#### Connect your GitHub repository:

Go to your Vercel dashboard and import the project directly from GitHub.
Vercel will automatically detect that you are using Next.js and will configure the project accordingly.
Deploy:

Once connected, you can deploy your project by clicking "Deploy". Vercel will automatically handle the build process and deployment.

Your project will be live at https://your-project-name.vercel.app or any custom domain you configure.

#### Automatic Deployments:

Vercel provides automatic deployments for every push to your main branch. You can also create preview deployments for other branches.

For this app you will also need to set an env as a global parameter so API can be accessed. `NEXT_PUBLIC_ORDINALS_API`

This app is currently deployed to https://ordinals-bot.vercel.app/


## Technologies Used
Next.js 14: React framework with server-side rendering and static site generation.
TypeScript: Superset of JavaScript that adds static types.
Tailwind CSS: Utility-first CSS framework for rapid UI development.
Vercel: Hosting and deployment platform for modern web projects.
Ordinals Bot API: Used to fetch BRC-20 token data.