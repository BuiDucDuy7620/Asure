const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const FundingCompanyInformationSchema = new Schema({
    yourCompany: {
        type: Boolean,
        required: true,
    },
    businessPlans: {
        type: Boolean,
        required: true,
    },
    file: {
        type: String,
        required: true,
    }
});
module.exports = mongoose.model("FundingCompanyInformation", FundingCompanyInformationSchema);


