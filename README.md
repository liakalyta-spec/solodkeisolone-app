# 🔮 Солодке Ясновидіння - Telegram Mini App

Fortune prediction Telegram Mini App built with Express.js and Node.js.

## ✨ Features

- 🔮 Random fortune predictions in Ukrainian
- 📱 Fully responsive Telegram Web App
- 🎨 Beautiful gradient UI with animations
- 📳 Haptic feedback support
- 🚀 Easy deployment to any hosting platform
- ⚡ Lightweight and fast

## 🛠️ Tech Stack

- **Backend**: Node.js + Express.js
- **Frontend**: HTML5 + CSS3 + Vanilla JavaScript
- **Bot API**: Telegram Bot API with Webhooks
- **Hosting**: Compatible with Heroku, Railway, Render, DigitalOcean, AWS, etc.

## 📋 Prerequisites

- Node.js 14+ installed
- Telegram Bot Token (already provided)
- A public domain or hosting service with HTTPS support
- Git account

## 🚀 Local Setup

### 1. Clone and Install Dependencies

```bash
cd solodkeisolone-app
npm install
```

### 2. Create `.env` File

Copy `.env.example` to `.env` and update values:

```bash
cp .env.example .env
```

Edit `.env`:
```env
BOT_TOKEN=8312191537:AAEH83ilkB77-nVLJoCyKSdgDPN0GFGFsUM
PORT=3000
WEBHOOK_URL=https://your-domain.com
MINI_APP_URL=https://your-domain.com/app
```

### 3. Run Locally

```bash
npm run dev
```

Visit: `http://localhost:3000/app`

## 🌐 Deployment Options

### Option 1: Deploy to Railway (Recommended - Easy)

1. Create account at [railway.app](https://railway.app)
2. Connect your GitHub repo
3. Set environment variables in Railway dashboard:
   - `BOT_TOKEN`: Your token
   - `WEBHOOK_URL`: Your Railway domain
   - `MINI_APP_URL`: Your Railway domain + `/app`
4. Deploy automatically from `main` branch

### Option 2: Deploy to Heroku

```bash
# Install Heroku CLI
npm install -g heroku

# Login
heroku login

# Create app
heroku create your-app-name

# Set environment variables
heroku config:set BOT_TOKEN=your_token
heroku config:set WEBHOOK_URL=https://your-app-name.herokuapp.com
heroku config:set MINI_APP_URL=https://your-app-name.herokuapp.com/app

# Deploy
git push heroku main
```

### Option 3: Deploy to DigitalOcean

1. Go to [digitalocean.com](https://www.digitalocean.com)
2. Create App Platform app
3. Connect GitHub repo
4. Set environment variables
5. Deploy

### Option 4: Deploy to Render

1. Go to [render.com](https://render.com)
2. Create new Web Service
3. Connect GitHub repo
4. Set environment variables
5. Deploy

## 📱 How to Use with Telegram

### Setup Bot Commands

Send these commands to [@BotFather](https://t.me/botfather) in Telegram:

```
/setcommands
```

Add these commands:
```
start - Launch the fortune app
help - Get help information
```

### Use in Chat

1. Find your bot: Search for `@<YourBotUsername>`
2. Click `/start`
3. Click the button to open the mini app
4. Click "Отримати передбачення" (Get Prediction)
5. See your fortune! 🔮

## 📂 Project Structure

```
solodkeisolone-app/
├── server.js              # Express server & Bot logic
├── public/
│   └── index.html         # Mini app frontend
├── package.json           # Dependencies
├── .env.example           # Environment template
├── Procfile               # Heroku deployment
└── README.md              # This file
```

## 🔧 API Endpoints

- `GET /app` - Serve mini app
- `GET /health` - Health check
- `POST /webhook` - Telegram webhook for messages/callbacks

## 🎯 Next Steps

1. **Deploy** to your chosen hosting platform
2. **Update** `WEBHOOK_URL` and `MINI_APP_URL` in `.env`
3. **Test** the bot in Telegram by sending `/start`
4. **Share** your bot with friends! 🚀

## 🐛 Troubleshooting

### Webhook not connecting?
- Ensure domain has HTTPS (required by Telegram)
- Check `WEBHOOK_URL` is correct in `.env`
- Restart server after changing `.env`

### Bot not responding?
- Verify `BOT_TOKEN` is correct
- Check server logs for errors
- Ensure webhook is properly set: `/health` endpoint should return `{"status":"ok"}`

### Mini app not loading?
- Check browser console for errors (F12)
- Verify `MINI_APP_URL` points to correct domain
- Ensure `/app` endpoint is accessible

## 📝 License

MIT - Feel free to use and modify!

## 👨‍💻 Made with ❤️

Created by liakalyta-spec

---

**Need help?** Open an issue on GitHub or check [Telegram Bot API docs](https://core.telegram.org/bots/api)
