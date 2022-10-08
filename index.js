/*
DEIXE OS CREDITOS MEU NOBRE 🗿🍷
|-------------------------|
|> CloverMods <|
|________________|
se inscreva no meu canal e deixa o like no video
meta de 200 inscritos </>
base editavel para criacao de bots 

   ╱╱┏╮╱╱╱╱╱╱╱╱╱╱
   ╱╱┃┃╱╱┳╱┓┳╭┛┳┓
   ▉━╯┗━╮┃╱┃┣┻╮┣╱
   ▉┈┈┈┈┃┻┛┛┻╱┗┗┛
   ▉╮┈┈┈┃▔▔▔▔▔▔▔▔
   ╱╰━━━╯
   
   
*/
const { 
default: WAConnection,
downloadContentFromMessage, 
emitGroupParticipantsUpdate, 
emitGroupUpdate,
generateWAMessageContent, 
generateWAMessage, 
makeInMemoryStore, 
prepareWAMessageMedia, 
MediaType, 
areJidsSameUser, 
WAMessageStatus, 
AuthenticationState, 
GroupMetadata, 
initInMemoryKeyStore,
getContentType, 
MiscMessageGenerationOptions, 
useSingleFileAuthState, 
BufferJSON, 
WAMessageProto, 
MessageOptions, 
WAFlag, WANode,	
WAMetric,	
ChatModification, 
MessageTypeProto, 
WALocationMessage, 
ReconnectMode, 
WAContextInfo, 
proto,	
WAGroupMetadata, 
ProxyAgent,	
waChatKey, 
MimetypeMap, 
MediaPathMap, 
WAContactMessage, 
WAContactsArrayMessage, 
WAGroupInviteMessage, 
WATextMessage, 
WAMessageContent, 
WAMessage, 
BaileysError, 
WA_MESSAGE_STATUS_TYPE, 
MediaConnInfo, 
URL_REGEX, 
WAUrlInfo, 
WA_DEFAULT_EPHEMERAL, 
WAMediaUpload, 
mentionedJid, 
processTime, 
Browser, 
MessageType, 
Presence, 
WA_MESSAGE_STUB_TYPES, 
Mimetype, 
relayWAMessage,	
Browsers, 
GroupSettingChange, 
delay, 
DisconnectReason, 
WASocket, 
getStream, 
WAProto, 
isBaileys, 
AnyMessageContent, 
fetchLatestBaileysVersion 
} = require('@adiwajshing/baileys');

// pedem dos modules 
const fs = require('fs');
const P = require('pino');
const yts = require("yt-search");
const cfonts = require("cfonts");
const chalk = require('chalk')
const axios = require('axios');
const linkNeroV1 = JSON.parse(fs.readFileSync("./arquivos/fotos/logo.json"))
const speed = require("performance-now");
const { getBuffer, getRandom, getExtension } = require('./arquivos/lib/functions.js');
const { fetchJson } = require("./arquivos/lib/fetcher")

//====== defina ======\\
var prefix = '/' //prefixo 
var emojium = '🌸' //primeiro emoji do menu
var emojidois = '➥ ' // segundo emoji do menu
var nomeBot = 'NeroBase' // nome do bot 
var nomeDono = "CloverMods" // nome do dono 
logo = linkNeroV1.logo








const color = (text, color) => {
return !color ? chalk.green(text) : chalk.keyword(color)(text)
}
// logo do termux
const banner = cfonts.render(('NERO|BASE'), {
font : "block",
align: "center",
colors: ["red","magentaBright"]
})

// conexão do bot 
const store = makeInMemoryStore({ logger: P().child({ level: 'debug', stream: 'linhaDoTempo'}) })
const { state, saveState } = useSingleFileAuthState('./info/codigo.json')
async function startClover() {
const { version, isLatest } = await fetchLatestBaileysVersion()
console.log(`Pronto para conectar!!`)
console.log(banner.string)
console.log("QUASE LA...")
const client = WAConnection({
logger: P({ level: "silent" }),
printQRInTerminal: true,
browser: ['NeroBase', 'CloverM', '1.0.0'],
auth: state
})
client.ev.on ("creds.update", saveState)
store.bind(client.ev)
client.ev.on("chats.set", () => {
console.log("Tem conversas", store.chats.all())
})
client.ev.on("contacts.set", () => {
console.log("Tem contatos", Object.values(store.contacts))
})
client.ev.on("connection.update", (update) => {
const { connection, lastDisconnect } = update
if(connection === "close") {
const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
console.log("Conexão fechada devido a", lastDisconnect.error, "Tentando reconectar...", shouldReconnect);
if(shouldReconnect) {
startClover()
}
} else if(connection === "open") {
console.log("bot ta online!!!")
}
})
//*******************************************//

client.ev.on('messages.upsert', async (msg) => {
function getGroupAdmins(participants) {
admins = []
for (let i of participants) {
if(i.admin == 'admin') admins.push(i.id)
if(i.admin == 'superadmin') admins.push(i.id)
}
return admins
}
  try {
const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}
const getExtension = async (type) => {
return await mimetype.extension(type)
 }
const getBuffer = (url, options) => new Promise(async (resolve, reject) => { 
options ? options : {}
await axios({method: "get", url, headers: {"DNT": 1, "Upgrade-Insecure-Request": 1}, ...options, responseType: "arraybuffer"}).then((res) => {
resolve(res.data)
}).catch(reject)
})
//***************[ FUNÇÕES ]***************//
const info = msg.messages[0]
  if (!info.message) return 
  if (info.key && info.key.remoteJid == 'status@broadcast') return
const type = Object.keys(info.message)[0] == 'senderKeyDistributionMessage' ? Object.keys(info.message)[2] : (Object.keys(info.message)[0] == 'messageContextInfo') ? Object.keys(info.message)[1] : Object.keys(info.message)[0]
const content = JSON.stringify(info.message);
const altpdf = Object.keys(info.message)
global.prefix
const from = info.key.remoteJid
var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : ''
const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''
var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''
const isGroup = info.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? info.key.participant : info.key.remoteJid
const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const pushname = info.pushName ? info.pushName : ''
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const botNumber = client.user.id.split(':')[0]+'@s.whatsapp.net'
const args = body.trim().split(/ +/).slice(1);
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null 
const reply = (text) => {
  client.sendMessage(from, {text: text}, {quoted: info})
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? client.sendMessage(from, {text: teks.trim(), mentions: memberr}) : client.sendMessage(from, {text: teks.trim(), mentions: memberr})}

  //isQuoted 
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]) }
return buffer}
const isGroupAdmins = groupAdmins.includes(sender) || false 
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
//*******************************************//
q = args.join(" ")
const sendBtext = async (id, text1, desc1, but = [], vr) => {
buttonMessage = { text: text1, footer: desc1, buttons: but, headerType: 1 }
client.sendMessage(id, buttonMessage, {quoted: vr}) }
const sendBimg = async (id, img1, text1, desc1, but = [], vr) => {
buttonMessage = { image: {url: img1}, caption: text1, footerText: desc1, buttons: but, headerType: 4 }
client.sendMessage(id, buttonMessage, {quoted: vr}) }
const sendBimgT = async (id, img1, text1, desc1, but = [], vr) => { templateMessage = { image: {url: img1}, caption: text1, footer: desc1, templateButtons: but, }
client.sendMessage(id, templateMessage, {quoted: vr}) }
const sendGifButao = async (id, gif1, text1, desc1, but = [], vr) => { buttonMessage = { video: {url: gif1}, caption: text1, gifPlayback: true, footerText: desc1, buttons: but, headerType: 4 }
client.sendMessage(id, buttonMessage, {quoted: vr}) }
//*******************************************//


// VERIFICADOS ⭐️
const live = {key : {participant : '0@s.whatsapp.net'},message: {liveLocationMessage: {}}} 
const imgm = {key : {participant : '0@s.whatsapp.net'},message: {imageMessage: {}}}
const vid = {key : {participant : '0@s.whatsapp.net'},message: {videoMessage: {}}}
const contato = {key : {participant : '0@s.whatsapp.net'},message: {contactMessage:{displayName: `${pushname}`}}}
const doc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage:{}}}

if(budy == `${prefix}`) {
reply('🤔👍')}






//=====\\

// RESPOSTAS DOS COMANDOS \\
resposta = {
espere: "🌸 Aguarde...enviando ",
aguarde: "🌸 Aguarde...enviando ",
dono: "🌸 Esse comando so pode ser usado pelo meu dono!!! ",
grupo: "🌸 Esse comando só pode ser usado em grupo ",
privado: "🌸 Esse comando só pode ser usado no privado ",
adm: "🌸 Esse comando só pode ser usado por administradores de grupo",
botadm: " 🌸 Este comando só pode ser usado quando o bot se torna administrador ",
registro: `[⚙️️] Você não se registrou utilize ${prefix}rg para se registrar `,
norg: "[⚙️️] Você ja está registrado ",
erro: "🌸 Error, tente novamente mais tarde ",
menu: "aaaaa"
}


//mensagens que aparecem no terminal
 if (!isGroup && isCmd) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'blue')}\n${color('┃', 'blue')} ${color('Número:', 'red')} ${color(sender.split('@')[0], 'purple')}\n${color('┃', 'blue')} ${color('Nome:', 'red')} ${color(pushname, 'purple')}\n${color('┃', 'blue')} ${color('command:', 'red')} ${color(command)}\n${color('┃', 'blue')} ${color('Palavras:', 'red')} ${color(budy.length, 'magenta')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'blue')}`)
 if (!isGroup && !isCmd) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'blue')}\n${color('┃', 'blue')} ${color('Número:', 'red')} ${color(sender.split('@')[0], 'magenta')}\n${color('┃', 'blue')} ${color('Nome:', 'red')} ${color(pushname, 'purple')}\n${color('┃', 'blue')} ${color('command:', 'red')} ${color('Não', 'red')}\n${color('┃', 'blue')} ${color('Palavras:', 'red')} ${color(budy.length, 'magenta')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'blue')}`)
 if (isGroup && isGroup) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'blue')}\n${color('┃', 'blue')} ${color('Número:', 'red')} ${color(sender.split('@')[0], 'magenta')}\n${color('┃', 'blue')} ${color('Nome:', 'red')} ${color(pushname, 'purple')}\n${color('┃', 'blue')} ${color('command:', 'red')} ${color(command)}\n${color('┃', 'blue')} ${color('Palavras:', 'red')} ${color(budy.length, 'magenta')}\n${color('┃', 'blue')} ${color('Grupo:', 'red')} ${color(groupName, 'magenta')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'blue')}`)
 if (!isGroup && isGroup) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'blue')}\n${color('┃', 'blue')} ${color('Número:', 'red')} ${color(sender.split('@')[0], 'magenta')}\n${color('┃', 'blue')} ${color('Nome:', 'red')} ${color(pushname, 'purple')}\n${color('┃', 'blue')} ${color('Horário:', 'red')} ${color(time, 'magenta')}\n${color('┃', 'blue')} ${color('command:', 'red')} ${color('Não', 'red')}\n${color('┃', 'blue')} ${color('Palavras:', 'red')} ${color(budy.length, 'magenta')}\n${color('┃', 'blue')} ${color('Grupo:', 'red')} ${color(groupName, 'magenta')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'blue')}`)

switch(command){
/*====================>>
Comeco dos comandos com prefixo
*///<<==================



case "menu":
sendBimg(from, `${logo}`, `
┌──⊰ _*${nomeBot}️*_
┃𝐍𝐎𝐌𝐄: ${pushname} 
└──────────⊰
┌──⊰ _*🌸Menus🌸*_
│${emojium}${emojidois}${prefix}loli
│${emojium}${emojidois}${prefix}waifu
│${emojium}${emojidois}${prefix}neko
│${emojium}${emojidois}${prefix}reiniciar
└─────────⊰
`, "clover", [
{buttonId: `${prefix}clover`, buttonText: {displayText: `CLOVER!`}, type: 1}, {buttonId: `${prefix}clover`, buttonText: {displayText: `CLOVER!`}, type: 1}, {buttonId: `${prefix}clover`, buttonText: {displayText: `CLOVER!`}, type: 1},], info)
break 

case "clover":
{
return reply(`
bot: ${nomeBot}
dono: ${nomeDono}
`)}
break

//case de baixar videos
case "playvideo":
reply("aguarde um minuto")
bla = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/yt/playmp4?apikey=apiteam&query=${q}`) 
audbla = await getBuffer(bla.url)
client.sendMessage(from, {video: audbla, mimetype: "video/mp4"},
 {quoted: live}).catch(e => {
reply("erro")
})
break    

case 'reiniciar':
if (!isOwner) return enviar(resposta.dono)
enviar(`Reiniciando...`)
await sleep(2000)
process.exit()
break

case 'loli' :{
waifuddd = await axios.get('https://waifu.pics/api/sfw/shinobu')
templateMassage = {
image: {url:waifuddd.data.url,
quoted: info},
caption: 'vc e um(a) lolicon?🤔!',
footer: "ꪶ͓Clover-𝑴𝑫",
//templateButtons: templateButtons
}
client.sendMessage(from, templateMassage)
}
break

case 'neko':{
waifuddd = await axios.get('https://waifu.pics/api/sfw/neko')
templateMassage = {
image: {url:waifuddd.data.url,
quoted: info},
caption: 'Neko!',
footer: "ꪶ͓Clover-𝑴𝑫",
}
client.sendMessage(from, templateMassage)
}
break

case 'waifu':{
waifuddd = await axios.get('https://waifu.pics/api/sfw/waifu')
templateMassage = {
image: {url:waifuddd.data.url,
quoted: info},
caption: 'waifu!',
footer: "ꪶ͓Clover-𝑴𝑫",
}
client.sendMessage(from, templateMassage)
}
break











/*====================>>
Fim dos comandos com prefixo
*///<<==================
default:

}
/*====================>>
Comeco dos comandos sem prefixo 
*///<<==================





/*====================>>
Fim dos comandos sem prefixo
*///<<==================
} catch (e) {
console.log(e)
}
fs.watchFile('./index.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(color("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\a index foi editada entao vou reiniciar", "gold"));
process.exit()
}
})
})

}
startClover()