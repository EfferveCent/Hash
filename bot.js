const Discord = require("discord.js")
const client = new Discord.Client()

const token = "NDI1NzkzMzk3Mjk5NzQwNjgz.DhRF7A.M9AyxJEnFdXDu3gjoPNWUwNndpQ"
client.login(token)

client.on('message', message => {
    if (message.author.username == "hash") return
    
    switch(message.content){
        case "ping":
            message.reply("pong")
            break
    }
})