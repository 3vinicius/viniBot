class Chat {

    constructor(contactChat, dataTime,author) {
        this.phoneNumber = author;
        this.type = this.typeByMenssageNumber(contactChat)
        this.dataTime = dataTime;
    }


    phoneNumber
    type
    dataTime
    typeByMenssageNumber(number){
        if (number.includes("@g.us")){
            return "group"
        } else if(number.includes("@broadcast")) {
            return "broadcast"
        } else {
            return "contact"
        }
    }
}
module.exports = Chat
