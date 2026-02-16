This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

### Prerequisites
1. Git repository initialized (already done)
2. GitHub account (to create a new repository)
3. Vercel account

### Deployment Steps

1. **Create a new GitHub repository:**
   - Go to GitHub and create a new repository (e.g., `proptz-local-landing`)
   - Do NOT initialize it with a README, .gitignore, or license (since we already have these)

2. **Connect your local repository to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```
   (You'll need to authenticate with GitHub when pushing)

3. **Deploy to Vercel:**
   - Go to [Vercel](https://vercel.com/new)
   - Click "Import Project" and select your GitHub repository
   - Vercel will automatically detect Next.js and configure the build settings
   - Add environment variable:
     - **Name:** `GOOGLE_SHEETS_WEBHOOK_URL`
     - **Value:** Your Google Apps Script webhook URL (from the setup documentation)
   - Click "Deploy"

4. **Environment Variables:**
   - In Vercel dashboard, go to your project → Settings → Environment Variables
   - Add `GOOGLE_SHEETS_WEBHOOK_URL` with your webhook URL
   - Redeploy after adding environment variables

### Notes
- The project is already configured for Vercel deployment
- All necessary files are committed and ready
- See `GOOGLE_SHEETS_API_SETUP.md` for Google Sheets integration setup

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
