const discord =require('discord.js');
const api = "http://panel.heimsnet.eu:25585/chatlog";
const snekfetch = require("snekfetch");
const Bot = new discord.Client();
const PREFIX = '!'
const token = 'NzMyMjgwOTY4NjcyNDQ0NTc3.XwynfQ.VxSRMH4RSINdlivhluB3DFZBhl8'
const mainc = 'general'
Bot.on('ready', () =>{
    console.log('Bot Online')
    'use strict';
    const Discord = require('discord.js');
    const hook = new Discord.WebhookClient('732500036738482206', 'ImABlPqFdL_unc5tRL4wT0LzmCR9R8GYWdB_mrbSPdO54j1B4_Buwn_Otq3I11X7t8BM');
    hook.send('I am now online! look at my commands with !info');
    Bot.user.setActivity("!info", { type: "CUSTOM_STATUS" });
    console.log(Math.floor(Math.random() * 10))

})
  

Bot.on('message', msg =>{
   
    let args = msg.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
      case 'ping':
          msg.channel.send('pong!')
      break;
      case 'info':
          msg.channel.send("https://github.com/YourGenericLlama/Bot-commands")
     break;
      case 'version':
          msg.channel.send('Version: 0.0.5 ')
       break;

       case 'clog':
           msg.channel.send('!drink is back up!')
       break;
           
         
        case 'drink' :
         
         msg.channel.send('*hands you a glass of milky juice.* its a refreshing one')
        break;

        case 'Invite':

        msg.channel.send('Discord Invite: https://discord.gg/hR9xfG4')
        break;

        case 'rules' : 
        msg.channel.send('Rules: https://discord.gg/vd25YGm')
        break;

        case 'pong' :
        msg.channel.send('PING!')
        break;
        case 'oof' :
            msg.channel.send('https://giphy.com/gifs/memecandy-kexK6MPhNziEvkaX3u')
        break;

        case 'clear' :
            if(!args[1]) return msg.reply('error please define second argument')
            msg.channel.bulkDelete(args[1]);
            break;
            case 'slap' :
                ran = (Math.round(Math.random() * 10))
                if(ran += 6) {
                    msg.channel.send('YOU Hit https://gph.is/1haNrcj')

                } 
                
                if(ran -=5) {
                    msg.channel.send('YOU MISS')

                } 
            break;
            case 'E' :
                msg.channel.send('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
                
                break;
                case 'newest' :
                   snekfetch.get(api).then(r => {
                       let body = r.statusText
                       msg.channel.send(body)
                   })

                    break;
    }
})

Bot.login(token);