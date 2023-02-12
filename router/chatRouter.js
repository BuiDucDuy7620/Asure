const express = require("express");
const chatRouter = express.Router();
const chatController = require("../controller/chatController.js");

chatRouter.get("/", chatController.getAllChat);
chatRouter.get("/:id",  chatController.getChatById);

chatRouter.post("/newChat",  chatController.newChat);

module.exports = chatRouter;
