const express=require('express')
const talkRouter=express.Router()
const talkController=require('../controller/talkController')
talkRouter.post('/about-us',talkController.postTalk)

module.exports =talkRouter