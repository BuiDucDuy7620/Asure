const talkModel = require('../model/talkModel.js')
const { talkValidate } = require('../middleware/validate.js')
const excelJS=require('excelJS')

const ejs = require('ejs')
const pdf = require('html-pdf')
const fs = require('fs')
const path = require('path')


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

    getAllTalk = (req, res) => {
        talkModel.find({}).exec((err, Talks) => {
            if (err) {
                res.send('khong the lay thong tin all talk')
            } else {
                // console.log('lay thanh cong all talk', Talks)
                res.json(Talks)
            }
        })
    }
    getTalkById = (req, res) => {
        talkModel.find({ _id: req.params.id }).exec((err, Talk) => {
            if (err) {
                res.send('khong the lay thong tin talk')
            } else {
                // console.log('lay thanh cong talk', Talk)
                res.json(Talk)
            }
        })
    }
    exportAllTalk = async (req, res) => {
        try {
            const data = await talkModel.find({})
            const workbook = new excelJS.Workbook()
            const worksheet = workbook.addWorksheet('myList')
            worksheet.columns = [
                { header: 'S.no', key: 's_no', width: 10 },
                { header: 'Message', key: 'message', width: 10 },
                { header: 'Name', key: 'name', width: 10 },
                { header: 'Email', key: 'email', width: 10 },
                { header: 'Phone', key: 'phone', width: 10 }
            ]
            let count = 1
            data.forEach(
                (listdata) => {
                    listdata.s_no = count
                    worksheet.addRow(listdata)
                    count += 1
                }
            )
            worksheet.getRow(1).eachCell((cell) => {
                cell.font = { bold: true };
            })
            res.setHeader(
                'Content-Type',
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            );
            res.setHeader('Content-Disposition', `attachment; filename=data.xlsx`);
                return workbook.xlsx.write(res).then(()=>{
                    res.status(200)
                })
        }
        catch (e) {
            res.status(500).send(e)
        }
    }
    exportTalkById = async (req, res) => {
        try {
            const data = await talkModel.find({_id: req.params.id})
            const workbook = new excelJS.Workbook()
            const worksheet = workbook.addWorksheet('myList')
            worksheet.columns = [
                { header: 'S.no', key: 's_no', width: 10 },
                { header: 'Message', key: 'message', width: 10 },
                { header: 'Name', key: 'name', width: 10 },
                { header: 'Email', key: 'email', width: 10 },
                { header: 'Phone', key: 'phone', width: 10 }

                ]
            let count = 1
            data.forEach(
                (listdata) => {
                    listdata.s_no = count
                    worksheet.addRow(listdata)
                    count += 1
                }
            )
            worksheet.getRow(1).eachCell((cell) => {
                cell.font = { bold: true };
            })
            res.setHeader(
                'Content-Type',
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            );
            res.setHeader('Content-Disposition', `attachment; filename=data.xlsx`);
                return workbook.xlsx.write(res).then(()=>{
                    res.status(200)
                })
        }
        catch (e) {
            res.status(500).send(e)
        }
    }

    exportPDFListTalk = async (req, res) => {
        try {
            const users = await talkModel.find({})
            const data = {
                talkModel: users
            }
            // console.log('dddddddddddddddddddddddddd', users)

            const filePathName = path.resolve(__dirname, '../view/htmltopdf.ejs')
            const htmlString = fs.readFileSync(filePathName).toString()
            const options = {
                format: 'Letter'
            }
            const ejsData = ejs.render(htmlString, data)
            pdf.create(ejsData, options).toFile('data.pdf', (err, response) => {
                if (err) console.log(err)
                const filePath = path.resolve(__dirname, '../data.pdf')
                fs.readFile(filePath, (err, file) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).send('could not dload file')
                    }
                    res.setHeader('Content-Type', 'application/pdf');
                    res.setHeader('Content-Disposition', `attachment; filename="data.pdf"`);
                    res.send(file)
                })
            })
        }
        catch (e) {
            console.log(e.message);
        }
    }
    

}
module.exports =new talkController()