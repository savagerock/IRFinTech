require('dotenv').config()
const Telegraf = require('telegraf')
const { data } = require('./js/getData.js')

const bot = new Telegraf(process.env.BOT_TOKEN)


bot.command('data', async ctx => {
    let res = await data(process.env.API_KEY)
    ctx.reply(JSON.stringify(res.data[0].quote.USD.price, null, 4))
  }
)

bot.launch()