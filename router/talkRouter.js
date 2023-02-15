const express=require('express')
const talkRouter=express.Router()
const talkController=require('../controller/talkController')
talkRouter.post('/about-us',talkController.postTalk)

talkRouter.get('/getAllTalk',talkController.getAllTalk)
talkRouter.get('/getTalkById/:id',talkController.getTalkById)
talkRouter.get('/exportTalkById/:id',talkController.exportTalkById)
talkRouter.get('/exportAllTalk',talkController.exportAllTalk)

talkRouter.get('/exportPDFListTalk',talkController.exportPDFListTalk)

module.exports =talkRouter