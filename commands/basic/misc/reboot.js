module.exports = {
  name: "reboot",
  aliases: ['restart'],
  code: `$reboot[index.js]

$author[1;System Reboot;http://co.daki.cc:4188/media/system.png]
$description[1;The bot is now rebooting!]
$color[1;$getVar[green]]

$onlyForIDs[$getVar[ownerID];{newEmbed:{author:ERR-01 Unauthorized:http://co.daki.cc:4188/media/err.png}{description:Due to the critical function of this command in the bot's system, this command has been restricted to the developer only for the security of the bot and the server it oversees.}{color:$getVar[red]}}]`
}