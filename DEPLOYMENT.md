# Deployment Guide for revastra.me

## Production Build
The site has been built for production in the `build/` folder.

## Deployment Options

### Option 1: Direct Upload (Traditional Hosting)
1. Upload all contents of the `build/` folder to your web server's public directory
2. Ensure your web server serves `index.html` for all routes
3. Configure your domain DNS to point to your hosting provider

### Option 2: GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d build"`
3. Add homepage field: `"homepage": "http://revastra.me"`
4. Run: `npm run deploy`

### Option 3: Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Configure custom domain: revastra.me
5. Netlify will handle SSL and CDN automatically

### Option 4: Vercel
1. Connect GitHub repository to Vercel
2. Vercel auto-detects React settings
3. Configure custom domain in Vercel dashboard
4. Automatic deployments on git push

### Option 5: Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Run: `firebase init hosting`
3. Set public directory to `build`
4. Configure single-page app: Yes
5. Deploy: `firebase deploy`

## Domain Configuration
For revastra.me, you'll need to:
1. Update DNS A records to point to your hosting provider's IP
2. Or update CNAME to point to your hosting provider's domain
3. Configure SSL certificate (most modern hosts provide this automatically)

## Files Ready for Deployment
- All production files are in the `build/` folder
- Optimized and minified for best performance
- Gzipped size: ~47.5 KB total

## Testing Locally
To test the production build locally:
```bash
npm install -g serve
serve -s build
```

Then visit http://localhost:3000 to see the production version.