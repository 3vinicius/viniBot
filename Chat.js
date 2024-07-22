class Chat {

    constructor(phoneNumber, dataTime) {
        this.phoneNumber = phoneNumber;
        this.type = this.typeByMenssageNumber(phoneNumber)
        this.dataTime = dataTime;
    }

    phoneNumber
    type
    dataTime

    typeByMenssageNumber(number){
        if (number.includes("@g.us")){
            return "group"
        } else {
            return "contact"
        }
    }
}
module.exports = Chat
