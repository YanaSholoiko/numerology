from flask import Flask, request, send_from_directory

app = Flask(__name__)

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
        text = "Привіт! Ваш бот працює 🎉"
        send_message(chat_id, text)
    return {"ok": True}

# Відправка повідомлень в Telegram
def send_message(chat_id, text):
    import requests
    TOKEN = "7807000284:AAH2sKc20wE4CWD6nDDs4pai8sozysL8TII"
    url = f"https://api.telegram.org/bot{TOKEN}/sendMessage"
    requests.post(url, json={"chat_id": chat_id, "text": text})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

