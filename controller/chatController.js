const ChatModel = require("../model/chatModel.js");
const {chatValidate } = require("../middleware/validate.js");

class chatController {
    getAllChat = (req, res) => {
        ChatModel.find().exec((err, Chats) => {
            if (err) {
                res.send("Khong the lay thong tin Chat");
            } else {
                console.log("Lay thanh cong thong tin tat ca Chat");
                console.log(Chats);
                res.json(Chats);
            }
        });
    };

    getChatById = (req, res) => {
        ChatModel.find({ _id: req.params.id })
            // .populate("RoomChat")
            .exec((err, Chat) => {
                if (err) {
                    res.send(err);
                } else {
                    console.log("Lay thanh cong thong tin Chat");
                    console.log(Chat);
                    res.json(Chat);
                }
            });
    };

    newChat = (req, res) => {
        const { error, value } = chatValidate(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        let Chat = new ChatModel(value);
        Chat.save((error, Chat) => {
            if (error) {
                res.send(error);
            } else {
                console.log("Luu thong tin Chat thanh cong", Chat);
                res.send(Chat);
                console.log(Chat);
            }
        });
    };

}


module.exports = new chatController();
