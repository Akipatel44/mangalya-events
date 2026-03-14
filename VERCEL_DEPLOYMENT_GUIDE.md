# Mangalya Event Management - Vercel Deployment Guide

A complete step-by-step guide to deploy your Next.js website on Vercel.

## ⚡ Quick Overview

You have **2 deployment methods**:
1. **Git Integration** (Recommended) - Automatic deployments on every push
2. **Vercel CLI** - Direct deployment from command line

---

## Method 1: Git Integration (Recommended)

This method automatically deploys your site whenever you push code to GitHub/GitLab/Bitbucket.

### Step 1: Initialize Git Repository Locally

```bash
cd d:/Projects/mangalam-events
git init
git add .
git commit -m "Initial commit: Mangalya Event Management website"
```

### Step 2: Create Repository on GitHub

1. Go to [github.com](https://github.com) and sign in
2. Click **"New"** button (top left)
3. Enter repository name: `mangalya-events`
4. Add description: "Premium event management website"
5. Select **Public** or **Private** (your choice)
6. Click **"Create repository"**

### Step 3: Connect Local Repository to GitHub

GitHub will show you commands to run. Copy and run these commands:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mangalya-events.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 4: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and click **"Sign Up"**
2. Choose **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub account
4. Click **"New Project"**
5. You'll see your GitHub repositories - select **`mangalya-events`**
6. Click **"Import"**

### Step 5: Configure Project Settings

The settings page will appear. Keep the defaults:
- **Framework Preset:** Next.js ✓ (auto-detected)
- **Root Directory:** ./ (current directory)
- **Build Command:** `npm run build` ✓
- **Output Directory:** `.next` ✓

Click **"Deploy"**

### Step 6: Wait for Deployment

Vercel will:
1. Build your project
2. Generate a deployment URL
3. Show you a success screen

Your site is now live! You'll get a URL like: `https://mangalya-events.vercel.app`

### Step 7: Set Up Automatic Deployments (Optional but Recommended)

Once imported, every time you push to GitHub, Vercel automatically:
- ✅ Builds your project
- ✅ Creates a preview URL for pull requests
- ✅ Deploys to production on main branch push

Just push code normally:
```bash
git add .
git commit -m "Update homepage"
git push origin main
```

---

## Method 2: Vercel CLI (Direct Deployment)

If you don't want to use Git, deploy directly from your computer.

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

You'll be prompted to:
1. Open the verification URL in your browser
2. Authorize the CLI
3. Return to terminal

### Step 3: Deploy Your Project

From the project directory:

```bash
cd d:/Projects/mangalam-events
vercel --prod
```

The `--prod` flag deploys directly to production (not preview).

### Step 4: Answer Prompts

When deploying, Vercel will ask:

```
? Set up and deploy "~/mangalam-events"? [Y/n] → Y
? Which scope do you want to deploy to? → Select your account
? Link to existing project? [y/N] → N (unless you already have a project)
? What's your project's name? → mangalya-events
? In which directory is your code located? → .
? Want to modify these settings? [y/N] → N
```

### Step 5: Deployment Complete

Vercel will show:
```
✨ Production: https://mangalya-events.vercel.app
```

Your site is live!

---

## Method 2B: Re-deploy with CLI

If you make changes later and want to redeploy:

```bash
cd d:/Projects/mangalam-events
vercel --prod
```

It will redeploy automatically since you've already set up the project.

---

## ✅ Verification

After deployment, verify your site is working:

### Check All Pages Load

- [ ] Home: `https://mangalya-events.vercel.app/`
- [ ] About: `https://mangalya-events.vercel.app/about`
- [ ] Services: `https://mangalya-events.vercel.app/services`
- [ ] Gallery: `https://mangalya-events.vercel.app/gallery`
- [ ] Events: `https://mangalya-events.vercel.app/events`
- [ ] Testimonials: `https://mangalya-events.vercel.app/testimonials`
- [ ] Contact: `https://mangalya-events.vercel.app/contact`

### Check Features Work

- [ ] Navbar appears on all pages
- [ ] Mobile hamburger menu works
- [ ] Gallery lightbox opens images
- [ ] Contact form submits
- [ ] Images load from Unsplash
- [ ] Animations play smoothly

### Check SEO

- [ ] Page titles show correctly in browser tab
- [ ] Meta descriptions are visible in page source
- [ ] Open Graph tags present for social sharing

---

## 🌐 Add Custom Domain (Optional)

Want to use your own domain instead of `mangalya-events.vercel.app`?

### Add Domain in Vercel Dashboard

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your **mangalya-events** project
3. Go to **Settings** → **Domains**
4. Enter your domain (e.g., `mangalya-events.com`)
5. Click **"Add"**

### Update Domain's DNS Records

Vercel will show you DNS records to add. Contact your domain provider and add them.

Common providers:
- GoDaddy
- Namecheap
- Google Domains
- AWS Route 53

Your domain will be live in 24-48 hours.

---

## 📊 Monitor Your Deployment

### Vercel Dashboard

Access at [vercel.com/dashboard](https://vercel.com/dashboard)

You can see:
- **Deployments** - All deployed versions
- **Analytics** - Page views, response times
- **Logs** - Build and runtime logs
- **Settings** - Project configuration

### View Build Logs

If deployment fails:

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click your **mangalya-events** project
3. Go to **Deployments**
4. Click the failed deployment
5. View **Logs** tab for errors

---

## 🔄 Rollback a Deployment

### If Something Goes Wrong

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select **mangalya-events** project
3. Go to **Deployments**
4. Find a previous working deployment
5. Click the **"..."** menu
6. Click **"Promote to Production"**

Your site instantly reverts to the previous version!

---

## 🔐 Environment Variables (If Needed)

If you add sensitive data later (API keys, etc.):

1. Go to project **Settings** → **Environment Variables**
2. Click **"Add New"**
3. Enter **Name** and **Value**
4. Select which environments (Production/Preview/Development)
5. Click **"Save"**
6. Click **"Redeploy"** to apply changes

---

## 📱 Automatic Preview URLs for Pull Requests (Git Only)

When using Git integration, every pull request gets a unique preview URL:

**Example:**
- PR opened on branch `improve-footer`
- Preview URL: `https://mangalya-events-git-improve-footer-PROJECT.vercel.app`
- Main site: `https://mangalya-events.vercel.app` (unchanged)

This lets you test changes before merging!

---

## 🚀 Continuous Deployment Workflow

### Using Git (Recommended)

```bash
# 1. Make changes locally
# ... edit files ...

# 2. Commit changes
git add .
git commit -m "Update gallery section"

# 3. Push to GitHub
git push origin main

# 4. Vercel automatically deploys
# ✅ Site updated in ~1-2 minutes
```

No manual deployment needed!

---

## 🆘 Troubleshooting

### "Build failed" error

**Most common causes:**

1. **TypeScript errors**
   ```bash
   npm run build  # Run locally first
   ```

2. **Missing dependencies**
   ```bash
   npm install
   git add package-lock.json
   git commit -m "Update dependencies"
   git push
   ```

3. **Node version mismatch**
   - Vercel uses Node 18+ by default
   - Should work fine for this project

### "Site not loading" after deployment

1. Check deployment is complete (green checkmark in Vercel)
2. Wait 1-2 minutes for CDN cache
3. Clear browser cache (Ctrl+Shift+Delete)
4. Try incognito/private window

### Images not showing

- Using Unsplash URLs (should work)
- Check internet connection
- Verify image URLs in `/lib/data.ts`

---

## 📞 Support

- **Vercel Docs:** https://vercel.com/docs
- **Vercel Help:** https://vercel.com/help
- **GitHub Issues:** Create issue in your repo

---

## ✨ Summary

| Feature | Git Integration | CLI |
|---------|-----------------|-----|
| Setup Time | 5 mins | 2 mins |
| Auto Deploy | ✅ Yes | ❌ Manual |
| Preview URLs | ✅ Yes | ❌ No |
| Easy Rollback | ✅ Yes | ✅ Yes |
| Collaboration | ✅ Yes | ❌ Single person |
| **Recommended** | ✅ **YES** | For testing |

---

**Your Mangalya Event Management website is ready to go live! 🎉**

Choose your deployment method above and get started.
