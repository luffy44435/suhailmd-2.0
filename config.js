const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2349033210543";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "+2349033210543,903xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_22_11_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTExLFxuICAgICAgICA1MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA2OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTksXG4gICAgICAgIDYwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOSxcbiAgICAgICAgNTksXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDU5LFxuICAgICAgICA3MixcbiAgICAgICAgMjUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI0LFxuICAgICAgICA4NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDczLFxuICAgICAgICAxNDcsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzNixcbiAgICAgICAgMzUsXG4gICAgICAgIDM0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc4LFxuICAgICAgICA5NyxcbiAgICAgICAgNzksXG4gICAgICAgIDgxLFxuICAgICAgICAxNjksXG4gICAgICAgIDEyLFxuICAgICAgICAxMixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDAsXG4gICAgICAgIDQ4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTM4LFxuICAgICAgICA4MixcbiAgICAgICAgNzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzksXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODcsXG4gICAgICAgIDE5LFxuICAgICAgICA1MCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDksXG4gICAgICAgIDE2LFxuICAgICAgICAxMSxcbiAgICAgICAgMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDM2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjA3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTk0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjA1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMzMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTksXG4gICAgICAgIDcwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDkwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDcsXG4gICAgICAgIDI5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICA0OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODUsXG4gICAgICAgIDExMixcbiAgICAgICAgNzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5LFxuICAgICAgICA4MixcbiAgICAgICAgOTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDksXG4gICAgICAgIDc1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk4LFxuICAgICAgICA4NSxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOTBwSTRtVkQ4MysvVkdvTVdzVWhEcFFkckN6STdld2VjNS92bjllUXFIbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidW90aG93dUtRVjZkZnNOSWtiVVZMQVwiLFxuICBcInBob25lSWRcIjogXCI4MzdlNjk4Mi1jYzQ1LTQ3MjMtOTMzNC1jN2NiMTU5NGEyODFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOCxcbiAgICAgIDI0MCxcbiAgICAgIDIyNyxcbiAgICAgIDEzMixcbiAgICAgIDUyLFxuICAgICAgMjQsXG4gICAgICAxMTksXG4gICAgICAxMjMsXG4gICAgICAxMDEsXG4gICAgICAyMzcsXG4gICAgICAxNDIsXG4gICAgICAzMSxcbiAgICAgIDI0OCxcbiAgICAgIDkzLFxuICAgICAgMTMwLFxuICAgICAgMTIxLFxuICAgICAgMjQ2LFxuICAgICAgMjEyLFxuICAgICAgNTMsXG4gICAgICAyMjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUsXG4gICAgICAyMDksXG4gICAgICAyMTgsXG4gICAgICA2OSxcbiAgICAgIDgzLFxuICAgICAgMTI1LFxuICAgICAgMTY0LFxuICAgICAgMTUxLFxuICAgICAgNTEsXG4gICAgICAxMjgsXG4gICAgICAyMzMsXG4gICAgICA3NyxcbiAgICAgIDMyLFxuICAgICAgMTEwLFxuICAgICAgMzksXG4gICAgICA1LFxuICAgICAgNjksXG4gICAgICAyNDksXG4gICAgICAxMjUsXG4gICAgICAxMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ0NGNEhBTUxcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMzMyMTA1NDM6NDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2NDA4OTYxMTQ1MjYyODo0NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMV2g1L1FGRVBDTno3a0dHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm1vdFdCUUw1c1Q0NTN1WnRxWEZFWjhKaU8zSU5ibEFNbUVpNWJVSStwV0U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiN3hKYUE3NnQxS1RQRTRHdGZEUXdCQUZjd3lCL0pyVm1aVG81ek9JRjBwaWkzQW5vRmtaWUJDbW1jYmc0OE1vREJtUWttQXcwQnd3MWo3TlhWc2FsRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiKy9VNEF5WHBMWmNNUjRUMmMvdnkzaWk3a2pCb2k3d3dCS2V1RmU2azB4cUhsdE5pR0FnNUdDQklIVFFJSXFJOG1CVGRwdHl5TXpTVk8zNm9KZG5EQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAzMzIxMDU0Mzo0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE0NDY1MTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGSE1cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZITS5qc29uIjogIntcImtleURhdGFcIjpcImtmZHR3MEJZZ2tqTE0zdHdNVlMwNDNwZzlSbVl5ZzM5SUVkVGdXak1BYU09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU4NzEzODc0MSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzE0NDY0ODQ1NzdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ZORO",
  ownername:process.env.OWNER_NAME|| "ZORO",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
