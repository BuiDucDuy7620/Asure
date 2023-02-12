const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ChatSchema = new Schema({
    // _id: mongoose.ObjectId,
    roomChat: {
        type: mongoose.ObjectId,
        ref: "RoomChat",
        // required: true,
    },
    name: {
        type: String,
        // required: true,
    },
    content: {
        type: String,
        // required: true,
    }
},
    {
        timestamps: true
    }
);
module.exports = mongoose.model("Chat", ChatSchema);


