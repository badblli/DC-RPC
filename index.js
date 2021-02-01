var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "Discord Sunucumuz",
            assets: {
                large_image: "logo1",
                large_text: "🔗 Æ- Code&Plugins #Başlıyoruz" // oynuyor kısmında gözükecek yazı
            },
            buttons: [{ label: "Discord Katılım Linki", url: "https://discord.gg/Guq8NvDhv3"}] // buton
        }
    })
})
client.login({ clientId: "CLINT_ID" }).catch(console.error); // tırnaklar arasına oluşturduğunuz application clint id'yi yapıştırınız.
console.log(`Oynuyor Kısmı Başarıyla Etkinleştirildi`)