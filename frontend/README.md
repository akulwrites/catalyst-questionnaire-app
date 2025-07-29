This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Frontend Setup

This guide explains how to set up the frontend of the psychometric-test-app locally.

## Prerequisites

- Node.js (v16 or later)
- npm (v7 or later) or yarn

## Steps to Set Up

1. **Clone the Repository**  
   Navigate to the `frontend` folder:
   ```bash
   cd /Users/akulagarwal/Documents/psychometric-test-app/frontend
   ```

2. **Install Dependencies**  
   Run the following command to install all required packages:
   ```bash
   npm install
   ```
   Or, if you prefer yarn:
   ```bash
   yarn install
   ```

3. **Environment Variables**  
   Create a `.env` file in the root of the `frontend` folder and add the following variables:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. **Run the Development Server**  
   Start the frontend application:
   ```bash
   npm start
   ```
   Or, if using yarn:
   ```bash
   yarn start
   ```

5. **Access the Application**  
   Open your browser and navigate to `http://localhost:3000`.

## Additional Notes

- Ensure the backend is running before testing API calls.
- Use `npm run build` to create a production build.
