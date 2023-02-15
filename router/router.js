
const talkRouter=require('./talkRouter')

const fundingPersonalInformationRouter=require('./fundingPersonalInformationRouter')

const fundingAdditionalInformationRouter=require('./fundingAdditionalInformationRouter')
const fundingCompanyInformationRouter=require('./fundingCompanyInformationRouter')
const roomChatRouter=require('./roomChatRouter')

const chatRouter=require('./chatRouter')


const Router=(app)=>{
    app.get('/',(req,res)=>{res.send('hello')})
    app.use('/asure',talkRouter)
    app.use('/asure/funding/personal',fundingPersonalInformationRouter)
    app.use('/asure/funding/additional',fundingAdditionalInformationRouter)
    app.use('/asure/funding/company',fundingCompanyInformationRouter)
    app.use('/asure/roomChat',roomChatRouter)
    app.use('/asure/chat',chatRouter)

    

}
module.exports=Router