
class ServiceChat{

    listChats


    constructor() {
        this.listChats = [];
    }

// Depois verificar se é minha propria menssagem captiruar apenas mensages que sejam de usuarios que não eu
    verifyIfChatOpen(newChat) {
        if(!this.verifyIfListChatIsValid()) {
            this.listChats = []
            this.listChats.push(newChat)
            return false
        } else {
            let signal = 0;
            for (let chat of this.listChats) {
                if (chat.phoneNumber === newChat.phoneNumber) {
                    signal++
                    break;
                }
            }
            if (!(signal > 0 && this.listChats.length > 0)) {
                this.listChats.push(newChat)
                return false
            } else {
                return true
            }
        }
    }


    verifyIfListChatIsValid(){
        if(this.listChats.length === 0 ){
            return false;
        } else return new Date().getDate() <= this.listChats[0].dataTime.getDate();
    }
}

module.exports = ServiceChat