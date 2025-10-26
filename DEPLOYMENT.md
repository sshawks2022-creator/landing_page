# Deployment Guide - SS Security Agency

Complete guide for deploying your Next.js website to production.

---

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended) ⭐

**Why Vercel:**

- Built by Next.js creators
- Zero configuration
- Automatic HTTPS
- Global CDN
- Free for personal projects

**Steps:**

1. Push code to GitHub:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo>
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Configure environment variables:
   - `NEXT_PUBLIC_SITE_URL`: Your production URL
6. Click "Deploy"

**Done!** Your site is live in ~2 minutes.

---

### Option 2: Netlify

**Why Netlify:**

- Simple deployment
- Form handling
- Serverless functions
- Free tier available

**Steps:**

1. Push code to GitHub (see above)

2. Go to [netlify.com](https://netlify.com)

3. Click "Add new site" → "Import an existing project"

4. Select GitHub repository

5. Configure build settings:

   - **Build command:** `npm run build`
   - **Publish directory:** `.next`

6. Add environment variables:

   ```
   NEXT_PUBLIC_SITE_URL=https://yoursite.com
   ```

7. Click "Deploy"

---

### Option 3: Self-Hosted (VPS/Dedicated Server)

**Requirements:**

- Ubuntu 20.04+ or similar
- Node.js 18+
- PM2 or similar process manager
- Nginx for reverse proxy

**Setup:**

#### 1. Install Dependencies

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2
sudo npm install -g pm2

# Install Nginx
sudo apt install nginx -y
```

#### 2. Deploy Application

```bash
# Clone repository
git clone <your-repo> /var/www/ss-security
cd /var/www/ss-security

# Install dependencies
npm install

# Build for production
npm run build

# Start with PM2
pm2 start npm --name "ss-security" -- start
pm2 save
pm2 startup
```

#### 3. Configure Nginx

Create `/etc/nginx/sites-available/sssecurity`:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable site:

```bash
sudo ln -s /etc/nginx/sites-available/sssecurity /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

#### 4. SSL with Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

### Option 4: Docker Deployment

**Dockerfile:**

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

**docker-compose.yml:**

```yaml
version: "3.8"

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_SITE_URL=https://yourdomain.com
    restart: unless-stopped
```

**Deploy:**

```bash
docker-compose up -d
```

---

## 🔐 Environment Variables

### Required Variables:

```env
# Production URL
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Optional: Contact Form (if using email service)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

### Setting Environment Variables:

**Vercel:**

- Project Settings → Environment Variables

**Netlify:**

- Site Settings → Build & Deploy → Environment

**Self-Hosted:**

- Create `.env.local` file
- Never commit to git
- Add to `.gitignore`

---

## ✅ Pre-Deployment Checklist

### Code Quality:

- [ ] Run `npm run build` locally (no errors)
- [ ] Run `npm run lint` (no critical issues)
- [ ] Test all pages work
- [ ] Check mobile responsiveness
- [ ] Verify all images load

### SEO Setup:

- [ ] Update `NEXT_PUBLIC_SITE_URL` in `.env`
- [ ] Replace placeholder contact info
- [ ] Add real social media links
- [ ] Create OG image (`/public/og-image.jpg`)
- [ ] Update company details in structured data

### Performance:

- [ ] Optimize all images
- [ ] Test page load speed
- [ ] Check Core Web Vitals
- [ ] Enable compression
- [ ] Configure caching

### Security:

- [ ] HTTPS enabled
- [ ] Environment variables secured
- [ ] No sensitive data in code
- [ ] Update dependencies
- [ ] Configure security headers

---

## 📊 Post-Deployment

### 1. Verify Deployment

Test these URLs:

- Homepage: `https://yourdomain.com`
- Contact: `https://yourdomain.com/contact`
- Sitemap: `https://yourdomain.com/sitemap.xml`
- Robots: `https://yourdomain.com/robots.txt`

### 2. Submit to Search Engines

**Google Search Console:**

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property (yourdomain.com)
3. Verify ownership
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

**Bing Webmaster Tools:**

1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add site
3. Verify ownership
4. Submit sitemap

### 3. Set Up Analytics

**Google Analytics:**

1. Create GA4 property
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `.env`:
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
4. Create `app/analytics.tsx`:

   ```tsx
   import Script from "next/script";

   export function Analytics() {
     return (
       <>
         <Script
           src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
           strategy="afterInteractive"
         />
         <Script id="google-analytics" strategy="afterInteractive">
           {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
           `}
         </Script>
       </>
     );
   }
   ```

5. Add to `app/layout.tsx`:

   ```tsx
   import { Analytics } from "./analytics";

   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <Analytics />
         </body>
       </html>
     );
   }
   ```

### 4. Monitor Performance

**Tools:**

- Google PageSpeed Insights
- Google Search Console
- Google Analytics
- Vercel Analytics (if using Vercel)

### 5. Regular Maintenance

**Weekly:**

- Check site is online
- Review analytics
- Monitor error logs

**Monthly:**

- Update dependencies: `npm update`
- Check broken links
- Review search console
- Update content

**Quarterly:**

- Security audit
- Performance review
- SEO review
- Backup data

---

## 🔄 Continuous Deployment

### Auto-Deploy on Git Push

**Vercel:**

- Automatic on every push to main
- Preview deployments for PRs

**Netlify:**

- Configure in `netlify.toml`:

  ```toml
  [build]
    command = "npm run build"
    publish = ".next"

  [[redirects]]
    from = "/*"
    to = "/index.html"
    status = 200
  ```

**GitHub Actions (Self-Hosted):**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to server
        uses: easingthemes/ssh-deploy@main
        env:
          SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
          REMOTE_HOST: ${{ secrets.REMOTE_HOST }}
          REMOTE_USER: ${{ secrets.REMOTE_USER }}
          TARGET: /var/www/ss-security

      - name: Restart PM2
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.REMOTE_HOST }}
          username: ${{ secrets.REMOTE_USER }}
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          script: |
            cd /var/www/ss-security
            pm2 restart ss-security
```

---

## 🐛 Troubleshooting

### Build Fails

**Error: Module not found**

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Error: Out of memory**

```bash
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

### Site Not Loading

1. Check server is running: `pm2 status`
2. Check nginx: `sudo nginx -t`
3. Check firewall: `sudo ufw status`
4. Check DNS settings
5. Check SSL certificate: `sudo certbot certificates`

### Slow Performance

1. Enable caching in nginx
2. Use CDN for static assets
3. Optimize images further
4. Enable compression
5. Check server resources

---

## 📞 Support

For deployment issues:

- Next.js Docs: https://nextjs.org/docs/deployment
- Vercel Support: https://vercel.com/support
- Community: https://github.com/vercel/next.js/discussions

---

**Remember:** Always test in development before deploying to production!

```bash
npm run build  # Must succeed
npm start      # Test production build locally
```

Good luck with your deployment! 🚀




