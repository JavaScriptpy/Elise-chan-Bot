module.exports = {
  name: "addmeme",
  prototype: "slash",
  type: "interaction",
  code: `
$interactionReply[;{newEmbed:{title:HTTP 201 Created}{description:Meme successfully added to API database.}{field:Response Data:\`\`\`json
$httpRequest[http://par01.pylexnodes.net:30113/bungomemes;POST;{"name":"$slashOption[name]", "url":"$nonEscape[$slashOption[url]]"};;{newEmbed:{title:An error occured!}{description:An error occured upon sending your request to the API, please notify the developer.}{color:Red}}{options:{ephemeral: true}}{extraOptions:{interaction: true}}]
\`\`\`}{color:Green}{footer:ECA-Meme}{timestamp}}]

$onlyIf[$isValidImageLink[$message[1]]==true;{newEmbed:{author:ERR-07.400 API Error:http://par01.pylexnodes.net:30113/media/err.png}{description:The request has been declined, the image URL must be valid!}{color:Red}}]
$onlyForRoles[$getVar[authorizedOne];$getVar[authorizedTwo];{newEmbed:{author:ERR-01 Unauthorized:http://par01.pylexnodes.net:30113/media/err.png}{description:$getVar[err01]}{color:Red}}]`
}