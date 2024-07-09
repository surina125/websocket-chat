const Chat = require("../Models/chat")
const user = require("../Models/user")
const chatController = {}

chatController.saveChat = async() => {
    const newMessage = new Chat({
        chat: message,
        user: {
            id: user._id,
            name: user.name
        }
    })
    await newMessage.save()
    return newMessage
}

module.exports = chatController