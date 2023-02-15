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
    getAllFundingAdditionalInformation = (req, res) => {
        fundingAdditionalInformationModel.find({}).exec((err, FundingAdditionalInformations) => {
            if (err) {
                res.send('khong the lay thong tin all FundingAdditionalInformation')
            } else {
                res.json(FundingAdditionalInformations)
            }
        })
    }
    getFundingAdditionalInformationById = (req, res) => {
        fundingAdditionalInformationModel.find({ _id: req.params.id }).exec((err, FundingAdditionalInformation) => {
            if (err) {
                res.send('khong the lay thong tin FundingAdditionalInformation')
            } else {
                res.json(FundingAdditionalInformation)
            }
        })
    }
}
module.exports =new fundingAdditionalInformationController()