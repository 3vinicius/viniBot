const { Client,LocalAuth  } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const Utils = require('./Utils')
const Chat = require('./Chat')
const ServiceChat = require('./ServiceChat')

const utils = new Utils();
const serviceChat = new ServiceChat();

const client = new Client({
    authStrategy: new LocalAuth()
});



let listChats = []

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on("message_create",message => {
    contactChat = message._data.id.remote

    newChat = new Chat(contactChat,new Date())

    if(!serviceChat.verifyIfListChatIsValid(listChats)) {
        listChats = []
    }
    const chatIsOpen = serviceChat.verifyIfChatOpen(listChats,newChat)
    if(!chatIsOpen) listChats.push(newChat)

    if(newChat.type === "contact" && !chatIsOpen){
        console.log('É um contato')
        client.sendMessage(message.from, "Olá 👋🏽😃, eu sou o @viniBot, assistente do poderosíssimo e extraordinário Sr. Vinicius.\n" +
             "Evite ligações desnecessárias; deixe a sua mensagem e meu senhor falará com você assim que possível 🙏🏽")
    }
    else {
        console.log("É um grupo grupo")
    }
})



client.initialize();