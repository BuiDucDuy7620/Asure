const express = require("express");
const roomChatRouter = express.Router();
const roomChatController = require("../controller/roomChatController.js");

roomChatRouter.get("/", roomChatController.getAllRoomChat);
roomChatRouter.get("/:id",roomChatController.getRoomChatById);
roomChatRouter.post("/newRoomChat",roomChatController.newRoomChat);

module.exports = roomChatRouter;
