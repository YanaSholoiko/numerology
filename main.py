from telegram import Update
from telegram.ext import Updater, CommandHandler, CallbackContext

# Ваш токен доступу від BotFather
TOKEN = "7807000284:AAH2sKc20wE4CWD6nDDs4pai8sozysL8TII"

# Команда /start
def start(update: Update, context: CallbackContext) -> None:
    update.message.reply_text(
        "Привіт! Це ваш нумерологічний бот. Відвідайте калькулятор: https://numerology-3fc7.onrender.com"
    )

def main():
    updater = Updater(TOKEN)

    # Додати обробники команд
    updater.dispatcher.add_handler(CommandHandler("start", start))

    # Запустити бота
    updater.start_polling()
    updater.idle()

if __name__ == "__main__":
    main()

