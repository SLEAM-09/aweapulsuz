const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let pages = [
              '**??Genel Komutlar??**\n\n\n  **🔰 a!ping** \n  **🔰 a!avatar <@kullanıcı>** \n  **🔰 a!davet ** \n **🔰 a!tavsiye ** \n **🔰 a!ailemiz** \n **:beginner: a!yap�mc�**',
              '**?? Moderasyon Komutları?? **\n\n\n  **⚠ a!ban <@kullanıcı> <sebep> ** \n **⚠ a!kick <@kullanıcı> <sebep> ** \n **⚠ a!sustur <@kullanıcı> <sebep>** \n  **⚠ a!uyar <@kişi> <sebep> **\n **⚠ a!rol-ver <@kişi> <verilecekrol> ** \n **⚠ a!reklam-tara** \n **⚠ a!rol-bilgi** \n **⚠ a!unban** \n **⚠ a!mute** \n **⚠ a!kilit <sure> <kanal>** \n ',
              '**??Eğlence Komutları??**\n\n\n **🌹 a!gif** \n **🌹 a!dcnitro** \n **🌹 a!aşkölçer** \n **🌹 a!çayiç** \n **🌹 a!mc-ödül** \n **🌹 a!stresçarkı** \n **🌹 a!tkm** \n **🌹 a!troll** \n **🌹 a!wasted** \n **🌹 a!woodie** \n **🌹 a!söv** \n **🌹 a!çekiç** \n **🌹 a!8ball** \n **🌹 a!rastgele-renk** \n **🌹 a!ters-renk** \n **🌹 a!koş**',
              '**??Diğer Komutlar**??\n\n\n **⚡ a!havadurumu** \n **⚡ a!döviz** \n **⚡ a!afk** \n **⚡ a!istatistik** \n **⚡ a!çekiliş** \n **⚡ a!hd** \n **⚡ a!eval** \n **⚡ a!top10**',
			  '**??Kullanıcı Komutları??**\n\n\n **📥 a!emojiyazı** \n **📥 a!kullanıcıbilgim** \n **📥 a!yaz ** \n **📥 a!slowmode** \n **📥 a!yazı-tura** \n **📥 a!mesajat** \n **📥 a!sunucubilgi** \n  **📥 a!saat** \n **📥 a!temizle** \n **📥 a!sahip** \n  **📥 a!sor** \n **📥 a!unload** \n **📥 a!öner**',
              ];
  let page = 1;

  const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail('https://cdn.discordapom/attachments/487719679868272689/488329963926192158/image0.png')
    .setFooter(`Sayfa ${page} / ${pages.length} 6 saniye işerisinde tiklayiniz.`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {

  msg.react('⬅')
  .then(r => {
    msg.react('➡')

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('RANDOM')
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setColor('RANDOM')
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })

    })
  })
};


exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["help", "y", "h"],
permLevel: 0
};

exports.help = {
name: 'yardım',
description: 'Yardım Listesini Gösterir',
usage: 'yardım'
};