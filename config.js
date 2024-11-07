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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_11_11_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDQwLFxuICAgICAgICA4LFxuICAgICAgICAxMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjU0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTUzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE2LFxuICAgICAgICA1MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDYxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDczLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTksXG4gICAgICAgIDY2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDc1LFxuICAgICAgICAxNixcbiAgICAgICAgMzcsXG4gICAgICAgIDk0LFxuICAgICAgICA4NixcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDg2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA1MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDEsXG4gICAgICAgIDk3LFxuICAgICAgICAzMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTExLFxuICAgICAgICA2OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTYwLFxuICAgICAgICA1OSxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODYsXG4gICAgICAgIDY2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMixcbiAgICAgICAgMTczLFxuICAgICAgICAzMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOCxcbiAgICAgICAgOTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwLFxuICAgICAgICAxODUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjksXG4gICAgICAgIDk0LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNixcbiAgICAgICAgODgsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA2NixcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDUyLFxuICAgICAgICA3NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJnRTlkWHFHNlNFTjVlQTI1Z2dHWWRFUWdkeVJ3dllIWjAxeSt3M2tTb2dRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJSTXI1cmJadFMyLXl2RDdJM1dvN2RRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjMyOTk5YTdjLTFkODktNDRiNS05ODlhLTc3OTg2NTU1N2RlYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTEsXG4gICAgICAxNTcsXG4gICAgICAxMTIsXG4gICAgICAyMzgsXG4gICAgICAyMzYsXG4gICAgICAxNTcsXG4gICAgICAyMzAsXG4gICAgICAyNixcbiAgICAgIDEyMSxcbiAgICAgIDEwOSxcbiAgICAgIDU0LFxuICAgICAgMTMwLFxuICAgICAgMTI4LFxuICAgICAgMTIsXG4gICAgICAxMTcsXG4gICAgICAyMDMsXG4gICAgICAyMjQsXG4gICAgICA5MSxcbiAgICAgIDEyNSxcbiAgICAgIDQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MSxcbiAgICAgIDIxMyxcbiAgICAgIDg1LFxuICAgICAgMzcsXG4gICAgICAyNixcbiAgICAgIDIyOSxcbiAgICAgIDIwNixcbiAgICAgIDY4LFxuICAgICAgMjA3LFxuICAgICAgMTY2LFxuICAgICAgNDcsXG4gICAgICAyNyxcbiAgICAgIDE5MyxcbiAgICAgIDEzMyxcbiAgICAgIDE0OCxcbiAgICAgIDE3MyxcbiAgICAgIDQ1LFxuICAgICAgMTY5LFxuICAgICAgMjQxLFxuICAgICAgMTg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVRMVpXTFFaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDMzMjEwNTQzOjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjQwODk2MTE0NTI2Mjg6NDNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFdoNS9RRkVMbWtzcmtHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJtb3RXQlFMNXNUNDUzdVp0cVhGRVo4SmlPM0lOYmxBTW1FaTViVUkrcFdFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjdDL0U2bWVDeTZkUFhCMHYzQy9TUUN1RVJ1UUtBQ0VZM3hXYm1mcW5lVlovMU9XNE4vOWJ4RXJXUk9zeTFIWkVTd1RLZTJFc1Bqc1E2VE9TM0lrMER3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIklOZ0VqN2I3YjFJY1IrSEcxRzRIVUFEa1dMbXV4R2txb1Znb0dFRDBkbDVITzY4SzQ3ZzRZN2tSS3NtSGRBOVBQTXgvOUlnKzgrQnpSaWJVekZYaEF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMzMyMTA1NDM6NDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwOTc0MjY4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRkhMXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGSEwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJCL0RQQWFsbGdhckthRVZEaHQ3ZkZyV21zR1crRjdWWi9sbU43Q1kxVXJZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1ODcxMzg3NDEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMDkzMTk0MzExN1wifSIKfQ=="  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
