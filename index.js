const { Client,LocalAuth,MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs')

const Utils = require('./Utils')
const Chat = require('./Chat')
const ServiceChat = require('./ServiceChat')
const path = require("path");

const utils = new Utils();

const serviceChat = new ServiceChat();


const client = new Client({
    authStrategy: new LocalAuth()
});




client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});


client.on("message_create",async message => {
    contactChat = message._data.id.remote

    newChat = new Chat(contactChat,new Date())


    if(message.body.includes('file')) {

        filePath = './test.mpeg'
        data = fs.readFileSync(filePath,'base64')

        var stats = fs.statSync("test.mpeg")
        var fileSizeInBytes = stats.size;
        const filename = path.basename(filePath)

        myFile = new MessageMedia('audio/mpeg',data, filename,fileSizeInBytes )


        client.sendMessage(message.from,myFile)
    }


    try {

        const chatIsOpen = serviceChat.verifyIfChatOpen(newChat)

        if(newChat.type === "contact" && !chatIsOpen && !message._data.id.fromMe){
            console.log('É um contato')
            client.sendMessage(message.from, "Olá 👋🏽😃, eu sou o @viniBot, assistente do poderosíssimo e extraordinário Sr. Vinicius.\n" +
                "Evite ligações desnecessárias; deixe a sua mensagem e meu senhor falará com você assim que possível 🙏🏽")
        }
        else {
            console.log("É um grupo grupo")
        }




    } catch (err){
        console.log(err)
    }


})



client.initialize();