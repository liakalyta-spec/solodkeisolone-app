# 🚀 Quick Deployment Guide

## Step 1: Choose Your Hosting Platform

Pick one of these (all free tier available):
- **Railway** ✅ (Recommended - simplest)
- Heroku
- Render
- DigitalOcean
- Replit

## Step 2: Prepare Your Bot Token

You already have this:
```
BOT_TOKEN: 8312191537:AAEH83ilkB77-nVLJoCyKSdgDPN0GFGFsUM
```

## ⚡ Railway Deployment (5 minutes)

### 1. Push code to GitHub
```bash
git add .
git commit -m "Add Telegram mini app deployment files"
git push origin main
```

### 2. Create Railway Account
- Go to [railway.app](https://railway.app)
- Sign up with GitHub
- Authorize Railway to access your repos

### 3. Create New Project
- Click "New Project"
- Select "Deploy from GitHub repo"
- Choose `liakalyta-spec/solodkeisolone-app`
- Select branch `main`

### 4. Configure Environment Variables
In Railway dashboard, add these variables:

| Variable | Value |
|----------|-------|
| `BOT_TOKEN` | `8312191537:AAEH83ilkB77-nVLJoCyKSdgDPN0GFGFsUM` |
| `PORT` | `3000` |
| `WEBHOOK_URL` | `https://YOUR-RAILWAY-URL.railway.app` |
| `MINI_APP_URL` | `https://YOUR-RAILWAY-URL.railway.app/app` |

> Find your Railway URL in the "Domain" section

### 5. Deploy
- Railway auto-deploys from GitHub
- Wait for build to complete (2-3 minutes)
- Check logs to ensure server started

### 6. Test Your Bot
```bash
curl https://YOUR-RAILWAY-URL.railway.app/health
# Should return: {"status":"ok","message":"Bot is running"}
```

---

## 🎯 Final Step: Test in Telegram

1. **Find your bot** - Search by username in Telegram
2. **Send** `/start` command
3. **Click** the button with prediction
4. **See** your fortune! 🔮

---

## 📱 Full Bot Setup (Optional)

### Set Bot Commands (@BotFather)

1. Open Telegram
2. Search for `@BotFather`
3. Send `/setcommands`
4. When asked for bot, enter your bot username
5. Send:
```
start - Open fortune prediction app
help - Get help
predict - Get a random fortune
```

### Set Bot Description

1. In @BotFather, send `/setdescription`
2. Select your bot
3. Enter: `🔮 Узнайте свою судьбу с помощью волшебного предсказания`

### Set Bot Picture

1. In @BotFather, send `/setuserpic`
2. Select your bot
3. Upload an image (200x200px)

---

## ⚠️ Common Issues & Fixes

### "Webhook error" in logs
**Solution**: Make sure environment variables are set correctly in your hosting platform

### "Bot not responding"
**Solution**: 
- Check that `BOT_TOKEN` is correct
- Verify webhook URL has HTTPS (required)
- Restart the application

### "Mini app won't load"
**Solution**:
- Open developer console (F12)
- Check for console errors
- Verify `MINI_APP_URL` is correct and accessible
- Try clearing browser cache

### Domain won't connect
**Solution**:
- HTTPS is **required** by Telegram
- Most hosting platforms provide free HTTPS automatically
- If custom domain, use Cloudflare for free SSL

---

## 🔐 Security Notes

⚠️ **Never commit `.env` file with real token!**

Current setup:
- ✅ Token in `.env.example` (masked)
- ✅ Real token only in environment variables
- ✅ `.env` file in `.gitignore`

---

## 📊 Monitoring

### Check if bot is running
```bash
curl https://YOUR-URL.railway.app/health
```

### View server logs
- Railway Dashboard → Your Project → Logs
- Check for errors or warnings

---

## 🎉 You're Done!

Your Telegram mini app is now live! 🚀

### Share Your Bot
Send this link to friends:
```
https://t.me/YOUR_BOT_USERNAME?start=friend
```

---

Need more help? Check the [README.md](./README.md) for detailed information.
