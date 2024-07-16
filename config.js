const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347026572132";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_59_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTk3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzOCxcbiAgICAgICAgODIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDMyLFxuICAgICAgICAwLFxuICAgICAgICA5OCxcbiAgICAgICAgOTksXG4gICAgICAgIDYzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEzLFxuICAgICAgICA5NixcbiAgICAgICAgMjExLFxuICAgICAgICAxNDEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDMsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxODksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjExLFxuICAgICAgICA0MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE4LFxuICAgICAgICA0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTA4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDk5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjE1LFxuICAgICAgICA1OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA5LFxuICAgICAgICA4NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgODIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMyLFxuICAgICAgICA3NSxcbiAgICAgICAgNSxcbiAgICAgICAgNixcbiAgICAgICAgMzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjksXG4gICAgICAgIDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDksXG4gICAgICAgIDc5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAzMixcbiAgICAgICAgMTg2LFxuICAgICAgICA4MixcbiAgICAgICAgMjEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzksXG4gICAgICAgIDI3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUyLFxuICAgICAgICA2NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAyLFxuICAgICAgICA1LFxuICAgICAgICA5MixcbiAgICAgICAgMjExLFxuICAgICAgICAxOTMsXG4gICAgICAgIDk3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0NixcbiAgICAgICAgNDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI0LFxuICAgICAgICA4OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTksXG4gICAgICAgIDk5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzgsXG4gICAgICAgIDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVkYrRlRvSDBCc0dRYWwxVHpMN0p2eURFRnYrWmNEdkUvS2U2SXFlUGt2TT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicnFoSE9tblVSQS1nbFU2ajNkSVBuZ1wiLFxuICBcInBob25lSWRcIjogXCJkZTk1ZTBlNS1mNTg3LTRmOTAtOWUwZS05ZjRjN2U4NWM2NDlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODksXG4gICAgICAxMTcsXG4gICAgICA1MixcbiAgICAgIDMzLFxuICAgICAgMzAsXG4gICAgICAyOCxcbiAgICAgIDEwOCxcbiAgICAgIDE1OSxcbiAgICAgIDUyLFxuICAgICAgMTg0LFxuICAgICAgMTEyLFxuICAgICAgMTIsXG4gICAgICA2MixcbiAgICAgIDEzMSxcbiAgICAgIDcwLFxuICAgICAgNyxcbiAgICAgIDEzMSxcbiAgICAgIDY0LFxuICAgICAgMjIzLFxuICAgICAgMjE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg0LFxuICAgICAgMTM5LFxuICAgICAgMjA3LFxuICAgICAgMTQwLFxuICAgICAgMjExLFxuICAgICAgMjEwLFxuICAgICAgODEsXG4gICAgICA2MSxcbiAgICAgIDI0LFxuICAgICAgMTk2LFxuICAgICAgMyxcbiAgICAgIDIzNixcbiAgICAgIDIzNyxcbiAgICAgIDE1NixcbiAgICAgIDIwMyxcbiAgICAgIDQwLFxuICAgICAgMjA3LFxuICAgICAgMTExLFxuICAgICAgMjI5LFxuICAgICAgNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWkpCNFRTREFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMjY1NzIxMzI6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTYzNjI1Nzg4NTM4OTMxOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUMwMHRrREVJekIyYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJvYWJLS2dmeTVjbGFHdjV3aU5mZElGbVVDOWNWaHJtVGU4cStiOGhWKzA0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImxyY2hwV2hxK0x1M2hpOWpQQzArZDVVdm1Vd1lOdXNJOVRwMGlwMHFSamhkR2VldTJPYlMxZWdPM0ZadTRmaWJYNHV1WE1iR2IwVkJ1QXpSZjlFRkJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIktYWUdMQ21XV21kNVpwY3M2NzhyeDB0UVB2Mk9tS0w0dnVHb0pFRU41cDUzb0lCdkZHbHQ0TERQdEg1dEZnUThCVm5iVXdFNDh2UFlJVUxqNUhlRERnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMjY1NzIxMzI6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjExMzExNTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGSERcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZIRC5qc29uIjogIntcImtleURhdGFcIjpcIkNONnlibUx6VGFQZWRsWkpNSTlDcFZ0aGxOZ2dvUXh3U2RNNkVJdmJZQVE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTkzMzAzMTA0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjExMzExNTUzMTVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
