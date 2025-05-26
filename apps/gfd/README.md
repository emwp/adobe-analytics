# Adobe Analytics Demo - GFD App

This is the main application that demonstrates Adobe Analytics implementation with Next.js, including micro-frontend integration via iframe.

## Environment Variables

Create a `.env.local` file in the root of this app with the following variables:

```bash
# URL for the iframe micro-frontend app
# For local development:
NEXT_PUBLIC_IFRAME_URL=http://localhost:3001
# For production (replace with your deployed iframe app URL):
# NEXT_PUBLIC_IFRAME_URL=https://your-iframe-app.vercel.app

# Adobe Analytics Configuration (optional)
NEXT_PUBLIC_ADOBE_REPORT_SUITE=dev-analytics-suite
NEXT_PUBLIC_ADOBE_TRACKING_SERVER=analytics.example.com
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
