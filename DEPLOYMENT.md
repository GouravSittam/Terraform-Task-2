# Vercel Deployment Checklist

## Pre-deployment Checklist

- [ ] All dependencies are properly listed in `package.json`
- [ ] Build script works locally (`npm run build`)
- [ ] No build errors or TypeScript errors
- [ ] Environment variables are documented in `.env.example`
- [ ] Static assets are in the `public` folder
- [ ] API routes (if any) are properly configured
- [ ] Database connections (if any) are configured for production

## Vercel Configuration

- [ ] `vercel.json` is configured (✅ Created)
- [ ] `next.config.mjs` is optimized for production (✅ Updated)
- [ ] `.gitignore` includes Vercel and Next.js specific entries (✅ Updated)

## Deployment Steps

1. **Push to Git repository:**

   ```bash
   git add .
   git commit -m "feat: prepare for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel:**

   - Go to https://vercel.com/dashboard
   - Click "New Project"
   - Import your repository
   - Configure settings (auto-detected for Next.js)
   - Deploy

3. **Set Environment Variables (if needed):**

   - In Vercel dashboard > Project Settings > Environment Variables
   - Add any required environment variables

4. **Custom Domain (optional):**
   - In Vercel dashboard > Project Settings > Domains
   - Add your custom domain

## Post-deployment

- [ ] Test all pages and functionality
- [ ] Check performance with Lighthouse
- [ ] Verify environment variables are working
- [ ] Test responsive design on different devices
- [ ] Monitor for any console errors

## Useful Commands

```bash
# Install Vercel CLI (optional)
npm i -g vercel

# Deploy from CLI (optional)
vercel

# Check deployment logs
vercel logs

# Set environment variables via CLI
vercel env add
```

## Troubleshooting

### Common Issues:

1. **Build Failures:**

   - Check TypeScript errors: `npm run type-check`
   - Check ESLint errors: `npm run lint`
   - Check build locally: `npm run build`

2. **Environment Variables:**

   - Ensure they're set in Vercel dashboard
   - Prefix client-side vars with `NEXT_PUBLIC_`

3. **Image Optimization:**

   - Configure `next.config.mjs` for external images
   - Use Next.js Image component for optimal performance

4. **API Routes:**
   - Ensure serverless functions are compatible
   - Check function timeout limits (10s on free plan)

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel CLI](https://vercel.com/docs/cli)
