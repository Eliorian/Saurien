//Saurien is a easy usage discord bot
//This file updated in 05.05.2019
//by Radiaction

const chalk = require('chalk');
const id = require("../id.json");
 const Discord = require('discord.js');
module.exports = message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(id.prefix)) return;

    const Saurien = message.client;


    let command = message.content.split(" ")[0];
    command = command.slice(id.prefix.length);
	
	let params = message.content.split(' ').slice(1);
	
	let perms = Saurien.elevation(message);
    
    let args = message.content.split(" ").slice(1);

    let args2 = message.content.split(" ").slice(2);

    let cmd = args.join(' ');
    
    let cmd2 = args2.join(' ');
    var res = cmd.slice(0, 1);
    
    function clean(text) {
    if (typeof (text) === "string")
        return text.replace(/` /g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;

}
    const Discord = require('discord.js');
    try {
        let cmdFile = require(`../cmd/${command}`);
        cmdFile.run(Saurien, message, args, args2, params, perms, id, Discord);

    } catch(error) {
        console.log(`Command is Failed ${command}\n${error.stack}`);
    }
		
};
