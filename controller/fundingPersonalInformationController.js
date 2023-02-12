const fundingPersonalInformationModel = require('../model/fundingPersonalInformationModel.js')
const { fundingPersonalInformationValidate } = require('../middleware/validate.js')

class fundingPersonalInformationController {
    postFundingPersonalInformation = (req, res) => {
        const { error, value } = fundingPersonalInformationValidate(req.body)
        if (error) return res.status(400).send(error.details[0].message)
        let fundingPersonalInformation = new fundingPersonalInformationModel(value)
        fundingPersonalInformation.save((error, value) => {
            if (error) {
                res.send(error)
            } else {
                console.log('Gui fundingPersonalInformation  thanh cong');
                res.send(value)
            }
        })
    }
}
module.exports =new fundingPersonalInformationController()