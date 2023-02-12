const fundingAdditionalInformationModel = require('../model/fundingAdditionalInformationModel.js')
const { fundingAdditionalInformationValidate } = require('../middleware/validate.js')

class fundingAdditionalInformationController {
    postFundingAdditionalInformation = (req, res) => {
        const { error, value } = fundingAdditionalInformationValidate(req.body)
        if (error) return res.status(400).send(error.details[0].message)
        // const value=req.body.additional
        let fundingAdditionallFinformation = new fundingAdditionalInformationModel(value)
        fundingAdditionallFinformation.save((error, value) => {
            if (error) {
                res.send(error)
            } else {
                console.log('Gui fundingAdditionallFinformation  thanh cong');
                res.send(value)
                console.log("dataaaaaaaaaaaaa",value);
            }
        })
    }
}
module.exports =new fundingAdditionalInformationController()