const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Telegram Bot Configuration
const BOT_TOKEN = process.env.BOT_TOKEN || '8312191537:AAEH83ilkB77-nVLJoCyKSdgDPN0GFGFsUM';
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;
const WEBHOOK_URL = process.env.WEBHOOK_URL || 'https://your-domain.com';
const MINI_APP_URL = process.env.MINI_APP_URL || `https://your-domain.com/app`;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Serve the mini app
app.get('/app', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Bot is running' });
});

// Webhook endpoint for Telegram
app.post('/webhook', async (req, res) => {
  try {
    const { message, callback_query } = req.body;

    // Handle /start command
    if (message && message.text === '/start') {
      await sendMessage(
        message.chat.id,
        `🔮 Вітаємо у додатку передбачень!\n\nНатисніть кнопку нижче щоб отримати своє передбачення.`,
        message.message_id
      );
    }

    // Handle button clicks (if using inline buttons)
    if (callback_query) {
      await handleButtonClick(callback_query);
    }

    res.json({ ok: true });
  } catch (error) {
    console.error('Webhook error:', error);
    res.json({ ok: true });
  }
});

// Send message function
async function sendMessage(chatId, text, replyToMessageId = null) {
  const payload = {
    chat_id: chatId,
    text: text,
    parse_mode: 'HTML',
    reply_to_message_id: replyToMessageId,
  };

  try {
    const response = await axios.post(`${TELEGRAM_API}/sendMessage`, payload);
    return response.data;
  } catch (error) {
    console.error('Error sending message:', error.response?.data || error.message);
    throw error;
  }
}

// Send Web App button
async function sendWebAppButton(chatId, userId) {
  const payload = {
    chat_id: chatId,
    text: '🔮 Натисніть кнопку щоб отримати передбачення',
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: '🎯 Отримати передбачення',
            web_app: { url: MINI_APP_URL },
          },
        ],
      ],
    },
  };

  try {
    const response = await axios.post(`${TELEGRAM_API}/sendMessage`, payload);
    return response.data;
  } catch (error) {
    console.error('Error sending web app button:', error.response?.data || error.message);
    throw error;
  }
}

// Handle button clicks
async function handleButtonClick(callbackQuery) {
  const { id, from, data, message } = callbackQuery;

  try {
    // Answer callback
    await axios.post(`${TELEGRAM_API}/answerCallbackQuery`, {
      callback_query_id: id,
    });
  } catch (error) {
    console.error('Error handling callback:', error);
  }
}

// Setup webhook
async function setupWebhook() {
  try {
    // Remove old webhook first
    await axios.post(`${TELEGRAM_API}/deleteWebhook`);

    // Set new webhook
    const response = await axios.post(`${TELEGRAM_API}/setWebhook`, {
      url: `${WEBHOOK_URL}/webhook`,
      allowed_updates: ['message', 'callback_query'],
    });

    console.log('Webhook set successfully:', response.data);
  } catch (error) {
    console.error('Error setting webhook:', error.response?.data || error.message);
  }
}

// Get bot info
async function getBotInfo() {
  try {
    const response = await axios.get(`${TELEGRAM_API}/getMe`);
    console.log('Bot info:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error getting bot info:', error.response?.data || error.message);
  }
}

// Start server
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Mini app available at ${MINI_APP_URL}`);

  // Get bot info on startup
  await getBotInfo();

  // Setup webhook if WEBHOOK_URL is properly set
  if (WEBHOOK_URL !== 'https://your-domain.com') {
    await setupWebhook();
  } else {
    console.log('⚠️  WEBHOOK_URL not configured. Please set it in environment variables.');
  }
});

module.exports = app;
