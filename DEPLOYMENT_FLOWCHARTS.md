# 🎯 Mangalya Event Management - Deployment Decision Tree & Flowchart

## Which Method Should You Choose?

```
                    Ready to Deploy?
                          |
                          v
         Do you have GitHub account?
                    /              \
                   /                \
                 YES                NO
                  |                  |
                  v                  v
        [Git Integration]    [Create GitHub account]
         (Recommended)         (Takes 2 mins)
             (4/5 ⭐)                 |
                  |      ← ← ← ← ← ←|
                  v
        Should version control?
            /            \
           /              \
         YES             NO
         |               |
         v               v
    [Git Integration] [CLI Deploy]
     (BEST) ✅    (Quick test)
```

---

## 📊 Deployment Methods Comparison

```
┌─────────────────────────────────────────────────────────────────┐
│ FEATURE              │  GIT INTEGRATION  │  VERCEL CLI          │
├──────────────────────┼───────────────────┼──────────────────────┤
│ Setup Time           │ 5 minutes         │ 2 minutes            │
│ Auto Deploy          │ ✅ YES            │ ❌ Manual            │
│ Collaboration        │ ✅ YES (Teams)    │ ❌ Single person     │
│ Preview URLs         │ ✅ YES            │ ❌ No                │
│ Rollback Easy        │ ✅ YES (1 click)  │ ✅ YES (1 click)     │
│ Environment Vars     │ ✅ YES            │ ✅ YES               │
│ Custom Domain        │ ✅ YES            │ ✅ YES               │
│ Production Ready     │ ✅ BEST           │ ✓ Good               │
│ Recommended For      │ Projects/Teams    │ Testing/Personal     │
├──────────────────────┼───────────────────┼──────────────────────┤
│ RATING               │ ⭐⭐⭐⭐⭐       │ ⭐⭐⭐⭐             │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🔄 Git Integration Workflow

```
STEP 1: Initialize Local Git
┌─────────────────────────────────────────┐
│ Your Computer:                          │
│ $ git init                              │
│ $ git add .                             │
│ $ git commit -m "Initial commit"        │
└─────────────────────────────────────────┘
              ↓

STEP 2: Create GitHub Repository
┌─────────────────────────────────────────┐
│ github.com → New Repository             │
│ Name: mangalya-events                   │
│ Visibility: Public/Private              │
└─────────────────────────────────────────┘
              ↓

STEP 3: Push to GitHub
┌─────────────────────────────────────────┐
│ git branch -M main                      │
│ git remote add origin <gh-url>          │
│ git push -u origin main                 │
└─────────────────────────────────────────┘
              ↓

STEP 4: Import to Vercel
┌─────────────────────────────────────────┐
│ vercel.com → New Project                │
│ Select: mangalya-events repo            │
│ Click: Deploy                           │
└─────────────────────────────────────────┘
              ↓
         ⏳ 2-3 minutes
              ↓

STEP 5: Live on Web!
┌─────────────────────────────────────────┐
│ ✅ https://mangalya-events.vercel.app  │
│ Auto-updates on every GitHub push       │
└─────────────────────────────────────────┘
```

---

## 🚀 CLI Deployment Workflow

```
STEP 1: Install Vercel CLI
┌─────────────────────────────────────────┐
│ $ npm install -g vercel                 │
└─────────────────────────────────────────┘
              ↓

STEP 2: Login
┌─────────────────────────────────────────┐
│ $ vercel login                          │
│ Opens browser for authentication        │
└─────────────────────────────────────────┘
              ↓

STEP 3: Navigate & Deploy
┌─────────────────────────────────────────┐
│ $ cd d:/Projects/mangalam-events        │
│ $ vercel --prod                         │
│ Answer 5 simple prompts                 │
└─────────────────────────────────────────┘
              ↓
         ⏳ 1-2 minutes
              ↓

STEP 4: Live!
┌─────────────────────────────────────────┐
│ ✅ https://mangalya-events.vercel.app  │
│ Manual redeploy needed for updates      │
└─────────────────────────────────────────┘
```

---

## 📋 Pre-Deployment Checklist

```
BEFORE YOU DEPLOY:

LOCAL TESTING
  □ npm run build    (Should complete without errors)
  □ npm run dev      (Test homepage at localhost:3000)
  □ Try all 7 pages  (/ /about /services /gallery /events /testimonials /contact)
  □ Test mobile view (F12 → Toggle device toolbar)
  □ Check console    (F12 → Console, should show no red errors)

GIT SETUP (if using Git Integration)
  □ git init
  □ git add .
  □ git commit -m "Initial commit"
  □ GitHub account created
  □ Repository created on GitHub

VERCEL SETUP
  □ Vercel account created (vercel.com)
  □ If CLI: npm install -g vercel

READY TO DEPLOY? ✅
```

---

## 🎯 Detailed Step-by-Step: Git Integration

### Complete Command Reference

```bash
# ========== STEP 1: Prepare Local Repository ==========
cd d:/Projects/mangalam-events

# Initialize Git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Mangalya Event Management website"

# ========== STEP 2: Create GitHub Repository ==========
# 1. Go to github.com
# 2. Click your profile icon (top right)
# 3. Click "Your repositories"
# 4. Click "New" button (green)
# 5. Fill in:
#    Repository name: mangalya-events
#    Description: Premium event management website
#    Visibility: Public (or Private)
# 6. Click "Create repository"

# ========== STEP 3: Connect & Push to GitHub ==========
# After GitHub repo created, it shows these commands:
# Copy them and run:

git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mangalya-events.git
git push -u origin main

# (Replace YOUR_USERNAME with your actual GitHub username)


# ========== STEP 4: Deploy on Vercel ==========
# 1. Go to vercel.com
# 2. Sign in or Create account (GitHub login recommended)
# 3. Click "Add New..." or "New Project"
# 4. Click "Import..."
# 5. Select your GitHub account
# 6. Find and select "mangalya-events"
# 7. Edit Project Settings (Optional - can leave defaults):
#    - Framework: Next.js ✓ (auto-detected)
#    - Build Command: npm run build
#    - Output Directory: .next
# 8. Click "Deploy"

# ========== STEP 5: Wait for Deployment ==========
# Vercel will:
# 1. Clone your repo
# 2. Install dependencies (npm install)
# 3. Build project (npm run build)
# 4. Deploy to CDN
# Takes 2-3 minutes total

# ========== STEP 6: Done! ==========
# You'll get a URL like:
# https://mangalya-events.vercel.app
# Click it to see your live site!


# ========== MAKING UPDATES (Easy!) ==========
# From now on, just do this to update your site:

git add .
git commit -m "Update homepage"
git push origin main

# Vercel automatically detects the push and redeploys!
# No manual steps needed!
```

---

## 🎯 Detailed Step-by-Step: CLI Deployment

```bash
# ========== STEP 1: Install Vercel CLI ==========
npm install -g vercel

# ========== STEP 2: Login to Vercel ==========
vercel login

# Opens your browser - follow the prompts:
# 1. Type your email
# 2. Click verification link in email
# 3. Allow authorization
# 4. Return to terminal

# ========== STEP 3: Navigate to Project ==========
cd d:/Projects/mangalam-events

# ========== STEP 4: Deploy to Production ==========
vercel --prod

# ========== STEP 5: Answer Prompts ==========

# Prompt 1: Set up and deploy?
# Answer: Y (press Enter)

# Prompt 2: Which scope to deploy to?
# Answer: Select your account (arrow keys + Enter)

# Prompt 3: Link to existing project?
# Answer: N (press n + Enter)

# Prompt 4: What's your project's name?
# Answer: mangalya-events (press Enter)

# Prompt 5: In which directory is your code?
# Answer: . (dot = current directory, press Enter)

# Prompt 6: Want to modify these settings?
# Answer: N (press n + Enter)

# ========== STEP 6: Wait for Build ==========
# Vercel will build and deploy
# Takes 2-3 minutes

# ========== STEP 7: You're Live! ==========
# Terminal will show:
# ✨ Production: https://mangalya-events.vercel.app

# ========== UPDATING YOUR SITE ==========
# After making local changes:
vercel --prod

# That's it - site updates!
```

---

## 🔑 GitHub & Vercel Credentials

### What You Need

**For GitHub:**
- Email address
- Password
- Two-factor auth (optional but recommended)
- Username for repo URL

**For Vercel:**
- Email address
- Password (or login with GitHub)
- GitHub connection (if using Git integration)

### Security Tips
```
✅ DO:
  - Use strong password
  - Enable 2FA on GitHub
  - Keep API tokens private
  - Never commit secrets to repo

❌ DON'T:
  - Share your credentials
  - Put API keys in code
  - Commit .env files with secrets
  - Use same password everywhere
```

---

## 📈 After Deployment: Monitoring

```
VERCEL DASHBOARD
vercel.com/dashboard

├── Deployments (View all versions)
│   ├── Current: mongalya-events.vercel.app
│   ├── Previous: Can rollback if needed
│   └── History: See all past deployments
│
├── Analytics (Performance metrics)
│   ├── Page views
│   ├── Response times
│   ├── Bandwidth usage
│   └── Region distribution
│
├── Settings
│   ├── Build settings
│   ├── Environment variables
│   ├── Custom domains
│   └── Integrations
│
└── Logs (Debugging)
    ├── Build logs (what happened during build)
    └── Runtime logs (errors on live site)
```

---

## ⚠️ Common Errors & Solutions

```
ERROR 1: "Build failed"
├─ CAUSE: Errors in code
├─ FIX: Run locally first
│   $ npm run build
│   $ npm run dev
└─ Check console output for specific error

ERROR 2: "Cannot find module"
├─ CAUSE: Missing dependency
├─ FIX: Install & commit
│   $ npm install
│   $ git add package-lock.json
│   $ git commit -m "Add dependencies"
│   $ git push
└─ Vercel will use updated package.json

ERROR 3: "Site not loading after deploy"
├─ CAUSE: Deployment still in progress or CDN cache
├─ FIX:
│   1. Wait 1-2 minutes
│   2. Clear browser cache (Ctrl+Shift+Delete)
│   3. Try incognito/private window
│   4. Check Vercel dashboard for green checkmark
└─ If still broken, rollback (see guide)

ERROR 4: "Images not showing"
├─ CAUSE: Unsplash URLs blocked or internet issue
├─ FIX:
│   1. Check internet connection
│   2. Open DevTools (F12)
│   3. Check Network tab - are images loading?
│   4. Try in different browser
└─ If Unsplash blocked, use different image source

ERROR 5: "Port already in use"
├─ CAUSE: Another app using port 3000
├─ FIX: Kill the process or use different port
│   $ npm run dev -- -p 3001  (uses port 3001)
└─ Or close other applications using port 3000
```

---

## 🎁 Extra: Environment Variables Example

If you add contact form email sending later:

```bash
# 1. Create .env.local file (WARNING: Never commit this!)
NEXT_PUBLIC_API_URL=your-api-url
SENDGRID_API_KEY=your-secret-key

# 2. Add to .gitignore
echo ".env.local" >> .gitignore

# 3. In Vercel Dashboard:
#    Settings → Environment Variables
#    Add: Name = SENDGRID_API_KEY
#          Value = your-secret-key
#          Environments = Production, Preview, Development

# 4. Redeploy (Vercel → Deployments → Redeploy)
```

---

## ✨ Final Checklist

Before you consider deployment complete:

```
DEPLOYMENT COMPLETE CHECKLIST:

VERCEL
  □ Site has green "✓ Ready" status
  □ Deployment took <5 minutes
  □ URL is https:// (not http://)
  □ Dashboard shows your project
  □ Analytics page works

YOUR SITE
  □ Home page loads
  □ All 7 pages accessible
  □ Navbar works on mobile
  □ Images display
  □ Animations smooth
  □ Contact form submits
  □ Gallery lightbox works
  □ No red errors in console (F12)

SEO/META
  □ Page titles visible in browser tab
  □ Meta description in page source
  □ Open Graph tags present
  □ Mobile responsive (F12 → Device toolbar)

UPDATES
  □ You know how to push updates
  □ You have GitHub push access
  □ You know Vercel rollback process

DONE! 🎉
```

---

## 🆘 Emergency: Rollback Broken Deployment

Don't panic! Revert instantly:

```
1. Go to vercel.com/dashboard
2. Select "mangalya-events" project
3. Click "Deployments" tab
4. Find last working deployment (green checkmark)
5. Click "..." (three dots)
6. Select "Promote to Production"
7. Confirm
8. ✅ Site reverted in seconds!

(GitHub history also preserved - nothing is lost)
```

---

## 🎓 Learn More

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **GitHub Help:** https://docs.github.com
- **Your Files:**
  - VERCEL_DEPLOYMENT_GUIDE.md (detailed)
  - QUICK_START_DEPLOY.md (quick reference)
  - This file (flowcharts & diagrams)

---

## 🚀 You're Ready!

Your **Mangalya Event Management** website is production-ready.

**Pick your method above and go live! 🎉**

Questions? Check the guides or Vercel documentation.

**Estimated total time: 5-10 minutes from now to live website!**
