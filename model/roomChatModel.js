const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const RoomChatSchema = new Schema({
    // _id: mongoose.ObjectId,
    name: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    }
});
// RoomChatSchema.path("_id").ref("RoomChat");
module.exports = mongoose.model("RoomChat", RoomChatSchema);


 