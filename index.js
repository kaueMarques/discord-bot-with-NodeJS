const Discord = require('discord.js');
const client  = new Discord.Client();
const conf  = require('./conf.json');


client.on('ready', () => {
  console.info(`Logged in as ${client.user.tag}!`);
});


client.once('message', msg =>{
  if(msg.content === (`${conf.prefix}primos`));
  msg.channel.send(`${conf.primos}||\n\nobs: isso não é uma Array||`);
})

client.once('message', msg => {
  if(msg.content === (`${conf.prefix}oi`));
  msg.channel.send("Vamos pescar?\n");
  
});

client.login(conf.TOKEN);