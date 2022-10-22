const {
  Client
} = require('discord.js-selfbot-v13');
const {
  joinVoiceChannel
} = require('@discordjs/voice');

const client = new Client({
  checkUpdate: false
});

client.login("")
console.log(`logined!`);

client.on("ready", () => {
  joinVoiceChannel({
      channelId: "",//Seste Duracağı Kanal İd
      guildId: "",//Guild İd
      adapterCreator: client.guilds.cache.get("").voiceAdapterCreator,//Guild İd
  });
})