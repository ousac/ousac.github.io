# Development Guide

This guide provides instructions for setting up the development environment and working on the OUSAC website.

## Prerequisites

- Node.js 18.17 or later
- npm (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ousac/website.git
   cd website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development Server

To start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page will reload when you make edits.

## Building for Production

To create a production build:

```bash
npm run build
```

This command compiles the application and optimizes it for production deployment. The output will be in the `.next` directory.

To start the production server locally:

```bash
npm start
```

## Linting and Formatting

We use ESLint for linting and Prettier for code formatting.

- **Lint:** Check for code quality issues.

  ```bash
  npx eslint src/**/*.ts
  ```

- **Format:** Automatically format code.
  ```bash
  npm run format
  ```

## Project Configuration

- **Tailwind CSS:** Configured in `tailwind.config.ts` and `src/app/globals.css`.
- **TypeScript:** Configured in `tsconfig.json`. Path aliases (`@/*`) point to the `src/` directory.
- **Next.js:** Configured in `next.config.ts`.

## Contributing

1. Create a new branch for your feature or fix.
2. Make your changes.
3. Run `npx eslint src/**/*.ts` and `npm run build` to ensure no errors.
4. Submit a pull request.
