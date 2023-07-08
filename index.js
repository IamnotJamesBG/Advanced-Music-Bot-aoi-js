const { AoiClient, LoadCommands }  = require("aoi.js");

const allIntents = ["MessageContent", "Guilds", "GuildMessages", "GuildMembers", "GuildBans", "GuildEmojisAndStickers", "GuildIntegrations", "GuildWebhooks", "GuildInvites", "GuildVoiceStates", "GuildPresences", "GuildMessageReactions", "GuildMessageTyping", "DirectMessages", "DirectMessageReactions", "DirectMessageTyping"]

const {
    AoiVoice,
    PlayerEvents,
    PluginName,
    Cacher,
    Filter,
} = require(`@akarui/aoi.music`);




const bot = new AoiClient({
    token: process.env.token, //create env
    prefix: "$getGuildVar[prefix]",
    intents: allIntents,
    events: ["onMessage", "onInteractionCreate","onGuildJoin","onMessageUpdate","onFunctionError","onVoiceStateUpdate","onJoin","onLeave"],
  database: {
   type: "aoi.db",
   db: require("@akarui/aoi.db"),
   tables: ["main"],
   path: "./database/",
   extraOptions: {
   dbType: "KeyValue",
suppressAllErrors: true,
errorMessage: "⚠️ Error,Something Went Wrong!",

     mainFile: "index.js"
     }
 }

}) 

bot.status({
text: "Made by IamnotJamesBG And JaMusic team",
type: "WATCHING",
status: "idle",
time: 12
})

bot.status({
text: "Made with kind and ❤️",
type: "WATCHING",
status: "idle",
time: 12 
})

bot.status({
text: "$allMembersCount Members!",
type: "WATCHING",
status: "idle",
time: 12
})

bot.status({
text: "$guildCount Servers!",
type: "WATCHING",
status: "idle",
time: 12
})

require('./Music Src/Other Useful Cmds/variables.js')(bot);

const loader = new LoadCommands(bot)
loader.load(bot.cmd, "./Music Src/")





bot.readyCommand({
code: `

$djsEval[console.log("\\u001b\\[36m[API] Bot Is Ready!\\n   |-----Ready-----|\\n   Client Name:$userTag[$clientID]\\n   Ping:$pingms\\n   Command Loaded:$commandsCount\\n   Bot Creator:$userTag[896607695329693746]\\n|-----Created by IamnotJamesBG-----|\\n|---LOGS----|\\u001b\\[36m")]
`
})


bot.interactionCommand({
  name: "resume",
  prototype: "button",
  code: `
  $resumeTrack

  $interactionReply[▶️ Successfully Resumed The Track!]

  `
})

bot.interactionCommand({
    name: 'pause',
    prototype: 'button',
    code: `
    $pauseTrack
    $interactionReply[⏸️ Succesfully Paused The Track!]

  
  `
})

bot.interactionCommand({
 name: "stop",
 type: "interaction",
 prototype: "button",
  code: `
  $stopTrack
    $interactionReply[;{newEmbed: {description: ⏹️ Music Has Been Successfully Stopped And Cleared The Whole Queue! $getVar[yes_emoji]} {color: $getVar[color]}};;;everyone;false]
    $onlyIf[$authorID==$getGuildVar[authorbutton];You Are Not The Author of This Button 🎵  {options:{ephemeral:true}}{extraOptions:{interaction:true}}]
  `
})

bot.interactionCommand({
 name: "Ninja",
 prototype: "button",
 code: `$interactionReply[;{newEmbed:{description:**You worked as an assassin**
 
 You worked very well so you earned **$random[300;2000]💵!**}}]
 $setUserVar[Money;$sum[$getUserVar[Money];$random[300;2000]]]
 $cooldown[30s;You need to wait **%time%** to work again]
 
 `
})

bot.interactionCommand({
  name: "meh",
  prototype: "button",
  code: `
  $interactionReply[;{newEmbed:{description:**You worked as a President!**

You worked very well so you earned $random[500;3500]💵!
}}]

$setUserVar[Money;$sum[$getUserVar[Money];$random[500;3500]]]
 $cooldown[30s;You need to wait **%time%** to work again]
  `
})

bot.interactionCommand({
 name: "nowplaying",
 prototype: "button",
  code: `
  $interactionReply[;{newEmbed:{title:$songInfo[title]}{url:$nonEscape[$songInfo[url]]}{description:Requested by:$songInfo[requester]
Duration:$splitText[2]:$splitText[3]
$textSplit[$digitalFormat[$parseTime[$songInfo[duration]]];:]
Artist:$songInfo[artist]
Source:$songInfo[identifier]

Video Description:$songInfo[description]
}
{thumbnail:$songInfo[thumbnail]}{footer: Requested By $username | Volume:$volume%}
{color:#00ffff}}]
  `
  
})

const voice = new AoiVoice(bot, {
    searchOptions: {
        // soundcloudClientId: "Sound Cloud Id",
        youtubegl: "US",
    },
    requestOptions: {
        offsetTimeout: 0,
        soundcloudLikeTrackLimit: 200,
    },
});

// adds a cacher plugin
voice.addPlugin(PluginName.Cacher, new Cacher("memory" /* or "disk" */));

// adds a filter plugin
voice.addPlugin(
    PluginName.Filter,
    new Filter({
        filterFromStart: false,
    }),
);

voice.bindExecutor(bot.functionManager.interpreter);

voice.addEvent(PlayerEvents.TRACK_START);

voice.addEvent(PlayerEvents.TRACK_END);

voice.addEvent(PlayerEvents.QUEUE_START);


loader.load(voice.cmds, "./Music Src/Music Events");







//DONT DELETE THIS
const keepalive = require("./server")
keepalive() //add on uptimerobo
