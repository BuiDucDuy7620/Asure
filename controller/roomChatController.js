const roomChatModel = require("../model/roomChatModel.js");
const {roomChatValidate} = require("../middleware/validate.js");

class roomChatController {
    getAllRoomChat = (req, res) => {
        roomChatModel.find().exec((err, roomChat) => {
            if (err) {
                res.send("Khong the lay thong tin roomChat");
            } else {
                console.log("Lay thanh cong thong tin tat ca roomChat");
                console.log(roomChat);
                res.json(roomChat);
            }
        });
    };

    getRoomChatById = (req, res) => {
        roomChatModel.find({ _id: req.params.id })
            .exec((err, roomChat) => {
                if (err) {
                    res.send(err);
                } else {
                    console.log("Lay thanh cong thong tin roomChat");
                    console.log(roomChat);
                    res.json(roomChat);
                }
            });
    };
   
    newRoomChat = (req, res) => {
        const { error, value } = roomChatValidate(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        let roomChat = new roomChatModel(value);

        roomChat.save((err, roomChat) => {
            if (err) {
                res.send("Error luu thong tin roomChat");
            } else {
                console.log("Luu thong tin roomChat thanh cong", roomChat);
                res.send(roomChat);
            }
        });
    };
  
}


module.exports = new roomChatController();
