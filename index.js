const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})


client.on('message', message => { 

if (!message.guild) return; 

if (message.content === 'wara') { 
 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if (message.member.voiceChannel) { 

message.member.voiceChannel.join() 

.then(connection => { 


}) 

.catch(console.log); 

} else { 

message.reply('**هەتا تۆ نەچیتە ڤۆیس من نایێم**'); 

} 

} 

});


client.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(`  `) // لینکی سێرڤەری خۆت لیرە دابنی بە هەتا هەتای بێت
    
  client.channels.get("id جەنالەکە").send(
`> By  <@${message.author.id}> ✅ 
${message.content}`)
}
    }
        })




client.on('ready', () => {
console.log(`ON ${client.guilds.size} Servers`);
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`شتێک بنوسە بۆ ستریمینگ`,"http://twitch.tv/PAYWANDcamper") 
});




client.login("NzgxOTYzMDMyNzg3NjgxMjkw.X8FR0w.hP2vkqCnw2F9H9wOnjp0sKD0C4c");//تۆکین لێرە دانێ
