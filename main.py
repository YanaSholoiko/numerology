from flask import Flask, request, send_from_directory
import requests

app = Flask(__name__)

# Токен вашого бота
TOKEN = "7807000284:AAH2sKc20wE4CWD6nDDs4pai8sozysL8TII"

# Головна сторінка
@app.route('/')
def index():
    return send_from_directory('static', 'index.html')

# Статичні файли (CSS, JS)
@app.route('/<path:path>')
def static_files(path):
    return send_from_directory('static', path)

# Telegram webhook
@app.route('/webhook', methods=['POST'])
def webhook():
    data = request.json
    if "message" in data:
        chat_id = data["message"]["chat"]["id"]
        # Перевіряємо, чи отримана команда /start
        if data["message"]["text"] == "/start":
            send_webapp_button(chat_id)
        else:
            # Відповідь за замовчуванням для інших повідомлень
            send_message(chat_id, "Привіт! Введіть /start, щоб відкрити калькулятор 🎉")
    return {"ok": True}

# Надсилання кнопки для відкриття Web App
def send_webapp_button(chat_id):
    requests.post(
        f"https://api.telegram.org/bot{TOKEN}/sendMessage",
        json={
            "chat_id": chat_id,
            "text": "Натисніть кнопку, щоб відкрити калькулятор:",
            "reply_markup": {
                "inline_keyboard": [[
                    {
                        "text": "Відкрити калькулятор",
                        "web_app": {"url": "https://numerology-3fc7.onrender.com"}
                    }
                ]]
            }
        }
    )

# Відправка повідомлень за замовчуванням
def send_message(chat_id, text):
    requests.post(
        f"https://api.telegram.org/bot{TOKEN}/sendMessage",
        json={"chat_id": chat_id, "text": text}
    )

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

