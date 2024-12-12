from flask import Flask, request
import requests

app = Flask(__name__)

# Ваш токен бота
TELEGRAM_BOT_TOKEN = "7807000284:AAH2sKc20wE4CWD6nDDs4pai8sozysL8TII"

# URL вашого веб-додатка
APP_URL = "https://numerology-3fc7.onrender.com"  # замініть на ваш URL


@app.route('/webhook', methods=['POST'])
def webhook():
    data = request.get_json()

    if "message" in data:
        chat_id = data["message"]["chat"]["id"]
        text = data["message"]["text"]

        # Відповідь на повідомлення користувача
        if text == "/start":
            send_message(chat_id, "Ласкаво просимо до нумерологічного бота! Перейдіть за посиланням, щоб скористатися додатком: " + APP_URL)
        else:
            send_message(chat_id, "Вибачте, я розумію лише команду /start. Спробуйте ще раз.")

    return "ok", 200


def send_message(chat_id, text):
    url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
    payload = {"chat_id": chat_id, "text": text}
    requests.post(url, json=payload)


@app.route('/')
def home():
    return "Бот працює!", 200


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

