const talkModel = require('../model/talkModel.js')
const { talkValidate } = require('../middleware/validate.js')

class talkController {
    postTalk = (req, res) => {
        const { error, value } = talkValidate(req.body)
        if (error) return res.status(400).send(error.details[0].message)
        // const value=req.body.task
        let talk = new talkModel(value)
        talk.save((error, demo) => {
            if (error) {
                res.send(error)
            } else {
                console.log('Gui talk a demo thanh cong');
                res.send(demo)
            }
        })
    }
}
module.exports =new talkController()