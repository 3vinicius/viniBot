class Utils {

    constructor() {
    }

    isMessageGroup(message){
    let contactChat = message._data.id.remote
        let fromMe = message._data.id.fromMe
    if(!contactChat.includes("@g.us") && !fromMe)
        return false
    else
        return true
}

}

module.exports = Utils