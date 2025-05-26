# Adobe Analytics Demo - Turborepo

A comprehensive demonstration of Adobe Analytics implementation with Next.js in a monorepo structure, featuring micro-frontend integration and cross-origin analytics tracking.

## Features

- **Adobe Analytics Integration**: Complete implementation with data layer pattern
- **Micro-Frontend Architecture**: Iframe-based micro-frontend with cross-origin analytics
- **Shared Analytics Package**: Reusable analytics library across multiple apps
- **Real-time Debugging**: Analytics terminal for real-time event monitoring
- **TypeScript Support**: Full type safety across all packages
- **Monorepo Structure**: Turborepo for efficient development and deployment

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `gfd`: Main [Next.js](https://nextjs.org/) app with Adobe Analytics demo
- `iframe`: Micro-frontend [Next.js](https://nextjs.org/) app for iframe integration
- `@repo/analytics`: Shared analytics library with Adobe Analytics integration
- `@repo/ui`: React component library shared by both applications
- `@repo/eslint-config`: ESLint configurations
- `@repo/typescript-config`: TypeScript configurations

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Environment Setup

For production deployment with Vercel, set up environment variables:

**GFD App (Main App):**
Create `apps/gfd/.env.local`:

```bash
# URL for the iframe micro-frontend app
NEXT_PUBLIC_IFRAME_URL=https://your-iframe-app.vercel.app
```

**Local Development:**
The iframe URL defaults to `http://localhost:3001` for local development.

### Develop

To develop all apps and packages, run the following command:

```
cd analytics
pnpm dev
```

This will start both apps:

- GFD app: http://localhost:3000
- Iframe app: http://localhost:3001

### Remote Caching

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)
- [CLI Usage](https://turborepo.com/docs/reference/command-line-reference)
