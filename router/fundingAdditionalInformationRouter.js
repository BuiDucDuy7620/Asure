const express=require('express')
const fundingAdditionalInformationRouter=express.Router()
const fundingAdditionalInformationController=require('../controller/fundingAdditionalInformationController')
fundingAdditionalInformationRouter.post('/fundingAdditionalInformation',fundingAdditionalInformationController.postFundingAdditionalInformation)
fundingAdditionalInformationRouter.get('/getAllFundingAdditionalInformation',fundingAdditionalInformationController.getAllFundingAdditionalInformation)
fundingAdditionalInformationRouter.get('/:id',fundingAdditionalInformationController.getFundingAdditionalInformationById)

module.exports =fundingAdditionalInformationRouter