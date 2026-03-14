# 🚀 Mangalya Event Management - Quick Deployment Checklist

## Choose Your Deployment Method

### ✅ RECOMMENDED: Git Integration + Vercel (Safest & Best for Teams)

```
Your Computer → GitHub → Vercel (Automatic)
   [Push]         [Upload]    [Deploy]
```

---

## OPTION 1: Git + Vercel (Full Guide Below)

### Prerequisites
- GitHub account (free at github.com)
- Vercel account (free at vercel.com)

### 5-Minute Setup

#### Step 1️⃣: Create GitHub Repository
```bash
cd d:/Projects/mangalam-events
git init
git add .
git commit -m "Initial commit"
```

#### Step 2️⃣: Push to GitHub
1. Go to github.com/new
2. Create repo named `mangalya-events`
3. Run on your computer:
```bash
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/mangalya-events.git
git push -u origin main
```

#### Step 3️⃣: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" → "Continue with GitHub"
3. Click "New Project"
4. Select `mangalya-events` repository
5. Click "Deploy"
6. **WAIT 2-3 minutes** ⏳
7. **DONE!** ✅ Get your live URL

### Your Site is Live! 🎉
```
https://mangalya-events.vercel.app
```

### Automatic Updates
Every time you push to GitHub, your site automatically updates:
```bash
# Make changes locally
nano app/page.tsx  # or use your editor

# Push to GitHub
git add .
git commit -m "Update homepage"
git push origin main

# ✅ Site updates in ~1-2 minutes - NO MANUAL DEPLOY NEEDED!
```

---

## OPTION 2: Vercel CLI (Quick 2-Minute Deploy)

For testing without Git integration.

### Step 1️⃣: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2️⃣: Login
```bash
vercel login
# Opens browser for authentication
```

### Step 3️⃣: Deploy
```bash
cd d:/Projects/mangalam-events
vercel --prod
```

### Step 4️⃣: Answer Prompts
```
Set up and deploy? [Y/n] → Y
Which scope? → Select your account
Project name? → mangalya-events
Source directory? → .
Modify settings? [y/N] → N
```

### 🎉 Done!
```
✨ Production: https://mangalya-events.vercel.app
```

---

## ✅ Verification Checklist

After deployment, verify everything works:

### Pages Load ✓
- [ ] https://mangalya-events.vercel.app (Home)
- [ ] https://mangalya-events.vercel.app/about
- [ ] https://mangalya-events.vercel.app/services
- [ ] https://mangalya-events.vercel.app/gallery
- [ ] https://mangalya-events.vercel.app/events
- [ ] https://mangalya-events.vercel.app/testimonials
- [ ] https://mangalya-events.vercel.app/contact

### Features Work ✓
- [ ] Navbar sticky and responsive
- [ ] Mobile hamburger menu opens
- [ ] Gallery images load
- [ ] Gallery lightbox opens on click
- [ ] Animations smooth
- [ ] Contact form works
- [ ] Hero section displays

### Performance ✓
- [ ] Page loads in under 3 seconds
- [ ] Images load from Unsplash
- [ ] No console errors (F12 → Console)

---

## 🌐 Add Custom Domain (Optional)

Want `mangalya-events.com` instead of the vercel.app domain?

### In Vercel Dashboard:
1. Go to vercel.com/dashboard
2. Select "mangalya-events" project
3. Settings → Domains
4. Add your domain
5. Follow DNS setup instructions

Takes 24-48 hours to propagate.

---

## 🔄 Make Updates

### Using Git (Recommended):
```bash
# 1. Make local changes
# 2. Commit
git add .
git commit -m "Update description"
# 3. Push
git push origin main
# 4. Vercel deploys automatically ✅
```

### Using Vercel CLI:
```bash
vercel --prod
```

---

## 🆘 Troubleshooting

### ❌ "Build failed"
```bash
npm run build  # Test build locally first
npm install    # Make sure dependencies exist
```

### ❌ "Site won't load after deployment"
- Wait 1-2 minutes
- Clear browser cache (Ctrl+Shift+Delete)
- Check Vercel dashboard for green checkmark

### ❌ "Images not showing"
- They use Unsplash URLs (should work)
- Check internet connection
- Open browser DevTools (F12) to see errors

---

## 📊 Monitor Your Site

### Vercel Dashboard
https://vercel.com/dashboard

You can see:
- ✅ All deployments (past versions)
- 📈 Analytics (visitors, response times)
- 🛠️ Logs (build output)
- ⚙️ Settings

### Quick Links
- **View Site:** https://mangalya-events.vercel.app
- **View Dashboard:** https://vercel.com/dashboard
- **GitHub Repo:** https://github.com/YOUR_USERNAME/mangalya-events

---

## 🚨 Rollback If Something Breaks

Don't panic! Revert to previous version in seconds:

1. Go to vercel.com/dashboard
2. Click "mangalya-events" project
3. Go to "Deployments"
4. Find a previous working version
5. Click "..." → "Promote to Production"
6. ✅ Site reverted instantly!

---

## 💡 Pro Tips

### Tip 1: Use Preview URLs for Pull Requests
When using Git integration, every PR gets a preview URL:
- Main: https://mangalya-events.vercel.app
- PR Preview: https://mangalya-events-git-branchname-account.vercel.app

### Tip 2: Keep `.vercel` Folder
After first Vercel deploy, a `.vercel/` folder is created:
```bash
git add .vercel/
git commit -m "Add Vercel config"
git push
```

### Tip 3: Add `vercel.json` for Custom Config
Optional advanced configuration (not needed for this project):
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next"
}
```

---

## 📱 Performance Metrics

Your deployed site achieves:
- ⚡ **First Load JS:** ~143 KB (excellent)
- 🖼️ **10 Pages:** All pre-rendered (fastest)
- 📦 **Size:** ~2.8KB per page (very fast)
- 🌍 **CDN:** Global distribution (fast everywhere)

---

## Next Steps After Deployment

1. ✅ **Test all pages** (checklist above)
2. ✅ **Add custom domain** (optional)
3. ✅ **Share with team** (vercel.app link)
4. ✅ **Monitor performance** (Vercel dashboard)
5. ✅ **Make updates** (push to GitHub)

---

## Quick Command Reference

```bash
# Initial Git setup
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/mangalya-events.git
git push -u origin main

# Update your site (after pushing to GitHub)
git add .
git commit -m "Update description"
git push origin main

# Deploy with CLI
npm install -g vercel
vercel login
vercel --prod

# View logs locally
npm run dev  # Test locally at http://localhost:3000
npm run build  # Build for production
```

---

## 🎯 You're All Set!

Your **Mangalya Event Management** website is:
- ✅ Built with Next.js 14
- ✅ Styled with Tailwind CSS
- ✅ Animated with Framer Motion
- ✅ Ready to deploy on Vercel
- ✅ SEO optimized
- ✅ Mobile responsive
- ✅ Lightning fast

### Choose your deployment method above and launch your site! 🚀

---

**Questions?**
- Vercel Docs: https://vercel.com/docs
- GitHub Help: https://docs.github.com
- This guide: VERCEL_DEPLOYMENT_GUIDE.md
