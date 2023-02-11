module.exports = {
  name: "help",
  code: `$author[1;Help | $getObjectProperty[CommandName];https://eca.astrookai.repl.co/media/info.png]
$addField[1;Example;\`\`\`$getObjectProperty[UsageExample]\`\`\`;no]
$addField[1;Usage;\`\`\`$getObjectProperty[Usage]\`\`\`;no]
$addField[1;Authorized Personnels;$getObjectProperty[AuthorizedPersonnels[0]] $if[$getObjectProperty[AuthorizedPersonnels[1]]==undefined;;$getObjectProperty[AuthorizedPersonnels[1]]];no]
$addField[1;Description;$getObjectProperty[Description];no]
$addField[1;Aliases;$getObjectProperty[Aliases];no]
$addField[1;Category;$getObjectProperty[Category];yes]
$addField[1;Command Name;$getObjectProperty[CommandName];yes]
$color[#1e90ff]
$createObject[$jsonRequest[https://eca.astrookai.repl.co/commands/$message[1]]]
$onlyIf[$checkContains[$message[1];arrest;ban;kick;release;unban;addgif;addmeme;bungogif;bungomeme;eval;help;reboot;status;system;update]==true;{newEmbed:{author:Help | List:https://eca.astrookai.repl.co/media/info.png}{field:Moderation:arrest, ban, kick, release, unban:no}{field:Fun:addgif, addmeme, bungogif, bungomeme:no}{field:Misc:eval, help, reboot, status, system, update:no}{color:#1e90ff}}]`
}