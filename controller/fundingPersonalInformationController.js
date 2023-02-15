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
    getAllPersonInformation = async(req, res) => {
        fundingPersonalInformationModel.find({}).exec((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.json(value)
            }
        })
    }
    getPersonInformationById = (req, res) => {
        fundingPersonalInformationModel.find({ _id: req.params.id }).exec((err, value) => {
            if (err) {
                res.send('khong the lay thong tin ')
            } else {
                res.json(value)
            }
        })
    }
}
module.exports =new fundingPersonalInformationController()