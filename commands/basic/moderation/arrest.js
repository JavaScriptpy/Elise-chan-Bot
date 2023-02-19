module.exports = {
  name: "arrest",
  aliases: ["rashomon"],
  code: `$channelSendMessage[$getVar[logChannel];{newEmbed:{title:Arrest Log}{field:Staff:<@$authorID> ($authorID)}{field:User Arrested:<@$findMember[$message[1];false]> ($findMember[$message[1];false])}{field:Time & Date:<t:$truncate[$divide[$dateStamp;1000]]:F>}{field:Place of Occurrence:<#$channelID> ($channelID)}{color:$getVar[default]}{timestamp}}]
$title[1;ARRESTED!]
$description[1;***$userTag[$findMember[$message[1];false]]*** *broke a leg. Oops.*]
$image[1;http#COLON#//82.223.64.239#COLON#27621/media/arrest.gif]
$color[1;$getVar[default]]
$giveRole[$guildID;$findMember[$message[1];false];933655133332602880]
$clear[1;$authorID]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];false]]];{newEmbed:{author:ERR-05 Heirachy:http#COLON#//82.223.64.239#COLON#27621/media/err.png}{description:$getVar[err05]}{color:Red}}]
$onlyIf[$isBot[$findMember[$message[1];false]]==false;{newEmbed:{author:ERR-03 User is Bot:http#COLON#//82.223.64.239#COLON#27621/media/err.png}{description:$getVar[err03]}{color:Red}}]
$onlyIf[$findMember[$message[1];false]!=$authorID;{newEmbed:{author:ERR-04 User is Author:http#COLON#//82.223.64.239#COLON#27621/media/err.png}{description:$getVar[err04]}{coor:Red}}]
$onlyIf[$memberExists[$findMember[$message[1];false];$guildID]==true;{newEmbed:{author:ERR-00 User Invalid:http#COLON#//82.223.64.239#COLON#27621/media/err.png}{description:$getVar[err00]}{color:Red}]
$argsCheck[>0;{newEmbed:{author:ERR-02 Bad Request:http#COLON#//82.223.64.239#COLON#27621/media/err.png}{description:$getVar[err02]}{field:Usage:$jsonRequest[http#COLON#//82.223.64.239#COLON#27621/commands/arrest;Usage]:yes}{color:Red}}]
$onlyForRoles[$getVar[authorizedOne];$getVar[authorizedTwo];{newEmbed:{author:ERR-01 Unauthorized:http#COLON#//82.223.64.239#COLON#27621/media/err.png}{description:$getVar[err01]}{color:Red}}]`
}