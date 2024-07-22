
class ServiceChat{

    constructor() {
    }

    verifyIfChatOpen(listChats, newChat) {
        let signal = 0;
        for (let chat of listChats) {
            if (chat.phoneNumber === newChat.phoneNumber) {
                signal++
                break;
            }
        }
        return signal > 0 && listChats.length > 0
    }


    verifyIfListChatIsValid(listChats){
        if(listChats.length === 0 ){
            return false;
        } else return new Date().getDate() <= listChats[0].dataTime.getDate();
    }






}

module.exports = ServiceChat