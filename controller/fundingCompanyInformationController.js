const fundingCompanyInformationModel = require('../model/fundingCompanyInformationModel.js')
const { fundingCompanyInformationValidate } = require('../middleware/validate.js')
const { upload } = require('../middleware/upload.js')
const fs = require('fs')
const path = require('path')

class fundingCompanyInformationController {
    postFundingCompanyInformation = async (req, res) => {
        const { error, value } = fundingCompanyInformationValidate(req.body)
        if (error) return res.status(400).send(error.details[0].message)
        // const value=req.body.task
        // docj file base64 vaf taoj link de luu vao mongodb
        if (value.file) {
            let uploadFile = await upload(value.file);
            let document = {
                type: uploadFile.type,
                url: `http://localhost:3000/static/document/${Date.now()}`,
                data: fs.writeFileSync(
                    path.join(`./public/document/${Date.now()}`),
                    uploadFile.data,
                    (err) => {
                        if (err) throw err
                    }
                )

            }
            value.file = document.url 
        }
        // var x = path.join(`./public/document/${new Date().toLocaleDateString}`)

        //     console.log('joinnnnnnnnnnnnnnnnnnnnnnnnnn', x)
        //     console.log('dirnamennnnnnnnnnnnnnnnnnnnnnnnnn', __dirname)

        let fundingCompanyInformation = new fundingCompanyInformationModel(value)
        fundingCompanyInformation.save((error, fundingCompanyInformation) => {
            if (error) {
                res.send(error)
                console.log(error);
            } else {
                console.log('Gui fundingCompanyInformation  thanh cong');
                res.send(fundingCompanyInformation)
            }
        })
    }
}
module.exports = new fundingCompanyInformationController()