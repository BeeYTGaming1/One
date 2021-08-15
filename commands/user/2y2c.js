const superagent = require("superagent")
const util = require('minecraft-server-util');
module.exports = {
    name: '2y2c',
    aliases: ['2y2c', '2b2t'],
    category: 'user',
    description: "Xem hàng chờ của 2b2t và 2y2c",
    run: async (client, message, args) => {
        if(message.author.id === "") return message.reply("m khong nen sai bot nay vi chinh m da la nguoi chui bot nay ngu. thanks condi")
        superagent.get("https://2b2t.io/api/queue?last=true").end((err, data) => {
            let bt = data.body[0][1];
            util.status('2y2c.org').then((response) => {
                let yc = response.onlinePlayers - 100;
                console.log(response.samplePlayers[2].name.split("§")[2])
                let yct = parseInt(response.samplePlayers[2].name.split("§")[2].replace("l", "")) 
                let ycq = parseInt(response.samplePlayers[1].name.split("§")[2].replace("l", "")) 
                superagent.get("https://api.2b2t.dev/prioq").end((err, dataq) => {
                        // if(yc<0) return message.reply("```Hàng chờ djt của```"+`\n<:4890_RicardoSmile:628266385977376782>**2Y2C ĐANG RESTART**<:4890_RicardoSmile:628266385977376782>\n<:6223_Water_sheep:754612540021014539>**Queue thường 2b2t:** ${bt}\n<:what:628265861547032610>**Queue ưu tiên 2b2t:** ${dataq.body[1]}\n`+"```diff\n+Bố m đéo có tiền mua queue của 2y2c và 2b2t\n+ Sài nhiều quá ăn l đấy\n- Nạp lần đầu đeeeee```"+"```ini\n[Code bay namanhishere#9333 and Moka Sakura#5864]```")
                    message.reply("```Hàng chờ djt của```"+`\n<:4890_RicardoSmile:628266385977376782>**Queue 2y2c thường**: ${yct}\n<:kappa:628264512209944599>**Queue ưu tiên 2y2c:** ${ycq}\n<:6223_Water_sheep:754612540021014539>**Queue thường 2b2t:** ${bt}\n<:what:628265861547032610>**Queue ưu tiên 2b2t:** ${dataq.body[1]}\n`+"```diff\n+Bố m đéo có tiền mua queue của 2y2c và 2b2t\n+Sài nhiều quá ăn l đấy\n+Djt xong nhớ trả tiền khách sạn\n- Nạp lần đầu đeeeee```"+"```ini\n[Code bay namanhishere#9333 and Moka Sakura#5864]```")
                    })
                })
            })
        }
    }